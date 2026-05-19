<?php
require "require_auth.php";
require "db.php";

$userId = current_user_id();

$stmt = $conn->prepare("SELECT name, email, bio, age, height_cm, weight_kg, fitness_goal, avatar_url FROM users WHERE id = ?");
$stmt->bind_param("i", $userId);
$stmt->execute();
$user = $stmt->get_result()->fetch_assoc();
$stmt->close();

$statsStmt = $conn->prepare("
    SELECT
        COUNT(*) AS workouts,
        COALESCE(SUM(set_counts), 0) AS sets_total,
        COALESCE(SUM(set_counts * rep_count * weight_kg), 0) AS volume_total,
        COALESCE(SUM(calories_burned), 0) AS calories_total,
        COUNT(DISTINCT DATE(created_at)) AS active_days
    FROM workout
    WHERE user_id = ?
");
$statsStmt->bind_param("i", $userId);
$statsStmt->execute();
$stats = $statsStmt->get_result()->fetch_assoc();
$statsStmt->close();

$weekStmt = $conn->prepare("
    SELECT
        COUNT(*) AS workouts_week,
        COALESCE(SUM(set_counts), 0) AS sets_week,
        COALESCE(SUM(set_counts * rep_count * weight_kg), 0) AS volume_week,
        COALESCE(SUM(calories_burned), 0) AS calories_week
    FROM workout
    WHERE user_id = ?
      AND created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)
");
$weekStmt->bind_param("i", $userId);
$weekStmt->execute();
$weekStats = $weekStmt->get_result()->fetch_assoc();
$weekStmt->close();

$bestStmt = $conn->prepare("
    SELECT
        workout_name,
        COUNT(*) AS sessions,
        COALESCE(SUM(set_counts * rep_count * weight_kg), 0) AS total_volume,
        MAX(created_at) AS last_done
    FROM workout
    WHERE user_id = ?
    GROUP BY workout_name
    ORDER BY total_volume DESC, sessions DESC
    LIMIT 1
");
$bestStmt->bind_param("i", $userId);
$bestStmt->execute();
$topExercise = $bestStmt->get_result()->fetch_assoc();
$bestStmt->close();

$lastStmt = $conn->prepare("
    SELECT workout_name, created_at
    FROM workout
    WHERE user_id = ?
    ORDER BY id DESC
    LIMIT 1
");
$lastStmt->bind_param("i", $userId);
$lastStmt->execute();
$lastWorkout = $lastStmt->get_result()->fetch_assoc();
$lastStmt->close();

$recentStmt = $conn->prepare("
    SELECT workout_name, set_counts, rep_count, weight_kg, calories_burned, created_at
    FROM workout
    WHERE user_id = ?
    ORDER BY id DESC
    LIMIT 5
");
$recentStmt->bind_param("i", $userId);
$recentStmt->execute();
$recent = $recentStmt->get_result();

$heightM = !empty($user["height_cm"]) ? ((float)$user["height_cm"] / 100) : 0;
$weightKg = !empty($user["weight_kg"]) ? (float)$user["weight_kg"] : 0;
$bmi = ($heightM > 0 && $weightKg > 0) ? $weightKg / ($heightM * $heightM) : null;
$profileFields = ["bio", "age", "height_cm", "weight_kg", "fitness_goal", "avatar_url"];
$completedFields = 1;
foreach ($profileFields as $field) {
    if (!empty($user[$field])) {
        $completedFields++;
    }
}
$profileCompletion = round(($completedFields / 7) * 100);
$workouts = (int)$stats["workouts"];
$activeDays = (int)$stats["active_days"];
$avgVolume = $workouts > 0 ? round($stats["volume_total"] / $workouts) : 0;
$avgCalories = $workouts > 0 ? round($stats["calories_total"] / $workouts) : 0;
$consistency = min(100, round(($activeDays / 7) * 100));
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Profile - IRONIX</title>
  <link rel="stylesheet" href="Css/style.css?v=43">
</head>
<body>
  <header>
    <?php render_nav("profile"); ?>
  </header>

  <main class="profile-page">
    <section class="profile-hero">
      <div class="profile-avatar">
        <?php if (!empty($user["avatar_url"])): ?>
          <img src="<?php echo htmlspecialchars($user["avatar_url"]); ?>" alt="Profile photo">
        <?php else: ?>
          <span><?php echo strtoupper(substr($user["name"], 0, 1)); ?></span>
        <?php endif; ?>
      </div>

      <div>
        <span class="eyebrow">Member Profile</span>
        <h2><?php echo htmlspecialchars($user["name"]); ?></h2>
        <p><?php echo htmlspecialchars($user["fitness_goal"] ?: "Set your fitness goal in your profile."); ?></p>
      </div>
    </section>

    <section class="profile-layout">
      <form class="panel profile-form" action="profile_update.php" method="POST">
        <div class="panel-title">
          <div>
            <span class="eyebrow">Details</span>
            <h3>Edit Profile</h3>
          </div>
        </div>

        <div class="profile-compact-grid">
          <label>Name
            <input name="name" value="<?php echo htmlspecialchars($user["name"]); ?>" required>
          </label>
          <label>Age
            <input name="age" type="number" value="<?php echo htmlspecialchars($user["age"] ?? ""); ?>">
          </label>
          <label>Height
            <input name="height_cm" type="number" step="0.1" value="<?php echo htmlspecialchars($user["height_cm"] ?? ""); ?>" placeholder="cm">
          </label>
          <label>Weight
            <input name="weight_kg" type="number" step="0.1" value="<?php echo htmlspecialchars($user["weight_kg"] ?? ""); ?>" placeholder="kg">
          </label>
        </div>

        <label>Goal
          <input name="fitness_goal" value="<?php echo htmlspecialchars($user["fitness_goal"] ?? ""); ?>" placeholder="Build muscle">
        </label>

        <label>Bio
          <textarea name="bio" rows="2" placeholder="Training focus, limits, or notes"><?php echo htmlspecialchars($user["bio"] ?? ""); ?></textarea>
        </label>

        <label>Profile Image URL
          <input name="avatar_url" value="<?php echo htmlspecialchars($user["avatar_url"] ?? ""); ?>" placeholder="https://...">
        </label>

        <button type="submit">Save Profile</button>
      </form>

      <section class="profile-progress">
        <section class="panel profile-overview">
          <div class="section-title">
            <div>
              <span class="eyebrow">Progress Snapshot</span>
              <h3>What matters right now</h3>
            </div>
          </div>

          <div class="profile-insight-grid">
            <article>
              <span>Profile Complete</span>
              <strong><?php echo $profileCompletion; ?>%</strong>
              <div class="progress-bar"><span style="width: <?php echo $profileCompletion; ?>%"></span></div>
            </article>
            <article>
              <span>Consistency</span>
              <strong><?php echo $activeDays; ?> active days</strong>
              <div class="progress-bar"><span style="width: <?php echo $consistency; ?>%"></span></div>
            </article>
            <article>
              <span>BMI</span>
              <strong><?php echo $bmi ? round($bmi, 1) : "Set height/weight"; ?></strong>
              <small><?php echo $bmi ? "Based on saved profile details" : "Add height and weight to calculate"; ?></small>
            </article>
            <article>
              <span>Last Workout</span>
              <strong><?php echo $lastWorkout ? htmlspecialchars($lastWorkout["workout_name"]) : "None yet"; ?></strong>
              <small><?php echo $lastWorkout ? htmlspecialchars($lastWorkout["created_at"]) : "Start a live session to track progress"; ?></small>
            </article>
          </div>
        </section>

        <div class="stats">
          <div class="stat-card">
            <h3>Workouts</h3>
            <p><?php echo (int)$stats["workouts"]; ?></p>
          </div>
          <div class="stat-card">
            <h3>Total Sets</h3>
            <p><?php echo (int)$stats["sets_total"]; ?></p>
          </div>
          <div class="stat-card">
            <h3>Total Volume</h3>
            <p><?php echo round($stats["volume_total"]); ?> kg</p>
          </div>
          <div class="stat-card">
            <h3>Calories</h3>
            <p><?php echo round($stats["calories_total"]); ?> kcal</p>
          </div>
        </div>

        <section class="panel profile-progress-detail">
          <div class="section-title">
            <div>
              <span class="eyebrow">Training Detail</span>
              <h3>Progress breakdown</h3>
            </div>
          </div>

          <div class="profile-detail-grid">
            <div>
              <span>This Week</span>
              <strong><?php echo (int)$weekStats["workouts_week"]; ?> workouts</strong>
              <small><?php echo round($weekStats["volume_week"]); ?> kg volume | <?php echo round($weekStats["calories_week"]); ?> kcal</small>
            </div>
            <div>
              <span>Average Session</span>
              <strong><?php echo $avgVolume; ?> kg volume</strong>
              <small><?php echo $avgCalories; ?> kcal per saved workout</small>
            </div>
            <div>
              <span>Top Exercise</span>
              <strong><?php echo $topExercise ? htmlspecialchars($topExercise["workout_name"]) : "No data yet"; ?></strong>
              <small><?php echo $topExercise ? round($topExercise["total_volume"]) . " kg total volume" : "Save workouts to reveal your strongest movement"; ?></small>
            </div>
            <div>
              <span>Body Details</span>
              <strong><?php echo $weightKg ? htmlspecialchars($weightKg) . " kg" : "Weight needed"; ?></strong>
              <small><?php echo !empty($user["height_cm"]) ? htmlspecialchars($user["height_cm"]) . " cm height" : "Add height for BMI and better estimates"; ?></small>
            </div>
          </div>
        </section>

        <section class="panel profile-recent">
          <div class="section-title">
            <div>
              <span class="eyebrow">Recent</span>
              <h3>Latest Workouts</h3>
            </div>
          </div>

          <ul class="workout-list">
            <?php if ($recent->num_rows === 0): ?>
              <li class="empty-state">No workouts saved yet.</li>
            <?php endif; ?>

            <?php while ($row = $recent->fetch_assoc()): ?>
              <li class="workout-item profile-workout-row">
                <div class="workout-info">
                  <strong><?php echo htmlspecialchars($row["workout_name"]); ?></strong>
                  <small><?php echo htmlspecialchars($row["created_at"]); ?></small>
                </div>
                <div class="workout-metrics">
                  <span><?php echo (int)$row["set_counts"]; ?> sets</span>
                  <span><?php echo (int)$row["rep_count"]; ?> reps</span>
                  <span><?php echo htmlspecialchars($row["weight_kg"]); ?> kg</span>
                  <span><?php echo round($row["calories_burned"]); ?> kcal</span>
                </div>
              </li>
            <?php endwhile; ?>
          </ul>
        </section>
      </section>
    </section>
  </main>
</body>
</html>
<?php
$recentStmt->close();
$conn->close();
?>
