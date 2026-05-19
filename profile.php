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
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Profile - IRONIX</title>
  <link rel="stylesheet" href="Css/style.css?v=17">
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
          <span class="eyebrow">Details</span>
          <h3>Edit Profile</h3>
        </div>

        <label>Name</label>
        <input name="name" value="<?php echo htmlspecialchars($user["name"]); ?>" required>

        <label>Bio</label>
        <textarea name="bio" rows="4" placeholder="Tell the community about your training."><?php echo htmlspecialchars($user["bio"] ?? ""); ?></textarea>

        <div class="form-pair">
          <div>
            <label>Age</label>
            <input name="age" type="number" value="<?php echo htmlspecialchars($user["age"] ?? ""); ?>">
          </div>
          <div>
            <label>Height (cm)</label>
            <input name="height_cm" type="number" step="0.1" value="<?php echo htmlspecialchars($user["height_cm"] ?? ""); ?>">
          </div>
        </div>

        <div class="form-pair">
          <div>
            <label>Weight (kg)</label>
            <input name="weight_kg" type="number" step="0.1" value="<?php echo htmlspecialchars($user["weight_kg"] ?? ""); ?>">
          </div>
          <div>
            <label>Goal</label>
            <input name="fitness_goal" value="<?php echo htmlspecialchars($user["fitness_goal"] ?? ""); ?>" placeholder="Build muscle">
          </div>
        </div>

        <label>Profile Image URL</label>
        <input name="avatar_url" value="<?php echo htmlspecialchars($user["avatar_url"] ?? ""); ?>" placeholder="https://...">

        <button type="submit">Save Profile</button>
      </form>

      <section class="profile-progress">
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
