<?php
require_once "auth_helpers.php";
require "db.php";

$search = trim($_GET["q"] ?? "");
$like = "%" . $search . "%";

if ($search !== "") {
    $stmt = $conn->prepare("
        SELECT
            u.id, u.name, u.bio, u.fitness_goal, u.avatar_url,
            COUNT(w.id) AS workouts,
            COALESCE(SUM(w.set_counts * w.rep_count * w.weight_kg), 0) AS volume_total,
            COALESCE(MAX(w.weight_kg), 0) AS max_lift
        FROM users u
        LEFT JOIN workout w ON w.user_id = u.id
        WHERE u.name LIKE ? OR u.fitness_goal LIKE ?
        GROUP BY u.id
        ORDER BY volume_total DESC
    ");
    $stmt->bind_param("ss", $like, $like);
} else {
    $stmt = $conn->prepare("
        SELECT
            u.id, u.name, u.bio, u.fitness_goal, u.avatar_url,
            COUNT(w.id) AS workouts,
            COALESCE(SUM(w.set_counts * w.rep_count * w.weight_kg), 0) AS volume_total,
            COALESCE(MAX(w.weight_kg), 0) AS max_lift
        FROM users u
        LEFT JOIN workout w ON w.user_id = u.id
        GROUP BY u.id
        ORDER BY volume_total DESC
        LIMIT 30
    ");
}

$stmt->execute();
$users = $stmt->get_result();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Community - IRONIX</title>
  <link rel="stylesheet" href="Css/style.css?v=44">
</head>
<body>
  <header>
    <?php render_nav("community"); ?>
  </header>

  <main class="community-page">
    <section class="community-hero">
      <div>
        <span class="eyebrow">Community</span>
        <h2>Search members and see public progress.</h2>
        <p>Discover other IRONIX members by name or goal, then compare workout activity and lifting progress.</p>
      </div>
    </section>

    <form class="community-search" method="GET">
      <input name="q" value="<?php echo htmlspecialchars($search); ?>" placeholder="Search member name or goal">
      <button type="submit">Search</button>
    </form>

    <section class="community-grid">
      <?php if ($users->num_rows === 0): ?>
        <div class="empty-state">No members found.</div>
      <?php endif; ?>

      <?php while ($user = $users->fetch_assoc()): ?>
        <article class="community-card">
          <div class="profile-avatar small-avatar">
            <?php if (!empty($user["avatar_url"])): ?>
              <img src="<?php echo htmlspecialchars($user["avatar_url"]); ?>" alt="Profile photo">
            <?php else: ?>
              <span><?php echo strtoupper(substr($user["name"], 0, 1)); ?></span>
            <?php endif; ?>
          </div>
          <h3><?php echo htmlspecialchars($user["name"]); ?></h3>
          <p><?php echo htmlspecialchars($user["fitness_goal"] ?: "No goal set yet."); ?></p>
          <div class="community-stats">
            <span><?php echo (int)$user["workouts"]; ?> workouts</span>
            <span><?php echo round($user["volume_total"]); ?> kg volume</span>
            <span><?php echo round($user["max_lift"]); ?> kg best lift</span>
          </div>
        </article>
      <?php endwhile; ?>
    </section>
  </main>
</body>
</html>
<?php
$stmt->close();
$conn->close();
?>
