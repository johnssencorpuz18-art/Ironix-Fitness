<?php
require_once "auth_helpers.php";
require "db.php";

$exercise = trim($_GET["exercise"] ?? "");
$like = "%" . $exercise . "%";

if ($exercise !== "") {
    $stmt = $conn->prepare("
        SELECT u.name, u.avatar_url, w.workout_name, MAX(w.weight_kg) AS personal_record, MAX(w.created_at) AS last_lift
        FROM workout w
        JOIN users u ON u.id = w.user_id
        WHERE w.workout_name LIKE ?
        GROUP BY u.id, w.workout_name
        ORDER BY personal_record DESC
        LIMIT 50
    ");
    $stmt->bind_param("s", $like);
} else {
    $stmt = $conn->prepare("
        SELECT u.name, u.avatar_url, w.workout_name, MAX(w.weight_kg) AS personal_record, MAX(w.created_at) AS last_lift
        FROM workout w
        JOIN users u ON u.id = w.user_id
        GROUP BY u.id, w.workout_name
        ORDER BY personal_record DESC
        LIMIT 50
    ");
}

$stmt->execute();
$leaders = $stmt->get_result();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Leaderboards - IRONIX</title>
  <link rel="stylesheet" href="Css/style.css?v=32">
</head>
<body>
  <header>
    <?php render_nav("leaderboard"); ?>
  </header>

  <main class="leaderboard-page">
    <section class="community-hero">
      <div>
        <span class="eyebrow">Leaderboards</span>
        <h2>Personal records by exercise.</h2>
        <p>Search an exercise like Bench Press, Squat, Deadlift, or Bicep Curl to compare top lifted weight.</p>
      </div>
    </section>

    <form class="community-search" method="GET">
      <input name="exercise" value="<?php echo htmlspecialchars($exercise); ?>" placeholder="Search exercise">
      <button type="submit">Filter</button>
    </form>

    <section class="panel leaderboard-panel">
      <div class="leaderboard-row leaderboard-head">
        <span>Rank</span>
        <span>Member</span>
        <span>Exercise</span>
        <span>PR Weight</span>
        <span>Date</span>
      </div>

      <?php $rank = 1; ?>
      <?php if ($leaders->num_rows === 0): ?>
        <div class="empty-state">No leaderboard records yet.</div>
      <?php endif; ?>

      <?php while ($row = $leaders->fetch_assoc()): ?>
        <div class="leaderboard-row">
          <span>#<?php echo $rank++; ?></span>
          <strong><?php echo htmlspecialchars($row["name"]); ?></strong>
          <span><?php echo htmlspecialchars($row["workout_name"]); ?></span>
          <span><?php echo round($row["personal_record"], 1); ?> kg</span>
          <span><?php echo htmlspecialchars($row["last_lift"]); ?></span>
        </div>
      <?php endwhile; ?>
    </section>
  </main>
</body>
</html>
<?php
$stmt->close();
$conn->close();
?>
