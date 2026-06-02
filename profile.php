<?php
require "require_auth.php";
require "db.php";
require "profile_schema.php";
require "profile_avatars.php";

$userId = current_user_id();
ensure_profile_columns($conn);

$stmt = $conn->prepare("
    SELECT name, email, bio, age, height_cm, weight_kg, target_weight_kg, body_goal,
           fitness_goal, avatar_url, birthday, contact_number, location, gender, activity_level
    FROM users
    WHERE id = ?
");
$stmt->bind_param("i", $userId);
$stmt->execute();
$user = $stmt->get_result()->fetch_assoc();
$stmt->close();

$statsStmt = $conn->prepare("
    SELECT
        COUNT(*) AS workouts,
        COALESCE(SUM(set_counts), 0) AS sets_total,
        COALESCE(SUM(set_counts * rep_count * weight_kg), 0) AS volume_total,
        COALESCE(MAX(weight_kg), 0) AS best_weight,
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
        COALESCE(MAX(weight_kg), 0) AS best_week_weight,
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
        COALESCE(MAX(weight_kg), 0) AS best_weight,
        MAX(created_at) AS last_done
    FROM workout
    WHERE user_id = ?
    GROUP BY workout_name
    ORDER BY best_weight DESC, total_volume DESC, sessions DESC
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
$defaultAvatars = default_profile_avatars();
$defaultAvatarPaths = default_profile_avatar_paths();
$currentAvatar = $user["avatar_url"] ?? "";
$hasDefaultAvatar = in_array($currentAvatar, $defaultAvatarPaths, true);
$profileFields = [
    "bio",
    "age",
    "height_cm",
    "weight_kg",
    "target_weight_kg",
    "body_goal",
    "fitness_goal",
    "avatar_url",
    "birthday",
    "contact_number",
    "location",
    "gender",
    "activity_level",
];
$completedFields = 1;
foreach ($profileFields as $field) {
    if (!empty($user[$field])) {
        $completedFields++;
    }
}
$profileCompletion = round(($completedFields / (count($profileFields) + 1)) * 100);
$workouts = (int)$stats["workouts"];
$activeDays = (int)$stats["active_days"];
$avgVolume = $workouts > 0 ? round($stats["volume_total"] / $workouts) : 0;
$avgCalories = $workouts > 0 ? round($stats["calories_total"] / $workouts) : 0;
$consistency = min(100, round(($activeDays / 7) * 100));

function kg_to_lb($value) {
    return round(((float)$value) * 2.20462, 1);
}

$bodyGoalOptions = ["", "Weight Loss", "Weight Gain", "Maintain Weight", "Recomposition"];
$currentWeightLb = !empty($user["weight_kg"]) ? kg_to_lb($user["weight_kg"]) : "";
$targetWeightLb = !empty($user["target_weight_kg"]) ? kg_to_lb($user["target_weight_kg"]) : "";
$bodyGoalLabel = $user["body_goal"] ?? "";
$weightGoalDelta = ($currentWeightLb !== "" && $targetWeightLb !== "") ? round(abs((float)$currentWeightLb - (float)$targetWeightLb), 1) : null;
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Profile - IRONIX</title>
  <link rel="stylesheet" href="Css/style.css?v=54">
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
      <form class="panel profile-form" action="profile_update.php" method="POST" enctype="multipart/form-data">
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
          <label>Birthday
            <input name="birthday" type="date" value="<?php echo htmlspecialchars($user["birthday"] ?? ""); ?>">
          </label>
          <label>Age
            <input name="age" type="number" value="<?php echo htmlspecialchars($user["age"] ?? ""); ?>">
          </label>
          <label>Height
            <input name="height_cm" type="number" step="0.1" value="<?php echo htmlspecialchars($user["height_cm"] ?? ""); ?>" placeholder="cm">
          </label>
          <label>Body Weight
            <input name="weight_lb" type="number" step="0.1" value="<?php echo htmlspecialchars($currentWeightLb); ?>" placeholder="lb">
          </label>
          <label>Contact Number
            <input name="contact_number" type="tel" value="<?php echo htmlspecialchars($user["contact_number"] ?? ""); ?>" placeholder="+63 900 000 0000">
          </label>
          <label>Location
            <input name="location" value="<?php echo htmlspecialchars($user["location"] ?? ""); ?>" placeholder="City or province">
          </label>
          <label>Gender
            <select name="gender">
              <?php
                $genderOptions = ["", "Male", "Female", "Prefer not to say", "Other"];
                foreach ($genderOptions as $option):
              ?>
                <option value="<?php echo htmlspecialchars($option); ?>" <?php echo ($user["gender"] ?? "") === $option ? "selected" : ""; ?>>
                  <?php echo $option === "" ? "Select gender" : htmlspecialchars($option); ?>
                </option>
              <?php endforeach; ?>
            </select>
          </label>
          <label>Activity Level
            <select name="activity_level">
              <?php
                $activityOptions = ["", "Sedentary", "Lightly active", "Moderately active", "Very active", "Athlete"];
                foreach ($activityOptions as $option):
              ?>
                <option value="<?php echo htmlspecialchars($option); ?>" <?php echo ($user["activity_level"] ?? "") === $option ? "selected" : ""; ?>>
                  <?php echo $option === "" ? "Select activity" : htmlspecialchars($option); ?>
                </option>
              <?php endforeach; ?>
            </select>
          </label>
          <label>Body Goal
            <select name="body_goal">
              <?php foreach ($bodyGoalOptions as $option): ?>
                <option value="<?php echo htmlspecialchars($option); ?>" <?php echo $bodyGoalLabel === $option ? "selected" : ""; ?>>
                  <?php echo $option === "" ? "Select goal" : htmlspecialchars($option); ?>
                </option>
              <?php endforeach; ?>
            </select>
          </label>
          <label>Target Weight
            <input name="target_weight_lb" type="number" step="0.1" value="<?php echo htmlspecialchars($targetWeightLb); ?>" placeholder="lb">
          </label>
        </div>

        <label>Goal
          <input name="fitness_goal" value="<?php echo htmlspecialchars($user["fitness_goal"] ?? ""); ?>" placeholder="Build muscle">
        </label>

        <label>Bio
          <textarea name="bio" rows="2" placeholder="Training focus, limits, or notes"><?php echo htmlspecialchars($user["bio"] ?? ""); ?></textarea>
        </label>

        <div class="avatar-picker">
          <span>Profile Image</span>
          <div class="avatar-choice-grid">
            <?php foreach ($defaultAvatars as $avatar): ?>
              <label class="avatar-choice">
                <input
                  type="radio"
                  name="avatar_choice"
                  value="<?php echo htmlspecialchars($avatar["path"]); ?>"
                  <?php echo $currentAvatar === $avatar["path"] || ($currentAvatar === "" && $avatar["path"] === $defaultAvatars[0]["path"]) ? "checked" : ""; ?>
                >
                <img src="<?php echo htmlspecialchars($avatar["path"]); ?>" alt="<?php echo htmlspecialchars($avatar["label"]); ?> avatar">
                <strong><?php echo htmlspecialchars($avatar["label"]); ?></strong>
              </label>
            <?php endforeach; ?>

            <label class="avatar-choice avatar-choice-custom">
              <input type="radio" name="avatar_choice" value="" <?php echo !$hasDefaultAvatar && $currentAvatar !== "" ? "checked" : ""; ?>>
              <span>Custom</span>
              <strong>Upload or URL</strong>
            </label>
          </div>
        </div>

        <label>Upload Photo
          <input name="avatar_upload" type="file" accept="image/png,image/jpeg,image/webp,image/gif">
          <small class="profile-form-note">PNG, JPG, WebP, or GIF. Max 3 MB.</small>
        </label>

        <label>Custom Image URL
          <input name="avatar_url" value="<?php echo htmlspecialchars(!$hasDefaultAvatar ? $currentAvatar : ""); ?>" placeholder="https://... or uploaded path">
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
            <h3>Best Exercise PR</h3>
            <p><?php echo kg_to_lb($stats["best_weight"]); ?> lb</p>
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
              <small><?php echo kg_to_lb($weekStats["best_week_weight"]); ?> lb best PR | <?php echo round($weekStats["calories_week"]); ?> kcal</small>
            </div>
            <div>
              <span>Average Session</span>
              <strong><?php echo $avgCalories; ?> kcal</strong>
              <small>Average workout calories burned per saved session</small>
            </div>
            <div>
              <span>Top Exercise</span>
              <strong><?php echo $topExercise ? htmlspecialchars($topExercise["workout_name"]) : "No data yet"; ?></strong>
              <small><?php echo $topExercise ? kg_to_lb($topExercise["best_weight"]) . " lb best set weight" : "Save workouts to reveal your strongest movement"; ?></small>
            </div>
            <div>
              <span>Body Details</span>
              <strong><?php echo $currentWeightLb !== "" ? htmlspecialchars($currentWeightLb) . " lb" : "Weight needed"; ?></strong>
              <small><?php echo !empty($user["height_cm"]) ? htmlspecialchars($user["height_cm"]) . " cm height" : "Add height for BMI and better estimates"; ?></small>
            </div>
            <div>
              <span>Weight Goal</span>
              <strong><?php echo $bodyGoalLabel ? htmlspecialchars($bodyGoalLabel) : "Not set"; ?></strong>
              <small><?php echo $weightGoalDelta !== null ? htmlspecialchars($weightGoalDelta) . " lb from target" : "Add current and target weight"; ?></small>
            </div>
            <div>
              <span>Profile Info</span>
              <strong><?php echo !empty($user["activity_level"]) ? htmlspecialchars($user["activity_level"]) : "Activity needed"; ?></strong>
              <small><?php echo !empty($user["location"]) ? htmlspecialchars($user["location"]) : "Add location for local planning context"; ?></small>
            </div>
            <div>
              <span>Contact</span>
              <strong><?php echo !empty($user["contact_number"]) ? htmlspecialchars($user["contact_number"]) : "Not added"; ?></strong>
              <small><?php echo !empty($user["birthday"]) ? "Birthday: " . htmlspecialchars($user["birthday"]) : "Add birthday for a complete profile"; ?></small>
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
                  <span><?php echo kg_to_lb($row["weight_kg"]); ?> lb</span>
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
