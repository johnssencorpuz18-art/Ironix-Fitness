<?php require "require_auth.php"; ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ironix Workouts</title>
  <link rel="stylesheet" href="Css/style.css?v=12">
</head>
<body class="workouts-body">
  <header>
    <?php render_nav("workouts"); ?>
  </header>

  <main class="workouts-shell">
    <section class="workout-hero-panel">
      <div>
        <span class="eyebrow">Member Training Log</span>
        <h2>Workout Dashboard</h2>
        <p>Create a workout entry, track session volume, and review your saved lifts from one focused workspace.</p>
        <a class="button-link progress-link" href="dashboard.php">View Progress</a>
      </div>

      <div class="hero-stat-strip" aria-label="Training goals">
        <span>Strength</span>
        <span>Hypertrophy</span>
        <span>Endurance</span>
      </div>
    </section>

    <section class="workouts-layout">
      <aside class="panel workout-entry-panel">
        <div class="panel-title">
          <span class="eyebrow">New Entry</span>
          <h3>Add Workout</h3>
        </div>

        <form class="workout-form" id="workoutForm">
          <div class="form-field full-field">
            <label for="exercise">Workout Name</label>
            <input id="exercise" name="exercise" type="text" placeholder="Search or choose an exercise" list="exerciseOptions" autocomplete="off" required>
            <datalist id="exerciseOptions"></datalist>
          </div>

          <div class="form-pair">
            <div class="form-field">
              <label for="sets">Sets</label>
              <input id="sets" name="sets" type="number" min="1" placeholder="4" required>
            </div>

            <div class="form-field">
              <label for="reps">Reps</label>
              <input id="reps" name="reps" type="number" min="1" placeholder="10" required>
            </div>
          </div>

          <div class="form-pair">
            <div class="form-field">
              <label for="weight">Weight (kg)</label>
              <input id="weight" name="weight" type="number" min="0" step="0.5" placeholder="60" required>
            </div>

            <div class="form-field">
              <label for="duration">Duration (min)</label>
              <input id="duration" name="duration" type="number" min="1" placeholder="45" required>
            </div>
          </div>

          <div class="form-actions">
            <button type="submit">Save Workout</button>
          </div>

          <p class="form-message" id="formMessage" aria-live="polite"></p>
        </form>

        <section class="exercise-picker" aria-label="Exercise library">
          <div class="picker-head">
            <span class="eyebrow">Exercise Library</span>
            <p>Click any exercise to paste it into the workout name field.</p>
          </div>

          <div class="exercise-tabs" id="exerciseTabs"></div>
          <div class="exercise-options" id="exerciseLibrary"></div>
        </section>
      </aside>

      <section class="workout-main-column">
        <section class="panel workout-summary">
          <div class="panel-title">
            <span class="eyebrow">Progress</span>
            <h3>Training Summary</h3>
          </div>

          <div class="summary-cards">
            <div class="summary-card">
              <span class="card-mark">01</span>
              <span>Total Workouts</span>
              <strong id="totalWorkouts">0</strong>
            </div>

            <div class="summary-card">
              <span class="card-mark">02</span>
              <span>Total Sets</span>
              <strong id="totalSets">0</strong>
            </div>

            <div class="summary-card">
              <span class="card-mark">03</span>
              <span>Total Volume</span>
              <strong id="totalVolume">0 kg</strong>
            </div>

            <div class="summary-card">
              <span class="card-mark">04</span>
              <span>Calories Burned</span>
              <strong id="totalCalories">0 kcal</strong>
            </div>
          </div>
        </section>

        <section class="panel workout-list-panel">
          <div class="section-title">
            <div>
              <span class="eyebrow">History</span>
              <h3>Saved Workouts</h3>
            </div>
            <span id="workoutCount">0 entries</span>
          </div>

          <ul class="workout-list" id="list"></ul>
        </section>
      </section>
    </section>
  </main>

  <script src="Js/app.js?v=12"></script>
</body>
</html>
