<?php require "require_auth.php"; ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>IRONIX Progress</title>
  <link rel="stylesheet" href="Css/style.css?v=40">
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

      <a class="button-link progress-link" href="workouts.php">Plan Workout</a>
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
            <h3>Total Volume</h3>
            <p id="progressVolume">0 kg</p>
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
            <h3>Volume Today</h3>
            <p id="todayProgressVolume">0 kg</p>
          </div>

          <div class="stat-card">
            <h3>Sets Today</h3>
            <p id="todayProgressSets">0 Sets</p>
          </div>
        </div>
      </section>
    </section>

    <section class="dashboard-workspace">
      <section class="panel live-session-panel dashboard-session-panel" id="liveSession">
        <div class="section-title">
          <div>
            <span class="eyebrow">Today's Workout</span>
            <h3>Live Session</h3>
          </div>
          <div class="session-actions">
            <a class="button-link secondary compact-link" href="workouts.php?view=calendar">Weekly Plan</a>
            <a class="button-link secondary compact-link" href="workouts.php?view=library">Add Exercises</a>
            <button type="button" class="secondary-button" id="clearSessionButton">Clear</button>
          </div>
        </div>

        <div class="session-status-grid">
          <div>
            <span>Queued</span>
            <strong id="sessionExerciseCount">0</strong>
          </div>
          <div>
            <span>Done Today</span>
            <strong id="sessionDoneCount">0</strong>
          </div>
          <div>
            <span>Queued Volume</span>
            <strong id="sessionVolume">0 kg</strong>
          </div>
        </div>

        <div class="live-session-list" id="liveSessionList"></div>
        <p class="form-message" id="sessionMessage" aria-live="polite"></p>
      </section>

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
  </main>

  <script src="Js/app.js?v=41"></script>
</body>
</html>
