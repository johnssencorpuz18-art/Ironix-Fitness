<?php
require "require_auth.php";

$allowedViews = ["setup", "library", "calendar", "log"];
$view = $_GET["view"] ?? "setup";

if (!in_array($view, $allowedViews, true)) {
    $view = "setup";
}

function view_attr($name) {
    global $view;
    return $view === $name ? '' : ' hidden';
}

function view_class($name) {
    global $view;
    return $view === $name ? ' class="active"' : '';
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>IRONIX Workouts</title>
  <link rel="stylesheet" href="Css/style.css?v=45">
</head>
<body class="workouts-body">
  <header>
    <?php render_nav("workouts"); ?>
  </header>

  <main class="workouts-shell">
    <section class="workout-hero-panel">
      <div>
        <span class="eyebrow">Workout Planner</span>
        <h2>Build a plan around your target muscles.</h2>
        <p>Set up your split, choose exercises, schedule the week, then finish the workout from the dashboard.</p>
        <a class="button-link progress-link" href="dashboard.php">View Progress</a>
      </div>

      <div class="hero-stat-strip" aria-label="Training goals">
        <span>Plan</span>
        <span>Train</span>
        <span>Save</span>
      </div>
    </section>

    <section class="planner-nav" aria-label="Workout planner sections">
      <a<?php echo view_class("setup"); ?> href="workouts.php?view=setup">Setup</a>
      <a<?php echo view_class("library"); ?> href="workouts.php?view=library">Exercise Library</a>
      <a<?php echo view_class("calendar"); ?> href="workouts.php?view=calendar">Weekly Plan</a>
      <a href="dashboard.php#liveSession">Live Session</a>
      <a<?php echo view_class("log"); ?> href="workouts.php?view=log">Manual Log</a>
    </section>

    <section class="setup-planner-grid" id="setupPlanner"<?php echo view_attr("setup"); ?>>
      <section class="panel onboarding-panel" id="onboardingPanel">
        <form id="fitnessProfileForm">
          <div class="section-title">
            <div>
              <span class="eyebrow">Personal Setup</span>
              <h3>Recommended Split</h3>
            </div>
            <button class="secondary-button" type="button" id="skipOnboarding">Skip</button>
          </div>

          <div class="onboarding-grid compact-grid">
            <label>Primary goal
              <select id="goalPreference">
                <option value="muscle">Build muscle</option>
                <option value="strength">Get stronger</option>
                <option value="fatLoss">Lose fat</option>
                <option value="general">General fitness</option>
              </select>
            </label>

            <label>Training level
              <select id="levelPreference">
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </label>

            <label>Days per week
              <select id="daysPreference">
                <option value="3">3 days</option>
                <option value="4">4 days</option>
                <option value="5">5 days</option>
                <option value="6">6 days</option>
              </select>
            </label>

            <label>Time
              <select id="timePreference">
                <option value="30">30 minutes</option>
                <option value="45">45 minutes</option>
                <option value="60">60 minutes</option>
                <option value="75">75 minutes</option>
              </select>
            </label>

            <label>Equipment
              <select id="equipmentPreference">
                <option value="gym">Full gym</option>
                <option value="mixed">Mixed equipment</option>
                <option value="dumbbell">Dumbbells</option>
                <option value="bodyweight">Bodyweight</option>
              </select>
            </label>

            <label>Extra focus
              <select id="focusPreference">
                <option value="balanced">Balanced</option>
                <option value="upper">Upper body</option>
                <option value="lower">Lower body</option>
                <option value="core">Core</option>
              </select>
            </label>
          </div>

          <label>Anything to avoid?
            <input id="limitPreference" placeholder="Knee pain, no jumping, no barbell">
          </label>

          <button type="submit">Generate Plan</button>
        </form>
      </section>
    </section>

    <section class="library-workspace" id="exercisePlanner"<?php echo view_attr("library"); ?>>
      <aside class="panel planner-controls">
        <div class="panel-title">
          <span class="eyebrow">Target Area</span>
          <h3>Choose Focus</h3>
        </div>
        <div class="category-tabs" id="categoryTabs"></div>

        <label for="muscleSelect">Target muscle</label>
        <select id="muscleSelect"></select>

        <label for="exerciseSearch">Search exercise</label>
        <input id="exerciseSearch" type="search" placeholder="Search by name or equipment">
      </aside>

      <section class="panel exercise-browser">
        <div class="section-title">
          <div>
            <span class="eyebrow">Exercise Library</span>
            <h3 id="exerciseBrowserTitle">Recommended exercises</h3>
          </div>
          <span id="exerciseCount">0 exercises</span>
        </div>

        <div class="exercise-card-grid" id="exerciseCardGrid"></div>
      </section>

      <section class="panel exercise-detail" id="exerciseDetail">
        <div class="exercise-demo-media" id="exerciseDiagram" aria-label="Exercise muscle diagram">
          <div class="anatomy-diagram-placeholder">Select an exercise</div>
        </div>
        <div>
          <span class="eyebrow" id="exerciseMeta">Exercise</span>
          <h3 id="exerciseName">Select an exercise</h3>
          <p id="exerciseSummary">Pick a movement to see setup notes, follow-along steps, and quick actions.</p>
          <ol id="exerciseSteps"></ol>
          <div class="detail-actions">
            <button type="button" id="startExerciseButton">Manual Log</button>
            <button type="button" class="secondary-button" id="addToSessionButton">Add To Dashboard</button>
            <button type="button" class="secondary-button" id="addToCalendarButton">Add To Workout</button>
          </div>

          <section class="plan-add-panel" id="planAddPanel" hidden>
            <span class="eyebrow">Add To Weekly Plan</span>
            <h4 id="planAddTitle">Selected exercise</h4>
            <div class="day-checkbox-grid" id="planDayChoices"></div>
            <div class="session-input-grid">
              <label>Sets
                <input id="planSets" type="number" min="1">
              </label>
              <label>Reps
                <input id="planReps" type="number" min="1">
              </label>
              <label>Weight
                <input id="planWeight" type="number" min="0" step="0.5" placeholder="0">
              </label>
              <label>Min
                <input id="planDuration" type="number" min="1">
              </label>
            </div>
            <div class="detail-actions">
              <button type="button" id="savePlanExerciseButton">Save To Plan</button>
              <button type="button" class="secondary-button" id="cancelPlanExerciseButton">Cancel</button>
            </div>
            <p class="form-message" id="planAddMessage" aria-live="polite"></p>
          </section>
        </div>
      </section>
    </section>

    <section class="planner-layout lower-workout-grid" id="weeklyPlanner"<?php echo view_attr("calendar"); ?>>
      <section class="panel calendar-panel">
        <div class="section-title">
          <div>
            <span class="eyebrow">Calendar</span>
            <h3>Weekly Plan</h3>
          </div>
          <button type="button" class="secondary-button" id="clearCalendarButton">Clear Plan</button>
        </div>
        <div class="calendar-grid" id="calendarGrid"></div>
      </section>

      <section class="panel recommendation-panel">
        <div class="panel-title">
          <span class="eyebrow">Suggested Split</span>
          <h3>Your Plan</h3>
        </div>
        <div id="recommendedPlan" class="recommended-plan"></div>
      </section>
    </section>

    <section class="workouts-layout compact-workout-log" id="workoutLog"<?php echo view_attr("log"); ?>>
      <aside class="panel workout-entry-panel">
        <div class="panel-title">
          <span class="eyebrow">Save Session</span>
          <h3>Workout Log</h3>
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

        <section class="exercise-picker" aria-label="Quick exercise picker">
          <div class="picker-head">
            <span class="eyebrow">Quick Picks</span>
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

        <section class="panel workout-list-panel" id="savedHistory">
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

    <div class="step-footer">
      <?php if ($view === "setup"): ?>
        <a class="button-link" href="workouts.php?view=library">Next: Choose Exercises</a>
      <?php elseif ($view === "library"): ?>
        <a class="button-link secondary" href="workouts.php?view=setup">Back</a>
        <a class="button-link" href="workouts.php?view=calendar">Next: Weekly Plan</a>
      <?php elseif ($view === "calendar"): ?>
        <a class="button-link secondary" href="workouts.php?view=library">Back</a>
        <a class="button-link" href="dashboard.php#liveSession">Next: Live Session</a>
      <?php else: ?>
        <a class="button-link secondary" href="workouts.php?view=calendar">Back</a>
        <a class="button-link" href="dashboard.php">Go To Dashboard</a>
      <?php endif; ?>
    </div>
  </main>

  <script src="Js/app.js?v=46"></script>
</body>
</html>
