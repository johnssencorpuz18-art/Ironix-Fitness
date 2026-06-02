<?php require "require_auth.php"; ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>IRONIX Progress</title>
  <link rel="stylesheet" href="Css/style.css?v=53">
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

      <div class="hero-actions">
        <a class="button-link progress-link" href="workouts.php">Plan Workout</a>
        <a class="button-link secondary" href="live.php">Live Session</a>
      </div>
    </section>

    <section class="progress-split">
      <section class="panel progress-stat-panel">
        <div class="panel-title">
          <span class="eyebrow">Overall Progress</span>
          <h3>All saved history</h3>
        </div>
        <div class="stats">
          <div class="stat-card">
            <h3>Workout Calories Burned</h3>
            <p id="progressCalories">0 kcal</p>
          </div>

          <div class="stat-card">
            <h3>Workouts</h3>
            <p id="progressWorkouts">0 Sessions</p>
          </div>

          <div class="stat-card">
            <h3>Best Exercise PR</h3>
            <p id="progressVolume">0 lb</p>
          </div>

          <div class="stat-card">
            <h3>Active Days</h3>
            <p id="progressDays">0 Days</p>
          </div>
        </div>
      </section>

      <section class="panel progress-stat-panel">
        <div class="panel-title">
          <span class="eyebrow">Current Progress</span>
          <h3>Today</h3>
        </div>
        <div class="stats today-stats">
          <div class="stat-card">
            <h3>Workout Calories Burned Today</h3>
            <p id="todayProgressCalories">0 kcal</p>
          </div>

          <div class="stat-card">
            <h3>Done Today</h3>
            <p id="todayProgressWorkouts">0 Exercises</p>
          </div>

          <div class="stat-card">
            <h3>Best PR Today</h3>
            <p id="todayProgressVolume">0 lb</p>
          </div>

          <div class="stat-card">
            <h3>Sets Today</h3>
            <p id="todayProgressSets">0 Sets</p>
          </div>
        </div>
      </section>
    </section>

    <section class="coach-grid">
      <section class="panel coach-panel">
        <div class="section-title">
          <div>
            <span class="eyebrow">Recovery Coach</span>
            <h3>Readiness Check</h3>
          </div>
        </div>
        <div class="coach-score">
          <strong id="recoveryScore">--</strong>
          <span id="recoveryLabel">Add today check-in</span>
        </div>
        <div class="recovery-input-grid">
          <label>Sleep
            <select id="sleepQuality">
              <option value="3">Good</option>
              <option value="2">Okay</option>
              <option value="1">Poor</option>
            </select>
          </label>
          <label>Soreness
            <select id="sorenessLevel">
              <option value="3">Low</option>
              <option value="2">Medium</option>
              <option value="1">High</option>
            </select>
          </label>
          <label>Energy
            <select id="energyLevel">
              <option value="3">High</option>
              <option value="2">Normal</option>
              <option value="1">Low</option>
            </select>
          </label>
        </div>
        <p id="recoveryAdvice" class="coach-advice">Answer the check-in to get today&apos;s training intensity suggestion.</p>
      </section>

      <section class="panel coach-panel">
        <div class="section-title">
          <div>
            <span class="eyebrow">Smart Progression</span>
            <h3>Overload Alerts</h3>
          </div>
        </div>
        <div class="coach-alert-list" id="overloadAlerts"></div>
      </section>
    </section>

    <section class="dashboard-workspace">
      <section class="panel today-saved-panel">
        <div class="section-title">
          <div>
            <span class="eyebrow">Saved Today</span>
            <h3>Completed Exercises</h3>
          </div>
          <span id="todayWorkoutCount">0 saved</span>
        </div>

        <ul class="workout-list compact-workout-list" id="todayWorkoutList"></ul>
      </section>
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

    <section class="panel exercise-pr-panel">
      <div class="section-title">
        <div>
          <span class="eyebrow">Exercise PRs</span>
          <h3>Best Weight By Exercise</h3>
        </div>
      </div>
      <div class="exercise-pr-grid" id="exercisePrGrid"></div>
    </section>
  </main>

  <script src="Js/app.js?v=53"></script>
</body>
</html>
