<?php require "require_auth.php"; ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>IRONIX Live Session</title>
  <link rel="stylesheet" href="Css/style.css?v=50">
</head>
<body>
  <header>
    <?php render_nav("live"); ?>
  </header>

  <main class="dashboard live-page">
    <section class="progress-hero compact-hero">
      <div>
        <span class="eyebrow">Assist Mode</span>
        <h2>Live Workout Session</h2>
        <p class="subtitle">Start each exercise, measure real training time, and use demo or voice guidance when you want help.</p>
      </div>

      <a class="button-link progress-link" href="workouts.php?view=calendar">Weekly Plan</a>
    </section>

    <section class="panel live-session-panel dashboard-session-panel" id="liveSession">
      <div class="section-title">
        <div>
          <span class="eyebrow">Today's Workout</span>
          <h3>Live Session</h3>
        </div>
        <div class="session-actions">
          <label class="guidance-toggle">
            <input type="checkbox" id="sessionGuidanceToggle">
            <span>Show Demo On Start</span>
          </label>
          <label class="guidance-toggle">
            <input type="checkbox" id="sessionVoiceToggle">
            <span>Voice Assist</span>
          </label>
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
          <span>Queued Lift</span>
          <strong id="sessionVolume">0 kg</strong>
        </div>
      </div>

      <div class="live-session-list" id="liveSessionList"></div>
      <p class="form-message" id="sessionMessage" aria-live="polite"></p>
    </section>

    <div class="demo-modal" id="sessionDemoModal" hidden>
      <div class="demo-modal-backdrop" data-close-demo="1"></div>
      <section class="demo-modal-panel" role="dialog" aria-modal="true" aria-labelledby="sessionDemoTitle">
        <div class="section-title">
          <div>
            <span class="eyebrow">Guided Demo</span>
            <h3 id="sessionDemoTitle">Exercise Form</h3>
          </div>
          <button type="button" class="secondary-button compact-link" data-close-demo="1">Close</button>
        </div>
        <div id="sessionDemoContent"></div>
      </section>
    </div>
  </main>

  <script src="Js/app.js?v=50"></script>
</body>
</html>
