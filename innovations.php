<?php require "require_auth.php"; ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>IRONIX Innovation Roadmap</title>
  <link rel="stylesheet" href="Css/style.css?v=52">
</head>
<body>
  <header>
    <?php render_nav("innovation"); ?>
  </header>

  <main class="dashboard innovation-page">
    <section class="progress-hero compact-hero">
      <div>
        <span class="eyebrow">Product Strategy</span>
        <h2>Innovation Roadmap</h2>
        <p class="subtitle">Competitive feature ideas for making IRONIX stronger than a basic gym tracker.</p>
      </div>
      <div class="hero-actions">
        <a class="button-link" href="workouts.php">Build Training Flow</a>
        <a class="button-link secondary" href="diet.php">Build Diet Flow</a>
      </div>
    </section>

    <section class="panel innovation-focus-panel">
      <div class="section-title">
        <div>
          <span class="eyebrow">Next Best Builds</span>
          <h3>What should come first</h3>
        </div>
      </div>
      <div class="innovation-focus-grid">
        <article>
          <span>1</span>
          <strong>Adaptive Training Engine</strong>
          <p>Automatically adjusts sets, reps, weight, and rest based on completion, PRs, soreness, and missed days.</p>
        </article>
        <article>
          <span>2</span>
          <strong>Coach Mode</strong>
          <p>Live voice and visual cues during each exercise, with rest countdowns and form reminders.</p>
        </article>
        <article>
          <span>3</span>
          <strong>Nutrition Sync</strong>
          <p>Connects diet calories and workout burn into one daily balance so users see the full fitness picture.</p>
        </article>
      </div>
    </section>

    <section class="innovation-grid" aria-label="Competitive feature suggestions">
      <?php
        $ideas = [
          ["Adaptive Training Engine", "High", "Personalize weekly plans from actual performance, missed workouts, PRs, and fatigue notes.", "Makes IRONIX feel like a coach instead of a static planner."],
          ["Smart Recovery Score", "High", "Ask sleep, soreness, stress, and energy, then recommend rest, deload, or full training.", "Helps users avoid burnout and injuries."],
          ["Form Coach Library", "High", "Add real-human demo references, step cues, common mistakes, and targeted muscle highlights.", "Improves trust and makes beginners feel guided."],
          ["Live Rest Timer", "High", "Add automatic rest countdowns between sets with voice prompts and suggested rest by exercise intensity.", "Makes live sessions more useful during real workouts."],
          ["Progressive Overload Alerts", "High", "Detect when the user is ready to add weight, reps, or sets based on recent performance.", "Creates a clear reason to return every week."],
          ["Diet-Workout Balance", "High", "Show food calories eaten, workout calories burned, maintenance estimate, and realistic weekly trend.", "Competes with apps that separate food and training."],
          ["Meal Prep Mode", "Medium", "Turn weekly meal plans into grocery lists, prep batches, and per-day serving targets.", "Makes diet planning practical, not just informational."],
          ["Streaks With Missed-Day Recovery", "Medium", "Reward consistency but offer a recovery plan when users miss a day instead of only breaking a streak.", "Keeps users from quitting after one bad day."],
          ["Body Measurement Tracker", "Medium", "Track waist, chest, arms, thighs, body weight, photos, and timeline comparisons.", "Shows progress when scale weight is misleading."],
          ["Challenge System", "Medium", "Create weekly gym challenges like push-up ladder, steps, conditioning, or volume goals.", "Adds engagement and community competition."],
          ["AI Plan Explainability", "Medium", "Every recommendation should explain why: goal, history, fatigue, equipment, and available time.", "Builds user trust in automated plans."],
          ["Equipment-Based Plan Builder", "Medium", "Generate plans from mixed equipment choices: dumbbell, barbell, cable, machine, bodyweight.", "Matches real gym availability and home workouts."],
          ["Personal Records Dashboard", "Medium", "Show best set weight, estimated 1RM, total volume records, and PR dates per exercise.", "Makes progress feel measurable and addictive."],
          ["Coach Check-In Questions", "Medium", "Before each week, ask goal, schedule, soreness, motivation, and preferred intensity.", "Keeps plans fresh and personal."],
          ["Community Templates", "Low", "Let users share workout and meal templates, then copy them into their own weekly plan.", "Turns community into a useful planning tool."]
        ];

        foreach ($ideas as $index => $idea):
      ?>
        <article class="innovation-card">
          <div class="innovation-card-head">
            <span><?php echo $index + 1; ?></span>
            <strong><?php echo htmlspecialchars($idea[1]); ?> Priority</strong>
          </div>
          <h3><?php echo htmlspecialchars($idea[0]); ?></h3>
          <p><?php echo htmlspecialchars($idea[2]); ?></p>
          <small><?php echo htmlspecialchars($idea[3]); ?></small>
        </article>
      <?php endforeach; ?>
    </section>
  </main>
</body>
</html>
