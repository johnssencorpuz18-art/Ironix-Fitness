<?php require "require_auth.php"; ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>IRONIX Progress</title>
  <link rel="stylesheet" href="Css/style.css?v=16">
</head>
<body>
  <header>
    <?php render_nav("progress"); ?>
  </header>

  <main class="dashboard progress-page">
    <section class="progress-hero">
      <div>
        <span class="eyebrow">Current Member</span>
        <h2>Progress Overview</h2>
        <p class="subtitle">Your totals update from the workouts you save in the workout dashboard.</p>
      </div>

      <a class="button-link progress-link" href="workouts.php">Log Workout</a>
    </section>

    <section class="stats">
      <div class="stat-card">
        <h3>Calories Burned</h3>
        <p id="progressCalories">0 kcal</p>
      </div>

      <div class="stat-card">
        <h3>Workouts</h3>
        <p id="progressWorkouts">0 Sessions</p>
      </div>

      <div class="stat-card">
        <h3>Total Volume</h3>
        <p id="progressVolume">0 kg</p>
      </div>

      <div class="stat-card">
        <h3>Active Days</h3>
        <p id="progressDays">0 Days</p>
      </div>
    </section>

    <section class="panel progress-recent">
      <div class="section-title">
        <div>
          <span class="eyebrow">Recent</span>
          <h3>Latest Saved Workouts</h3>
        </div>
      </div>

      <ul class="workout-list" id="progressRecent"></ul>
    </section>
  </main>

  <script src="Js/app.js?v=16"></script>
</body>
</html>
