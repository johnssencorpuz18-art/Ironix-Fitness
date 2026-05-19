<?php require_once "auth_helpers.php"; ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>IRONIX Fitness</title>
  <link rel="stylesheet" href="Css/style.css?v=42">
</head>
<body>
  <header>
    <?php render_nav("home"); ?>
  </header>

  <main class="hero">
    <section class="hero-text">
      <span class="eyebrow">Training Platform</span>
      <h2>Build strength with every session tracked.</h2>
      <p>Log workouts, calculate BMI, review progress, compare leaderboards, and keep diet choices in one focused IRONIX workspace.</p>
      <div class="hero-actions">
        <a class="button-link" href="auth.php#signup">Get Started</a>
        <a class="button-link secondary" href="community.php">View Community</a>
      </div>
    </section>
  </main>
</body>
</html>
