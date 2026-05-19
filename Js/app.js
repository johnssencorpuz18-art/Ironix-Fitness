const exerciseCatalog = [
  {
    name: "Barbell Bench Press",
    category: "Upper Body",
    muscle: "Chest",
    equipment: "barbell",
    level: "beginner",
    sets: 4,
    reps: 8,
    images: ["Barbell_Bench_Press_-_Medium_Grip/0.jpg", "Barbell_Bench_Press_-_Medium_Grip/1.jpg"],
    steps: [
      "Lie on the bench with eyes under the bar and feet flat.",
      "Grip slightly wider than shoulder width, brace, and unrack.",
      "Lower the bar to mid chest with elbows under control.",
      "Press up until arms are straight without losing your brace."
    ]
  },
  {
    name: "Incline Dumbbell Press",
    category: "Upper Body",
    muscle: "Chest",
    equipment: "dumbbell",
    level: "beginner",
    sets: 3,
    reps: 10,
    images: ["Incline_Dumbbell_Press/0.jpg", "Incline_Dumbbell_Press/1.jpg"],
    steps: [
      "Set the bench to a low incline and hold dumbbells at chest level.",
      "Keep shoulder blades back and feet planted.",
      "Press the dumbbells up and slightly together.",
      "Lower slowly until elbows are just below the bench line."
    ]
  },
  {
    name: "Push-Up",
    category: "Upper Body",
    muscle: "Chest",
    equipment: "body only",
    level: "beginner",
    sets: 3,
    reps: 12,
    images: ["Pushups/0.jpg", "Pushups/1.jpg"],
    steps: [
      "Start in a straight plank with hands under shoulders.",
      "Brace your core and squeeze glutes.",
      "Lower chest toward the floor while elbows track back.",
      "Push the floor away until arms are straight."
    ]
  },
  {
    name: "Lat Pulldown",
    category: "Upper Body",
    muscle: "Back",
    equipment: "cable",
    level: "beginner",
    sets: 4,
    reps: 10,
    images: ["Wide-Grip_Lat_Pulldown/0.jpg", "Wide-Grip_Lat_Pulldown/1.jpg"],
    steps: [
      "Sit tall with thighs secured under the pad.",
      "Grip the bar wider than shoulders and lean back slightly.",
      "Pull elbows down toward your ribs.",
      "Return the bar overhead with control."
    ]
  },
  {
    name: "Seated Cable Row",
    category: "Upper Body",
    muscle: "Back",
    equipment: "cable",
    level: "beginner",
    sets: 3,
    reps: 12,
    images: ["Seated_Cable_Rows/0.jpg", "Seated_Cable_Rows/1.jpg"],
    steps: [
      "Sit with knees soft and chest tall.",
      "Reach forward without rounding your lower back.",
      "Pull the handle to your lower ribs.",
      "Pause, then extend arms under control."
    ]
  },
  {
    name: "Barbell Shoulder Press",
    category: "Upper Body",
    muscle: "Shoulders",
    equipment: "barbell",
    level: "intermediate",
    sets: 4,
    reps: 8,
    images: ["Barbell_Shoulder_Press/0.jpg", "Barbell_Shoulder_Press/1.jpg"],
    steps: [
      "Hold the bar at upper chest with wrists stacked.",
      "Brace your abs and keep ribs down.",
      "Press overhead until biceps are near ears.",
      "Lower to the upper chest with control."
    ]
  },
  {
    name: "Dumbbell Lateral Raise",
    category: "Upper Body",
    muscle: "Shoulders",
    equipment: "dumbbell",
    level: "beginner",
    sets: 3,
    reps: 15,
    images: ["Side_Lateral_Raise/0.jpg", "Side_Lateral_Raise/1.jpg"],
    steps: [
      "Stand tall with dumbbells by your sides.",
      "Keep elbows slightly bent and shoulders down.",
      "Raise arms to shoulder height.",
      "Lower slowly without swinging."
    ]
  },
  {
    name: "Barbell Curl",
    category: "Upper Body",
    muscle: "Biceps",
    equipment: "barbell",
    level: "beginner",
    sets: 3,
    reps: 10,
    images: ["Barbell_Curl/0.jpg", "Barbell_Curl/1.jpg"],
    steps: [
      "Stand tall with hands just outside hips.",
      "Keep elbows close to your sides.",
      "Curl the bar up without leaning back.",
      "Lower until arms are straight."
    ]
  },
  {
    name: "Cable Triceps Pushdown",
    category: "Upper Body",
    muscle: "Triceps",
    equipment: "cable",
    level: "beginner",
    sets: 3,
    reps: 12,
    images: ["Triceps_Pushdown/0.jpg", "Triceps_Pushdown/1.jpg"],
    steps: [
      "Stand at a cable stack with elbows tucked.",
      "Start with forearms slightly above parallel.",
      "Push the handle down until elbows lock softly.",
      "Return slowly without letting elbows drift forward."
    ]
  },
  {
    name: "Barbell Squat",
    category: "Lower Body",
    muscle: "Quadriceps",
    equipment: "barbell",
    level: "beginner",
    sets: 4,
    reps: 8,
    images: ["Barbell_Squat/0.jpg", "Barbell_Squat/1.jpg"],
    steps: [
      "Set the bar across your upper back and brace.",
      "Stand with feet around shoulder width.",
      "Sit down between your hips while knees track over toes.",
      "Drive through midfoot to stand tall."
    ]
  },
  {
    name: "Leg Press",
    category: "Lower Body",
    muscle: "Quadriceps",
    equipment: "machine",
    level: "beginner",
    sets: 4,
    reps: 12,
    images: ["Leg_Press/0.jpg", "Leg_Press/1.jpg"],
    steps: [
      "Place feet on the platform around shoulder width.",
      "Unlock the sled and lower knees toward chest.",
      "Keep hips down and back pressed into the pad.",
      "Press up without fully snapping the knees."
    ]
  },
  {
    name: "Romanian Deadlift",
    category: "Lower Body",
    muscle: "Hamstrings",
    equipment: "barbell",
    level: "intermediate",
    sets: 3,
    reps: 10,
    images: ["Romanian_Deadlift/0.jpg", "Romanian_Deadlift/1.jpg"],
    steps: [
      "Hold the bar in front of thighs with knees soft.",
      "Push hips back while keeping the bar close.",
      "Lower until hamstrings stretch and back stays flat.",
      "Drive hips forward to stand."
    ]
  },
  {
    name: "Lying Leg Curl",
    category: "Lower Body",
    muscle: "Hamstrings",
    equipment: "machine",
    level: "beginner",
    sets: 3,
    reps: 12,
    images: ["Lying_Leg_Curls/0.jpg", "Lying_Leg_Curls/1.jpg"],
    steps: [
      "Lie on the machine with pad above your heels.",
      "Keep hips pressed into the bench.",
      "Curl heels toward glutes.",
      "Lower slowly until knees are extended."
    ]
  },
  {
    name: "Standing Calf Raise",
    category: "Lower Body",
    muscle: "Calves",
    equipment: "machine",
    level: "beginner",
    sets: 4,
    reps: 15,
    images: ["Standing_Calf_Raises/0.jpg", "Standing_Calf_Raises/1.jpg"],
    steps: [
      "Stand with balls of feet on the platform.",
      "Let heels drop until calves stretch.",
      "Rise onto toes as high as possible.",
      "Pause, then lower under control."
    ]
  },
  {
    name: "Walking Lunge",
    category: "Lower Body",
    muscle: "Glutes",
    equipment: "body only",
    level: "beginner",
    sets: 3,
    reps: 12,
    images: ["Bodyweight_Walking_Lunge/0.jpg", "Bodyweight_Walking_Lunge/1.jpg"],
    steps: [
      "Step forward into a long stance.",
      "Lower the back knee toward the floor.",
      "Push through the front foot to stand.",
      "Alternate legs each step."
    ]
  },
  {
    name: "Plank",
    category: "Core",
    muscle: "Abdominals",
    equipment: "body only",
    level: "beginner",
    sets: 3,
    reps: 45,
    images: ["Plank/0.jpg", "Plank/1.jpg"],
    steps: [
      "Set elbows under shoulders and legs straight.",
      "Brace abs as if preparing for a punch.",
      "Keep hips level with shoulders.",
      "Hold for the target time without sagging."
    ]
  },
  {
    name: "Cable Crunch",
    category: "Core",
    muscle: "Abdominals",
    equipment: "cable",
    level: "beginner",
    sets: 3,
    reps: 15,
    images: ["Cable_Crunch/0.jpg", "Cable_Crunch/1.jpg"],
    steps: [
      "Kneel below a high cable with rope handles.",
      "Keep hips mostly still and ribs down.",
      "Crunch elbows toward thighs.",
      "Return slowly until abs lengthen."
    ]
  },
  {
    name: "Hanging Leg Raise",
    category: "Core",
    muscle: "Abdominals",
    equipment: "body only",
    level: "intermediate",
    sets: 3,
    reps: 10,
    images: ["Hanging_Leg_Raise/0.jpg", "Hanging_Leg_Raise/1.jpg"],
    steps: [
      "Hang from a pull-up bar with shoulders active.",
      "Brace and avoid swinging.",
      "Raise knees or straight legs toward your torso.",
      "Lower slowly to the start."
    ]
  },
  {
    name: "Deadlift",
    category: "Full Body",
    muscle: "Posterior Chain",
    equipment: "barbell",
    level: "intermediate",
    sets: 4,
    reps: 5,
    images: ["Barbell_Deadlift/0.jpg", "Barbell_Deadlift/1.jpg"],
    steps: [
      "Stand with the bar over midfoot.",
      "Grip the bar, set your back flat, and brace.",
      "Push the floor away while keeping the bar close.",
      "Lock out hips, then lower with control."
    ]
  },
  {
    name: "Kettlebell Swing",
    category: "Full Body",
    muscle: "Posterior Chain",
    equipment: "kettlebells",
    level: "intermediate",
    sets: 4,
    reps: 15,
    images: ["Kettlebell_Swing/0.jpg", "Kettlebell_Swing/1.jpg"],
    steps: [
      "Start with the kettlebell in front of your feet.",
      "Hinge back and hike it between your legs.",
      "Snap hips forward to float the bell to chest height.",
      "Let it swing back into the next hinge."
    ]
  },
  {
    name: "Burpee",
    category: "Conditioning",
    muscle: "Full Body",
    equipment: "body only",
    level: "intermediate",
    sets: 4,
    reps: 10,
    images: ["Burpee/0.jpg", "Burpee/1.jpg"],
    steps: [
      "Stand tall, then place hands on the floor.",
      "Jump or step feet back into a plank.",
      "Return feet under hips.",
      "Stand or jump to finish the rep."
    ]
  },
  {
    name: "Mountain Climber",
    category: "Conditioning",
    muscle: "Core",
    equipment: "body only",
    level: "beginner",
    sets: 4,
    reps: 30,
    images: ["Mountain_Climbers/0.jpg", "Mountain_Climbers/1.jpg"],
    steps: [
      "Start in a strong high plank.",
      "Drive one knee toward your chest.",
      "Switch legs quickly while keeping hips steady.",
      "Move at a pace you can control."
    ]
  },
  {
    name: "90/90 Hamstring",
    category: "Mobility",
    muscle: "Hamstrings",
    equipment: "body only",
    level: "beginner",
    sets: 2,
    reps: 12,
    images: ["90_90_Hamstring/0.jpg", "90_90_Hamstring/1.jpg"],
    steps: [
      "Lie on your back with one hip and knee at 90 degrees.",
      "Hold behind the thigh for support.",
      "Extend the knee until the hamstring stretches.",
      "Return and repeat before switching sides."
    ]
  }
];

const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let selectedExercise = exerciseCatalog[0];
let selectedCategory = "Upper Body";
let selectedPlanDay = localStorage.getItem("ironixSelectedPlanDay") || dayNames[0];
let selectedPlanCategory = localStorage.getItem("ironixSelectedPlanCategory") || "Upper Body";
let weeklyPlan = JSON.parse(localStorage.getItem("ironixWeeklyPlan") || "{}");
let liveSession = JSON.parse(localStorage.getItem("ironixLiveSession") || "[]");

document.addEventListener("DOMContentLoaded", () => {
  setupOnboarding();
  setupPlanner();
  setupLiveSession();
  setupExercisePicker();
  setupWorkoutForm();
  loadWorkouts();
});

function setupOnboarding() {
  const panel = document.getElementById("onboardingPanel");
  const form = document.getElementById("fitnessProfileForm");
  const skip = document.getElementById("skipOnboarding");

  if (!panel || !form) return;

  const params = new URLSearchParams(window.location.search);
  const onSetupView = params.get("view") === "setup" || !params.has("view");
  const shouldShow = params.get("onboarding") === "1" || !localStorage.getItem("ironixFitnessProfile") || onSetupView;
  panel.hidden = !shouldShow;

  form.addEventListener("submit", event => {
    event.preventDefault();
    const profile = readFitnessProfile();
    localStorage.setItem("ironixFitnessProfile", JSON.stringify(profile));
    buildRecommendedPlan(profile);
    window.location.href = "workouts.php?view=calendar";
  });

  skip?.addEventListener("click", () => {
    if (onSetupView) {
      window.location.href = "workouts.php?view=library";
      return;
    }
    panel.hidden = true;
    localStorage.setItem("ironixFitnessProfile", JSON.stringify(readFitnessProfile()));
  });

  const saved = JSON.parse(localStorage.getItem("ironixFitnessProfile") || "null");
  buildRecommendedPlan(saved || readFitnessProfile());
}

function readFitnessProfile() {
  return {
    goal: document.getElementById("goalPreference")?.value || "muscle",
    level: document.getElementById("levelPreference")?.value || "beginner",
    days: Number(document.getElementById("daysPreference")?.value || 3),
    time: Number(document.getElementById("timePreference")?.value || 45),
    equipment: document.getElementById("equipmentPreference")?.value || "gym",
    focus: document.getElementById("focusPreference")?.value || "balanced",
    limits: document.getElementById("limitPreference")?.value.trim() || ""
  };
}

function setupPlanner() {
  const tabs = document.getElementById("categoryTabs");
  const muscleSelect = document.getElementById("muscleSelect");
  const search = document.getElementById("exerciseSearch");

  if (!tabs || !muscleSelect) return;

  const categories = [...new Set(exerciseCatalog.map(exercise => exercise.category))];
  tabs.innerHTML = categories.map(category => (
    `<button type="button" class="${category === selectedCategory ? "active" : ""}" data-category="${escapeHtml(category)}">${escapeHtml(category)}</button>`
  )).join("");

  tabs.addEventListener("click", event => {
    const button = event.target.closest("button[data-category]");
    if (!button) return;
    selectedCategory = button.dataset.category;
    tabs.querySelectorAll("button").forEach(tab => tab.classList.remove("active"));
    button.classList.add("active");
    renderMuscleOptions();
    renderExerciseCards();
  });

  muscleSelect.addEventListener("change", renderExerciseCards);
  search?.addEventListener("input", renderExerciseCards);

  document.getElementById("startExerciseButton")?.addEventListener("click", () => prefillWorkout(selectedExercise));
  document.getElementById("addToSessionButton")?.addEventListener("click", () => addExerciseToSession(selectedExercise));
  document.getElementById("addToCalendarButton")?.addEventListener("click", () => openPlanAddPanel(selectedExercise));
  document.getElementById("savePlanExerciseButton")?.addEventListener("click", savePlanExerciseToDays);
  document.getElementById("cancelPlanExerciseButton")?.addEventListener("click", closePlanAddPanel);
  document.getElementById("clearCalendarButton")?.addEventListener("click", () => {
    weeklyPlan = {};
    saveWeeklyPlan();
    renderCalendar();
  });

  renderMuscleOptions();
  renderExerciseCards();
  renderExerciseDetail(selectedExercise, false);
  renderCalendar();
}

function setupLiveSession() {
  document.getElementById("addSelectedToSessionButton")?.addEventListener("click", () => addExerciseToSession(selectedExercise));
  document.getElementById("clearSessionButton")?.addEventListener("click", () => {
    liveSession = [];
    saveLiveSession();
    renderLiveSession();
    setMessage(document.getElementById("sessionMessage"), "");
  });
  document.getElementById("saveSessionButton")?.addEventListener("click", saveFinishedSession);
  renderLiveSession();
}

function renderMuscleOptions() {
  const muscleSelect = document.getElementById("muscleSelect");
  const muscles = [...new Set(exerciseCatalog
    .filter(exercise => exercise.category === selectedCategory)
    .map(exercise => exercise.muscle))];

  muscleSelect.innerHTML = [
    '<option value="All">All muscles</option>',
    ...muscles.map(muscle => `<option value="${escapeHtml(muscle)}">${escapeHtml(muscle)}</option>`)
  ].join("");
}

function renderExerciseCards() {
  const grid = document.getElementById("exerciseCardGrid");
  const count = document.getElementById("exerciseCount");
  const title = document.getElementById("exerciseBrowserTitle");
  const muscle = document.getElementById("muscleSelect")?.value || "All";
  const query = (document.getElementById("exerciseSearch")?.value || "").toLowerCase();

  if (!grid) return;

  const exercises = exerciseCatalog.filter(exercise => {
    const categoryMatch = exercise.category === selectedCategory;
    const muscleMatch = muscle === "All" || exercise.muscle === muscle;
    const queryMatch = !query || `${exercise.name} ${exercise.muscle} ${exercise.equipment}`.toLowerCase().includes(query);
    return categoryMatch && muscleMatch && queryMatch;
  });

  if (title) title.textContent = muscle === "All" ? `${selectedCategory} exercises` : `${muscle} exercises`;
  if (count) count.textContent = `${exercises.length} ${exercises.length === 1 ? "exercise" : "exercises"}`;

  grid.innerHTML = exercises.map(exercise => `
    <article class="exercise-card">
      <div class="exercise-card-content">
        <h4>${escapeHtml(exercise.name)}</h4>
        <p>${escapeHtml(exercise.muscle)} | ${exercise.sets} x ${exercise.reps}</p>
        <button type="button" data-exercise="${escapeHtml(exercise.name)}">View Demo</button>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll("button[data-exercise]").forEach(button => {
    button.addEventListener("click", () => {
      const exercise = exerciseCatalog.find(item => item.name === button.dataset.exercise);
      if (exercise) renderExerciseDetail(exercise);
    });
  });
}

function renderExerciseDetail(exercise, shouldScroll = true) {
  selectedExercise = exercise;
  const diagram = document.getElementById("exerciseDiagram");

  if (diagram) {
    diagram.innerHTML = renderExerciseDemoSheet(exercise);
  }

  setText("exerciseMeta", `${exercise.muscle} | ${exercise.equipment}`);
  setText("exerciseName", exercise.name);
  setText("exerciseSummary", `${exercise.sets} sets x ${exercise.reps} reps.`);

  const steps = document.getElementById("exerciseSteps");
  if (steps) {
    steps.innerHTML = exercise.steps.slice(0, 3).map(step => `<li>${escapeHtml(step)}</li>`).join("");
  }

  if (shouldScroll) {
    document.getElementById("exerciseDetail")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

function buildRecommendedPlan(profile) {
  const plan = document.getElementById("recommendedPlan");
  if (!plan) return;

  const templates = {
    3: ["Upper Body", "Lower Body", "Full Body"],
    4: ["Upper Body", "Lower Body", "Upper Body", "Lower Body"],
    5: ["Upper Body", "Lower Body", "Core", "Upper Body", "Lower Body"],
    6: ["Upper Body", "Lower Body", "Core", "Upper Body", "Lower Body", "Conditioning"]
  };
  const split = templates[profile.days] || templates[3];
  const allowed = filterByEquipment(profile.equipment);

  plan.innerHTML = split.map((category, index) => {
    const options = allowed.filter(exercise => exercise.category === category || (category === "Full Body" && exercise.category !== "Mobility")).slice(0, 4);
    return `
      <article class="plan-day">
        <div>
          <span>${dayNames[index]}</span>
          <h4>${escapeHtml(category)}</h4>
          <p>${profile.time} min | ${profile.goalLabel || formatGoal(profile.goal)}</p>
        </div>
        <ul>${options.map(exercise => `<li>${escapeHtml(exercise.name)} - ${exercise.sets}x${exercise.reps}</li>`).join("")}</ul>
        <button type="button" data-plan-day="${index}" data-category="${escapeHtml(category)}">Add Day</button>
      </article>
    `;
  }).join("");

  plan.querySelectorAll("button[data-plan-day]").forEach(button => {
    button.addEventListener("click", () => {
      const day = dayNames[Number(button.dataset.planDay)];
      const exercises = allowed
        .filter(exercise => exercise.category === button.dataset.category || (button.dataset.category === "Full Body" && exercise.category !== "Mobility"))
        .slice(0, 4)
        .map(exercise => createPlanEntry(exercise));
      weeklyPlan[day] = exercises;
      selectedPlanDay = day;
      localStorage.setItem("ironixSelectedPlanDay", selectedPlanDay);
      saveWeeklyPlan();
      renderCalendar();
    });
  });
}

function filterByEquipment(equipment) {
  if (equipment === "gym") return exerciseCatalog;
  if (equipment === "mixed") {
    return exerciseCatalog.filter(exercise => ["body only", "dumbbell", "kettlebells", "barbell"].includes(exercise.equipment));
  }
  if (equipment === "dumbbell") {
    return exerciseCatalog.filter(exercise => ["dumbbell", "body only"].includes(exercise.equipment));
  }
  return exerciseCatalog.filter(exercise => exercise.equipment === "body only");
}

function formatGoal(goal) {
  return {
    muscle: "Build muscle",
    strength: "Get stronger",
    fatLoss: "Lose fat",
    general: "General fitness"
  }[goal] || "General fitness";
}

function renderCalendar() {
  const calendar = document.getElementById("calendarGrid");
  if (!calendar) return;

  if (!dayNames.includes(selectedPlanDay)) {
    selectedPlanDay = dayNames[0];
  }

  const day = selectedPlanDay;
  const items = normalizePlanEntries(weeklyPlan[day] || []);
  const planCategories = [...new Set(exerciseCatalog.map(exercise => exercise.category))];

  if (!planCategories.includes(selectedPlanCategory)) {
    selectedPlanCategory = planCategories[0];
  }

  const planCategoryExercises = exerciseCatalog.filter(exercise => exercise.category === selectedPlanCategory);
  const planSelectedExercise = planCategoryExercises.find(exercise => exercise.name === selectedExercise.name) || planCategoryExercises[0] || selectedExercise;

  calendar.innerHTML = `
    <div class="calendar-tabs" role="tablist" aria-label="Weekly plan days">
      ${dayNames.map(name => `
        <button type="button" class="${name === day ? "active" : ""}" data-plan-tab="${escapeHtml(name)}" role="tab" aria-selected="${name === day ? "true" : "false"}">
          <span>${escapeHtml(name.slice(0, 3))}</span>
          <strong>${normalizePlanEntries(weeklyPlan[name] || []).length}</strong>
        </button>
      `).join("")}
    </div>

    <article class="calendar-day calendar-day-focused">
      <div class="calendar-day-head">
        <div>
          <span class="eyebrow">Selected Day</span>
          <h4>${escapeHtml(day)}</h4>
        </div>
        ${items.length ? `<button type="button" class="secondary-button" data-start-day="${escapeHtml(day)}">Load To Live Session</button>` : ""}
      </div>

      ${items.length ? `
        <div class="planned-exercise-list">
          ${items.map((item, index) => renderPlannedExercise(day, item, index)).join("")}
        </div>
      ` : '<p>Rest day. Add an exercise below when you want to train.</p>'}
      <p class="form-message" id="calendarMessage" aria-live="polite"></p>

      <section class="calendar-add-panel" aria-label="Add exercise to selected day">
        <div>
          <span class="eyebrow">Add Exercise</span>
          <h5>Customize ${escapeHtml(day)}</h5>
        </div>
        <div class="calendar-category-tabs" id="calendarCategoryTabs" aria-label="Exercise categories">
          ${planCategories.map(category => `
            <button type="button" class="${category === selectedPlanCategory ? "active" : ""}" data-calendar-category="${escapeHtml(category)}">${escapeHtml(category)}</button>
          `).join("")}
        </div>
        <label>Exercise
          <select id="calendarExerciseSelect">${renderExerciseSelectOptions(selectedPlanCategory)}</select>
        </label>
        <div class="session-input-grid">
          <label>Sets
            <input id="calendarSets" type="number" min="1" value="${escapeHtml(planSelectedExercise.sets)}">
          </label>
          <label>Reps
            <input id="calendarReps" type="number" min="1" value="${escapeHtml(planSelectedExercise.reps)}">
          </label>
          <label>Weight
            <input id="calendarWeight" type="number" min="0" step="0.5" value="${planSelectedExercise.equipment === "body only" ? "0" : ""}" placeholder="0">
          </label>
          <label>Min
            <input id="calendarDuration" type="number" min="1" value="${escapeHtml(defaultDurationForExercise(planSelectedExercise))}">
          </label>
        </div>
        <div class="calendar-day-actions">
          <button type="button" data-add-to-selected-day="${escapeHtml(day)}">Add To ${escapeHtml(day)}</button>
          <button type="button" class="secondary-button" data-day="${escapeHtml(day)}">Add Current Library Exercise</button>
        </div>
      </section>
    </article>
  `;

  const exerciseSelect = document.getElementById("calendarExerciseSelect");
  if (exerciseSelect) {
    exerciseSelect.value = planSelectedExercise.name;
    exerciseSelect.addEventListener("change", () => {
      const exercise = exerciseCatalog.find(item => item.name === exerciseSelect.value) || selectedExercise;
      selectedExercise = exercise;
      selectedPlanCategory = exercise.category;
      localStorage.setItem("ironixSelectedPlanCategory", selectedPlanCategory);
      setCalendarExerciseDefaults(exercise);
    });
  }

  calendar.querySelectorAll("[data-calendar-category]").forEach(button => {
    button.addEventListener("click", () => {
      selectedPlanCategory = button.dataset.calendarCategory;
      localStorage.setItem("ironixSelectedPlanCategory", selectedPlanCategory);
      const nextExercise = exerciseCatalog.find(exercise => exercise.category === selectedPlanCategory);
      if (nextExercise) {
        selectedExercise = nextExercise;
      }
      renderCalendar();
    });
  });

  calendar.querySelectorAll("button[data-plan-tab]").forEach(button => {
    button.addEventListener("click", () => {
      selectedPlanDay = button.dataset.planTab;
      localStorage.setItem("ironixSelectedPlanDay", selectedPlanDay);
      renderCalendar();
    });
  });

  calendar.querySelectorAll("button[data-day]").forEach(button => {
    button.addEventListener("click", () => {
      const day = button.dataset.day;
      weeklyPlan[day] = [...normalizePlanEntries(weeklyPlan[day] || []), createPlanEntry(selectedExercise)];
      saveWeeklyPlan();
      renderCalendar();
    });
  });

  calendar.querySelector("[data-add-to-selected-day]")?.addEventListener("click", () => {
    addCalendarCustomExercise(day);
  });

  calendar.querySelectorAll("[data-plan-field]").forEach(input => {
    input.addEventListener("input", updatePlannedExercise);
    input.addEventListener("change", updatePlannedExercise);
  });

  calendar.querySelectorAll("[data-remove-plan]").forEach(button => {
    button.addEventListener("click", () => {
      const day = button.dataset.day;
      const index = Number(button.dataset.index);
      const entries = normalizePlanEntries(weeklyPlan[day] || []);
      entries.splice(index, 1);
      weeklyPlan[day] = entries;
      saveWeeklyPlan();
      renderCalendar();
    });
  });

  calendar.querySelectorAll("button[data-start-day]").forEach(button => {
    button.addEventListener("click", () => {
      addCalendarDayToSession(button.dataset.startDay);
    });
  });
}

function renderExerciseSelectOptions(category) {
  return exerciseCatalog
    .filter(exercise => !category || exercise.category === category)
    .map(exercise => `<option value="${escapeHtml(exercise.name)}">${escapeHtml(exercise.name)} - ${escapeHtml(exercise.muscle)}</option>`)
    .join("");
}

function setCalendarExerciseDefaults(exercise) {
  setValue("calendarSets", exercise.sets);
  setValue("calendarReps", exercise.reps);
  setValue("calendarWeight", exercise.equipment === "body only" ? 0 : "");
  setValue("calendarDuration", defaultDurationForExercise(exercise));
}

function addCalendarCustomExercise(day) {
  const select = document.getElementById("calendarExerciseSelect");
  const exercise = exerciseCatalog.find(item => item.name === select?.value) || selectedExercise;
  const entry = createPlanEntry(exercise, {
    sets: document.getElementById("calendarSets")?.value,
    reps: document.getElementById("calendarReps")?.value,
    weight: document.getElementById("calendarWeight")?.value,
    duration: document.getElementById("calendarDuration")?.value
  });

  if (Number(entry.sets) <= 0 || Number(entry.reps) <= 0 || Number(entry.duration) <= 0 || Number(entry.weight) < 0) {
    return;
  }

  weeklyPlan[day] = [...normalizePlanEntries(weeklyPlan[day] || []), entry];
  saveWeeklyPlan();
  renderCalendar();
}

function addExerciseToNextOpenDay(exercise) {
  const day = selectedPlanDay || dayNames.find(name => !weeklyPlan[name] || weeklyPlan[name].length < 4) || dayNames[0];
  weeklyPlan[day] = [...normalizePlanEntries(weeklyPlan[day] || []), createPlanEntry(exercise)];
  selectedPlanDay = day;
  localStorage.setItem("ironixSelectedPlanDay", selectedPlanDay);
  saveWeeklyPlan();
  renderCalendar();
  document.getElementById("weeklyPlanner")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderPlannedExercise(day, item, index) {
  return `
    <article class="planned-exercise" data-day="${escapeHtml(day)}" data-index="${index}">
      <div class="planned-exercise-title">
        <strong>${escapeHtml(item.name)}</strong>
        <button type="button" class="delete-workout" data-remove-plan="1" data-day="${escapeHtml(day)}" data-index="${index}">Remove</button>
      </div>
      <div class="session-input-grid">
        <label>Sets
          <input type="number" min="1" data-plan-field="sets" value="${escapeHtml(item.sets)}">
        </label>
        <label>Reps
          <input type="number" min="1" data-plan-field="reps" value="${escapeHtml(item.reps)}">
        </label>
        <label>Weight
          <input type="number" min="0" step="0.5" data-plan-field="weight" value="${escapeHtml(item.weight)}" placeholder="0">
        </label>
        <label>Min
          <input type="number" min="1" data-plan-field="duration" value="${escapeHtml(item.duration)}">
        </label>
      </div>
    </article>
  `;
}

function updatePlannedExercise(event) {
  const row = event.target.closest("[data-day][data-index]");
  if (!row) return;

  const day = row.dataset.day;
  const index = Number(row.dataset.index);
  const entries = normalizePlanEntries(weeklyPlan[day] || []);
  const entry = entries[index];
  if (!entry) return;

  entry[event.target.dataset.planField] = event.target.value;
  weeklyPlan[day] = entries;
  saveWeeklyPlan();
}

function openPlanAddPanel(exercise) {
  const panel = document.getElementById("planAddPanel");
  if (!panel) {
    addExerciseToNextOpenDay(exercise);
    return;
  }

  selectedExercise = exercise;
  panel.hidden = false;
  setText("planAddTitle", exercise.name);
  document.getElementById("planDayChoices").innerHTML = dayNames.map((day, index) => `
    <label class="day-check">
      <input type="checkbox" value="${escapeHtml(day)}" ${day === selectedPlanDay || (!selectedPlanDay && index === 0) ? "checked" : ""}>
      <span>${escapeHtml(day.slice(0, 3))}</span>
    </label>
  `).join("");
  setValue("planSets", exercise.sets);
  setValue("planReps", exercise.reps);
  setValue("planWeight", exercise.equipment === "body only" ? 0 : "");
  setValue("planDuration", defaultDurationForExercise(exercise));
  setMessage(document.getElementById("planAddMessage"), "");
  panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function closePlanAddPanel() {
  const panel = document.getElementById("planAddPanel");
  if (panel) panel.hidden = true;
}

function savePlanExerciseToDays() {
  const checked = [...document.querySelectorAll("#planDayChoices input:checked")].map(input => input.value);
  const message = document.getElementById("planAddMessage");

  if (checked.length === 0) {
    setMessage(message, "Choose at least one day.");
    return;
  }

  const entry = createPlanEntry(selectedExercise, {
    sets: document.getElementById("planSets").value,
    reps: document.getElementById("planReps").value,
    weight: document.getElementById("planWeight").value,
    duration: document.getElementById("planDuration").value
  });

  if (Number(entry.sets) <= 0 || Number(entry.reps) <= 0 || Number(entry.duration) <= 0 || Number(entry.weight) < 0) {
    setMessage(message, "Enter valid sets, reps, weight, and minutes.");
    return;
  }

  checked.forEach(day => {
    weeklyPlan[day] = [...normalizePlanEntries(weeklyPlan[day] || []), { ...entry }];
  });

  selectedPlanDay = checked[0];
  localStorage.setItem("ironixSelectedPlanDay", selectedPlanDay);
  saveWeeklyPlan();
  renderCalendar();
  setMessage(message, `${entry.name} added to ${checked.length} day${checked.length === 1 ? "" : "s"}.`);
}

function addExerciseToSession(exercise) {
  liveSession.push(createSessionItem(exercise));
  saveLiveSession();
  renderLiveSession();
  setMessage(document.getElementById("formMessage"), `${exercise.name} added to your dashboard session.`);
}

function addCalendarDayToSession(day) {
  const items = normalizePlanEntries(weeklyPlan[day] || []);
  if (items.length === 0) return;
  const invalid = validatePlanDay(items);

  if (invalid) {
    setMessage(document.getElementById("calendarMessage"), invalid);
    document.getElementById("calendarMessage")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    return;
  }

  const before = liveSession.length;
  items.forEach(entry => {
    liveSession.push(createSessionItem(entry));
  });

  saveLiveSession();
  renderLiveSession();
  if (liveSession.length > before) {
    localStorage.setItem("ironixPendingSessionMessage", `${items.length} exercises from ${day} loaded. Continue your workout here, enter missing details, then check Done.`);
  }
  window.location.href = "dashboard.php#liveSession";
}

function validatePlanDay(items) {
  const missing = items.find(item => {
    const needsWeight = item.equipment !== "body only";
    return !item.name ||
      Number(item.sets) <= 0 ||
      Number(item.reps) <= 0 ||
      Number(item.duration) <= 0 ||
      Number(item.weight) < 0 ||
      (needsWeight && item.weight === "");
  });

  if (!missing) return "";

  if (missing.equipment !== "body only" && missing.weight === "") {
    return `Add the weight for ${missing.name} before loading this day to Live Session. Use 0 only for bodyweight work.`;
  }

  return `Complete sets, reps, weight, and minutes for ${missing.name} before loading this day to Live Session.`;
}

function createPlanEntry(exercise, overrides = {}) {
  return {
    name: exercise.name,
    muscle: exercise.muscle || "Full Body",
    equipment: exercise.equipment || "body only",
    category: exercise.category || "Full Body",
    sets: overrides.sets ?? exercise.sets ?? 3,
    reps: overrides.reps ?? exercise.reps ?? 10,
    weight: overrides.weight ?? (exercise.equipment === "body only" ? 0 : ""),
    duration: overrides.duration ?? defaultDurationForExercise(exercise)
  };
}

function normalizePlanEntries(entries) {
  return entries.map(item => {
    if (typeof item === "string") {
      const exercise = exerciseCatalog.find(exercise => exercise.name === item) || { name: item, muscle: "Full Body", equipment: "body only", category: "Full Body", sets: 3, reps: 10 };
      return createPlanEntry(exercise);
    }
    return createPlanEntry(item, item);
  });
}

function createSessionItem(exercise) {
  return {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name: exercise.name,
    muscle: exercise.muscle,
    equipment: exercise.equipment,
    plannedSets: exercise.sets,
    plannedReps: exercise.reps,
    sets: exercise.sets,
    reps: exercise.reps,
    weight: exercise.weight ?? (exercise.equipment === "body only" ? 0 : ""),
    duration: exercise.duration ?? defaultDurationForExercise(exercise),
    needsWeight: exercise.equipment !== "body only",
    done: false
  };
}

function defaultDurationForExercise(exercise) {
  if (exercise.category === "Conditioning") return 20;
  if (exercise.category === "Mobility") return 10;
  const sets = Number(exercise.sets) || 3;
  const reps = Number(exercise.reps) || 10;
  const restMinutes = exercise.equipment === "body only" ? 1 : 1.5;
  const workMinutes = Math.max(0.5, reps * 0.06);
  return Math.max(6, Math.ceil(sets * (workMinutes + restMinutes)));
}

function renderLiveSession() {
  const list = document.getElementById("liveSessionList");
  if (!list) return;

  resetDoneCounterIfNewDay();
  const pendingMessage = localStorage.getItem("ironixPendingSessionMessage");
  if (pendingMessage) {
    setMessage(document.getElementById("sessionMessage"), pendingMessage);
    localStorage.removeItem("ironixPendingSessionMessage");
  }
  const doneCount = Number(localStorage.getItem("ironixDoneTodayCount") || 0);
  const volume = liveSession.reduce((total, item) => {
    return total + ((Number(item.sets) || 0) * (Number(item.reps) || 0) * (Number(item.weight) || 0));
  }, 0);

  setText("sessionExerciseCount", liveSession.length);
  setText("sessionDoneCount", doneCount);
  setText("sessionVolume", `${formatNumber(volume)} kg`);

  if (liveSession.length === 0) {
    list.innerHTML = `
      <div class="empty-state">
        Add exercises from the exercise detail panel or recommended plan to start a live workout.
      </div>
    `;
    return;
  }

  list.innerHTML = liveSession.map((item, index) => `
    <article class="session-exercise ${item.done ? "is-done" : ""}" data-session-id="${escapeHtml(item.id)}">
      <label class="session-check">
        <input type="checkbox" data-session-field="done">
        <span>Done</span>
      </label>

      <div class="session-exercise-main">
        <strong>${index + 1}. ${escapeHtml(item.name)}</strong>
        <span>${escapeHtml(item.muscle)} | planned ${item.plannedSets}x${item.plannedReps}${item.needsWeight && item.weight === "" ? " | enter weight" : ""}</span>
      </div>

      <div class="session-input-grid">
        <label>Sets
          <input type="number" min="1" data-session-field="sets" value="${escapeHtml(item.sets)}">
        </label>
        <label>Reps
          <input type="number" min="1" data-session-field="reps" value="${escapeHtml(item.reps)}">
        </label>
        <label>Weight
          <input type="number" min="0" step="0.5" data-session-field="weight" value="${escapeHtml(item.weight)}" placeholder="0">
        </label>
        <label>Min
          <input type="number" min="1" data-session-field="duration" value="${escapeHtml(item.duration)}">
        </label>
      </div>

      <button type="button" class="delete-workout" data-remove-session="${escapeHtml(item.id)}">Remove</button>
    </article>
  `).join("");

  list.querySelectorAll("[data-session-field]").forEach(input => {
    input.addEventListener("change", updateSessionItem);
    if (input.type !== "checkbox") {
      input.addEventListener("input", updateSessionItem);
    }
  });

  list.querySelectorAll("[data-remove-session]").forEach(button => {
    button.addEventListener("click", () => {
      liveSession = liveSession.filter(item => item.id !== button.dataset.removeSession);
      saveLiveSession();
      renderLiveSession();
    });
  });
}

function updateSessionItem(event) {
  const row = event.target.closest("[data-session-id]");
  if (!row) return;

  const item = liveSession.find(entry => entry.id === row.dataset.sessionId);
  if (!item) return;

  const field = event.target.dataset.sessionField;
  if (field === "done") {
    if (event.target.checked) {
      saveCheckedSessionItem(item);
    }
    return;
  } else {
    item[field] = event.target.value;
  }

  saveLiveSession();
  renderLiveSession();
}

function saveCheckedSessionItem(item) {
  const message = document.getElementById("sessionMessage");
  const missingWeight = item.needsWeight && item.weight === "";
  const invalid = !item.name || missingWeight || Number(item.sets) <= 0 || Number(item.reps) <= 0 || Number(item.duration) <= 0 || Number(item.weight) < 0;

  if (invalid) {
    setMessage(message, missingWeight
      ? "Enter the weight used before marking this exercise done. Use 0 only for bodyweight work."
      : "Check sets, reps, weight, and minutes before marking done.");
    renderLiveSession();
    return;
  }

  setMessage(message, `Saving ${item.name}...`);
  saveWorkoutEntry({
    workout: item.name,
    sets: item.sets,
    reps: item.reps,
    weight: item.weight || "0",
    duration: item.duration
  })
    .then(() => {
      liveSession = liveSession.filter(entry => entry.id !== item.id);
      localStorage.setItem("ironixDoneTodayCount", String(Number(localStorage.getItem("ironixDoneTodayCount") || 0) + 1));
      saveLiveSession();
      renderLiveSession();
      loadWorkouts();
      setMessage(message, `${item.name} saved to progress.`);
    })
    .catch(error => {
      setMessage(message, error.message);
      renderLiveSession();
    });
}

function saveLiveSession() {
  localStorage.setItem("ironixLiveSession", JSON.stringify(liveSession));
}

function saveFinishedSession() {
  const message = document.getElementById("sessionMessage");
  const finished = liveSession.filter(item => item.done);

  if (finished.length === 0) {
    setMessage(message, "Mark at least one exercise done before saving.");
    return;
  }

  const invalid = finished.find(item => !item.name || Number(item.sets) <= 0 || Number(item.reps) <= 0 || Number(item.duration) <= 0 || Number(item.weight) < 0);
  if (invalid) {
    setMessage(message, "Check sets, reps, weight, and minutes for every finished exercise.");
    return;
  }

  setMessage(message, "Saving finished workout...");
  document.getElementById("saveSessionButton").disabled = true;

  saveSessionQueue(finished)
    .then(() => {
      const finishedIds = new Set(finished.map(item => item.id));
      liveSession = liveSession.filter(item => !finishedIds.has(item.id));
      saveLiveSession();
      renderLiveSession();
      loadWorkouts();
      setMessage(message, "Finished workout saved. Progress dashboard updated.");
      document.getElementById("savedHistory")?.scrollIntoView({ behavior: "smooth", block: "start" });
    })
    .catch(error => {
      setMessage(message, error.message);
    })
    .finally(() => {
      document.getElementById("saveSessionButton").disabled = false;
    });
}

function saveSessionQueue(items) {
  return items.reduce((chain, item) => {
    return chain.then(() => saveWorkoutEntry({
      workout: item.name,
      sets: item.sets,
      reps: item.reps,
      weight: item.weight || "0",
      duration: item.duration
    }));
  }, Promise.resolve());
}

function saveWorkoutEntry(fields) {
  const formData = new URLSearchParams();
  formData.set("workout", fields.workout);
  formData.set("sets", fields.sets);
  formData.set("reps", fields.reps);
  formData.set("weight", fields.weight || "0");
  formData.set("duration", fields.duration);

  return fetch("save_workout.php", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: formData.toString()
  }).then(async response => {
    const text = await response.text();
    if (!response.ok) throw new Error(text || "Workout could not be saved");
    return text;
  });
}

function saveWeeklyPlan() {
  localStorage.setItem("ironixWeeklyPlan", JSON.stringify(weeklyPlan));
}

function renderAnatomySvg(muscle, size) {
  const key = normalizeMuscle(muscle);
  const classes = targetClassMap(key);
  const viewBox = size === "card" ? "0 0 180 180" : "0 0 260 300";
  const scale = size === "card" ? 0.72 : 1;
  const offsetX = size === "card" ? 12 : 34;
  const offsetY = size === "card" ? -14 : 0;

  return `
    <svg class="anatomy-svg anatomy-${size}" viewBox="${viewBox}" role="img" aria-label="${escapeHtml(muscle)} anatomy diagram">
      <rect class="anatomy-bg" x="0" y="0" width="100%" height="100%" rx="8"></rect>
      <g transform="translate(${offsetX} ${offsetY}) scale(${scale})">
        <circle class="body-line" cx="125" cy="38" r="18"></circle>
        <path class="body-line" d="M125 58 L125 122"></path>
        <path class="body-line" d="M95 78 C78 92 69 113 63 141"></path>
        <path class="body-line" d="M155 78 C172 92 181 113 187 141"></path>
        <path class="body-line" d="M111 122 L93 205"></path>
        <path class="body-line" d="M139 122 L157 205"></path>
        <path class="body-line" d="M93 205 L82 254"></path>
        <path class="body-line" d="M157 205 L168 254"></path>
        <ellipse class="muscle ${classes.chest}" cx="112" cy="82" rx="17" ry="14"></ellipse>
        <ellipse class="muscle ${classes.chest}" cx="138" cy="82" rx="17" ry="14"></ellipse>
        <ellipse class="muscle ${classes.back}" cx="125" cy="99" rx="23" ry="26"></ellipse>
        <ellipse class="muscle ${classes.shoulders}" cx="89" cy="76" rx="14" ry="12"></ellipse>
        <ellipse class="muscle ${classes.shoulders}" cx="161" cy="76" rx="14" ry="12"></ellipse>
        <ellipse class="muscle ${classes.biceps}" cx="76" cy="111" rx="10" ry="22" transform="rotate(19 76 111)"></ellipse>
        <ellipse class="muscle ${classes.triceps}" cx="174" cy="111" rx="10" ry="22" transform="rotate(-19 174 111)"></ellipse>
        <rect class="muscle ${classes.core}" x="111" y="104" width="28" height="42" rx="12"></rect>
        <ellipse class="muscle ${classes.glutes}" cx="111" cy="139" rx="15" ry="13"></ellipse>
        <ellipse class="muscle ${classes.glutes}" cx="139" cy="139" rx="15" ry="13"></ellipse>
        <ellipse class="muscle ${classes.quadriceps}" cx="101" cy="174" rx="13" ry="34"></ellipse>
        <ellipse class="muscle ${classes.quadriceps}" cx="149" cy="174" rx="13" ry="34"></ellipse>
        <ellipse class="muscle ${classes.hamstrings}" cx="113" cy="178" rx="8" ry="32"></ellipse>
        <ellipse class="muscle ${classes.hamstrings}" cx="137" cy="178" rx="8" ry="32"></ellipse>
        <ellipse class="muscle ${classes.calves}" cx="86" cy="229" rx="9" ry="27"></ellipse>
        <ellipse class="muscle ${classes.calves}" cx="164" cy="229" rx="9" ry="27"></ellipse>
        <path class="motion-line" d="${motionPath(key)}"></path>
      </g>
    </svg>
  `;
}

function renderExerciseDemoSheet(exercise) {
  const pose = demoPoseForExercise(exercise);
  const cues = formCuesForExercise(exercise);
  return `
    <article class="exercise-demo-sheet">
      <div class="movement-demo-card">
        ${renderMovementDemoSvg(pose, exercise)}
      </div>
      <div class="demo-target-row">
        <span>Target</span>
        <strong>${escapeHtml(exercise.muscle)}</strong>
      </div>
      <ul class="demo-cue-list">
        ${cues.map(cue => `<li>${escapeHtml(cue)}</li>`).join("")}
      </ul>
    </article>
  `;
}

function demoPoseForExercise(exercise) {
  const name = exercise.name.toLowerCase();
  const muscle = exercise.muscle.toLowerCase();
  if (name.includes("squat") || name.includes("lunge") || name.includes("leg press")) return "squat";
  if (name.includes("deadlift") || name.includes("swing") || name.includes("hamstring")) return "hinge";
  if (name.includes("row") || name.includes("pulldown") || name.includes("pull-up")) return "pull";
  if (name.includes("plank") || name.includes("crunch") || name.includes("leg raise") || name.includes("climber")) return "core";
  if (name.includes("curl") || name.includes("pushdown") || muscle.includes("biceps") || muscle.includes("triceps")) return "arm";
  return "press";
}

function renderMovementDemoSvg(pose, exercise) {
  const label = escapeHtml(exercise.name);
  const scenes = {
    press: `
      <g class="demo-person demo-press-person">
        <ellipse class="demo-skin" cx="76" cy="78" rx="13" ry="15"></ellipse>
        <path class="demo-suit" d="M89 96 C120 88 153 97 173 121 L162 143 C133 129 104 124 82 125 Z"></path>
        <path class="demo-limb-fill" d="M115 111 C135 91 162 79 185 79 L190 95 C168 98 145 109 125 127 Z"></path>
        <path class="demo-limb-fill" d="M118 126 C144 132 168 145 190 164 L178 177 C157 160 136 148 109 143 Z"></path>
        <path class="demo-limb-fill" d="M80 121 C61 131 49 150 42 171 L58 178 C67 160 78 146 96 138 Z"></path>
      </g>
      <path class="demo-guide-arrow" d="M106 64 C132 42 164 41 194 58"></path>
    `,
    squat: `
      <g class="demo-person demo-squat-person">
        <ellipse class="demo-skin" cx="132" cy="46" rx="14" ry="16"></ellipse>
        <path class="demo-suit" d="M112 65 C132 54 154 63 161 86 C167 108 159 128 142 135 C121 132 107 112 102 91 C99 79 102 70 112 65 Z"></path>
        <path class="demo-limb-fill" d="M114 130 C96 151 87 177 78 205 L98 210 C109 183 121 160 140 142 Z"></path>
        <path class="demo-limb-fill" d="M145 132 C165 151 181 174 193 203 L174 211 C161 185 146 163 127 145 Z"></path>
        <path class="demo-limb-fill" d="M113 78 C88 86 74 99 64 119 L80 129 C93 110 105 101 129 95 Z"></path>
        <path class="demo-limb-fill" d="M153 78 C176 87 190 100 200 120 L184 130 C171 111 159 101 136 95 Z"></path>
      </g>
      <path class="demo-guide-arrow" d="M202 67 C219 104 218 153 198 190"></path>
    `,
    hinge: `
      <g class="demo-person demo-hinge-person">
        <ellipse class="demo-skin" cx="92" cy="64" rx="13" ry="15"></ellipse>
        <path class="demo-suit" d="M104 76 C134 79 164 96 181 121 C174 140 156 145 136 132 C116 119 99 100 91 83 Z"></path>
        <path class="demo-limb-fill" d="M156 130 C171 153 180 181 187 210 L168 214 C158 185 148 160 132 138 Z"></path>
        <path class="demo-limb-fill" d="M132 130 C119 153 111 181 105 211 L86 207 C92 177 102 151 118 130 Z"></path>
        <path class="demo-limb-fill" d="M139 109 C137 135 127 154 113 171 L99 159 C112 143 119 127 121 104 Z"></path>
      </g>
      <path class="demo-guide-arrow" d="M74 73 C111 47 159 55 196 88"></path>
    `,
    pull: `
      <path class="demo-equipment-line" d="M62 44 H218"></path>
      <g class="demo-person demo-pull-person">
        <ellipse class="demo-skin" cx="140" cy="74" rx="13" ry="15"></ellipse>
        <path class="demo-suit" d="M119 94 C133 84 153 84 166 96 L162 150 C149 164 130 164 117 150 Z"></path>
        <path class="demo-limb-fill" d="M121 101 C101 88 86 73 73 51 L88 43 C101 62 114 75 132 88 Z"></path>
        <path class="demo-limb-fill" d="M160 101 C180 88 195 73 208 51 L193 43 C180 62 167 75 149 88 Z"></path>
        <path class="demo-limb-fill" d="M123 149 C112 171 105 190 101 213 L120 216 C125 193 132 174 143 154 Z"></path>
        <path class="demo-limb-fill" d="M158 149 C169 171 176 190 180 213 L161 216 C156 193 149 174 138 154 Z"></path>
      </g>
      <path class="demo-guide-arrow" d="M206 60 C196 94 177 120 151 137"></path>
    `,
    core: `
      <g class="demo-person demo-core-person">
        <ellipse class="demo-skin" cx="79" cy="132" rx="13" ry="15"></ellipse>
        <path class="demo-suit" d="M93 130 C119 122 149 128 171 144 C169 164 153 174 131 166 C112 159 96 149 85 141 Z"></path>
        <path class="demo-limb-fill" d="M161 149 C184 143 205 141 226 146 L224 164 C203 161 184 163 165 169 Z"></path>
        <path class="demo-limb-fill" d="M139 162 C158 177 174 190 187 209 L171 219 C158 201 144 189 126 175 Z"></path>
        <path class="demo-limb-fill" d="M87 132 C70 118 59 105 50 88 L65 78 C76 95 88 107 104 120 Z"></path>
      </g>
      <path class="demo-guide-arrow" d="M79 101 C112 78 163 82 197 109"></path>
    `,
    arm: `
      <g class="demo-person demo-arm-person">
        <ellipse class="demo-skin" cx="136" cy="48" rx="14" ry="16"></ellipse>
        <path class="demo-suit" d="M114 70 C131 59 153 61 166 75 L161 139 C147 151 126 151 112 139 Z"></path>
        <path class="demo-limb-fill demo-curl-arm" d="M111 82 C90 99 81 123 76 151 L94 157 C101 130 112 110 131 94 Z"></path>
        <path class="demo-limb-fill demo-curl-arm alt" d="M166 82 C187 99 196 123 201 151 L183 157 C176 130 165 110 146 94 Z"></path>
        <path class="demo-limb-fill" d="M120 139 C111 161 105 183 101 210 L119 214 C126 187 132 165 141 145 Z"></path>
        <path class="demo-limb-fill" d="M158 139 C167 161 173 183 177 210 L159 214 C152 187 146 165 137 145 Z"></path>
      </g>
      <path class="demo-guide-arrow" d="M74 146 C73 112 90 88 118 73"></path>
    `
  };

  return `
    <svg class="movement-demo-svg" viewBox="0 0 280 240" role="img" aria-label="${label} animated form demo">
      <rect class="demo-stage" x="0" y="0" width="280" height="240" rx="10"></rect>
      <path class="demo-floor-line" d="M38 214 H240"></path>
      ${scenes[pose] || scenes.press}
    </svg>
  `;
}

function formCuesForExercise(exercise) {
  const pose = demoPoseForExercise(exercise);
  const cues = {
    press: ["Brace your core.", "Lower with control.", "Finish without shrugging."],
    squat: ["Keep chest tall.", "Knees track with toes.", "Drive through midfoot."],
    hinge: ["Push hips back.", "Keep spine neutral.", "Stand by driving hips forward."],
    pull: ["Set shoulders down.", "Drive elbows toward ribs.", "Control the return."],
    core: ["Brace before each rep.", "Move through the trunk.", "Stay controlled."],
    arm: ["Keep upper arms steady.", "Move through the elbow.", "Avoid swinging."]
  };
  return cues[pose] || cues.press;
}

function isTargetMuscle(target, name) {
  if (target === name) return true;
  if (target === "abdominals" && name === "core") return true;
  if (target === "core" && name === "abdominals") return true;
  if (target === "posterior-chain" && ["back", "glutes", "hamstrings"].includes(name)) return true;
  if (target === "full-body") return true;
  return false;
}

function suggestRestSeconds(exercise) {
  if (exercise.category === "Conditioning") return 45;
  if (exercise.category === "Mobility") return 30;
  if (exercise.equipment === "body only") return 60;
  return 90;
}

function normalizeMuscle(muscle) {
  return String(muscle || "").toLowerCase().replace(/\s+/g, "-");
}

function targetClassMap(key) {
  const active = "is-target";
  const classes = {
    chest: "",
    back: "",
    shoulders: "",
    biceps: "",
    triceps: "",
    quadriceps: "",
    hamstrings: "",
    calves: "",
    glutes: "",
    core: ""
  };

  if (key === "abdominals" || key === "core") classes.core = active;
  if (key === "posterior-chain") {
    classes.back = active;
    classes.glutes = active;
    classes.hamstrings = active;
  }
  if (key === "full-body") {
    Object.keys(classes).forEach(name => {
      classes[name] = active;
    });
  }
  if (Object.prototype.hasOwnProperty.call(classes, key)) {
    classes[key] = active;
  }

  return classes;
}

function motionPath(key) {
  if (["chest", "triceps"].includes(key)) return "M86 88 C106 62 145 62 166 88";
  if (["back", "biceps", "posterior-chain"].includes(key)) return "M76 118 C108 88 146 88 176 118";
  if (["quadriceps", "glutes", "hamstrings", "calves"].includes(key)) return "M82 207 C106 178 144 178 168 207";
  if (["core", "abdominals"].includes(key)) return "M102 114 C116 94 134 94 148 114";
  return "M75 94 C112 54 154 54 191 94";
}

function setupWorkoutForm() {
  const form = document.getElementById("workoutForm");
  if (!form) return;

  form.addEventListener("submit", event => {
    event.preventDefault();
    addWorkout();
  });
}

function setupExercisePicker() {
  const tabs = document.getElementById("exerciseTabs");
  const library = document.getElementById("exerciseLibrary");
  const datalist = document.getElementById("exerciseOptions");

  if (!tabs || !library) return;

  const groups = [...new Set(exerciseCatalog.map(exercise => exercise.category))];

  if (datalist) {
    datalist.innerHTML = exerciseCatalog
      .map(exercise => `<option value="${escapeHtml(exercise.name)}"></option>`)
      .join("");
  }

  tabs.innerHTML = groups
    .map((group, index) => `<button type="button" class="${index === 0 ? "active" : ""}" data-group="${escapeHtml(group)}">${escapeHtml(group)}</button>`)
    .join("");

  tabs.addEventListener("click", event => {
    const button = event.target.closest("button[data-group]");
    if (!button) return;
    tabs.querySelectorAll("button").forEach(tab => tab.classList.remove("active"));
    button.classList.add("active");
    renderExerciseGroup(button.dataset.group);
  });

  library.addEventListener("click", event => {
    const button = event.target.closest("button[data-exercise]");
    const exercise = exerciseCatalog.find(item => item.name === button?.dataset.exercise);
    if (exercise) prefillWorkout(exercise);
  });

  renderExerciseGroup(groups[0]);
}

function renderExerciseGroup(group) {
  const library = document.getElementById("exerciseLibrary");
  if (!library) return;

  library.innerHTML = exerciseCatalog
    .filter(exercise => exercise.category === group)
    .slice(0, 12)
    .map(exercise => `<button type="button" data-exercise="${escapeHtml(exercise.name)}">${escapeHtml(exercise.name)}</button>`)
    .join("");
}

function prefillWorkout(exercise) {
  setValue("exercise", exercise.name);
  setValue("sets", exercise.sets);
  setValue("reps", exercise.reps);
  if (!document.getElementById("weight")?.value) setValue("weight", exercise.equipment === "body only" ? 0 : "");
  if (!document.getElementById("duration")?.value) setValue("duration", defaultDurationForExercise(exercise));
  document.getElementById("workoutLog")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function addWorkout() {
  const form = document.getElementById("workoutForm");
  const message = document.getElementById("formMessage");
  if (!form) return;

  setMessage(message, "Saving workout...");

  saveWorkoutEntry({
    workout: document.getElementById("exercise").value.trim(),
    sets: document.getElementById("sets").value,
    reps: document.getElementById("reps").value,
    weight: document.getElementById("weight").value || "0",
    duration: document.getElementById("duration").value
  })
    .then(text => {
      setMessage(message, text);
      form.reset();
      loadWorkouts();
    })
    .catch(error => setMessage(message, error.message));
}

function loadWorkouts() {
  fetch("load_workouts.php", { headers: { Accept: "application/json" } })
    .then(response => {
      if (!response.ok) throw new Error("Unable to load workouts");
      return response.json();
    })
    .then(workouts => {
      renderWorkoutList(workouts);
      renderWorkoutSummary(workouts);
      renderProgressPage(workouts);
      renderTodayWorkouts(workouts);
    })
    .catch(() => {
      renderWorkoutList([]);
      renderWorkoutSummary([]);
      renderProgressPage([]);
      renderTodayWorkouts([]);
    });
}

function renderWorkoutList(workouts) {
  const list = document.getElementById("list");
  const workoutCount = document.getElementById("workoutCount");
  if (!list) return;

  if (workoutCount) {
    workoutCount.textContent = `${workouts.length} ${workouts.length === 1 ? "entry" : "entries"}`;
  }

  if (workouts.length === 0) {
    list.innerHTML = '<li class="empty-state">No workouts saved yet.</li>';
    return;
  }

  list.innerHTML = workouts.map(workout => `
    <li class="workout-item">
      <div class="workout-info">
        <strong>${escapeHtml(workout.workout_name)}</strong>
        <small>${escapeHtml(workout.created_at)}</small>
      </div>
      <div class="workout-metrics">
        <span>${Number(workout.set_counts)} sets</span>
        <span>${Number(workout.rep_count)} reps</span>
        <span>${formatNumber(workout.weight_kg)} kg</span>
        <span>Workout burned: ${formatNumber(workout.calories_burned)} kcal</span>
      </div>
      <button type="button" class="delete-workout" data-id="${Number(workout.id)}">Delete</button>
    </li>
  `).join("");

  bindWorkoutDeleteButtons(list);
}

function renderWorkoutSummary(workouts) {
  const summary = calculateSummary(workouts);
  setText("totalWorkouts", summary.workouts);
  setText("totalSets", summary.sets);
  setText("totalVolume", `${formatNumber(summary.volume)} kg`);
  setText("totalCalories", `${formatNumber(summary.calories)} kcal`);
}

function renderProgressPage(workouts) {
  const recent = document.getElementById("progressRecent");
  if (!recent && !document.getElementById("progressCalories")) return;

  resetDoneCounterIfNewDay();
  const summary = calculateSummary(workouts);
  const activeDays = new Set(workouts.map(workout => String(workout.created_at).slice(0, 10))).size;

  setText("progressCalories", `${formatNumber(summary.calories)} kcal`);
  setText("progressWorkouts", `${summary.workouts} ${summary.workouts === 1 ? "Session" : "Sessions"}`);
  setText("progressVolume", `${formatNumber(summary.volume)} kg`);
  setText("progressDays", `${activeDays} ${activeDays === 1 ? "Day" : "Days"}`);

  if (!recent) return;

  if (workouts.length === 0) {
    recent.innerHTML = '<li class="empty-state">No workouts saved yet.</li>';
    return;
  }

  recent.innerHTML = workouts.slice(0, 5).map(workout => `
    <li class="workout-item">
      <div class="workout-info">
        <strong>${escapeHtml(workout.workout_name)}</strong>
        <small>${escapeHtml(workout.created_at)}</small>
      </div>
      <div class="workout-metrics">
        <span>${Number(workout.set_counts)} sets</span>
        <span>${Number(workout.rep_count)} reps</span>
        <span>${formatNumber(workout.weight_kg)} kg</span>
        <span>Workout burned: ${formatNumber(workout.calories_burned)} kcal</span>
      </div>
      <button type="button" class="delete-workout" data-id="${Number(workout.id)}">Delete</button>
    </li>
  `).join("");

  bindWorkoutDeleteButtons(recent);
}

function renderTodayWorkouts(workouts) {
  const list = document.getElementById("todayWorkoutList");
  const count = document.getElementById("todayWorkoutCount");
  if (!list) return;

  const todayKey = localDateKey(new Date());
  const today = workouts.filter(workout => String(workout.created_at || "").slice(0, 10) === todayKey);

  if (count) {
    count.textContent = `${today.length} saved`;
  }
  if (document.getElementById("sessionDoneCount")) {
    setText("sessionDoneCount", today.length);
    localStorage.setItem("ironixDoneTodayCount", String(today.length));
  }

  renderTodayProgress(today);

  if (today.length === 0) {
    list.innerHTML = '<li class="empty-state">No completed exercises saved today.</li>';
    return;
  }

  list.innerHTML = today.map(workout => `
    <li class="workout-item">
      <div class="workout-info">
        <strong>${escapeHtml(workout.workout_name)}</strong>
        <small>${escapeHtml(workout.created_at)}</small>
      </div>
      <div class="workout-metrics">
        <span>${Number(workout.set_counts)} sets</span>
        <span>${Number(workout.rep_count)} reps</span>
        <span>${formatNumber(workout.weight_kg)} kg</span>
        <span>Workout burned: ${formatNumber(workout.calories_burned)} kcal</span>
      </div>
      <button type="button" class="delete-workout" data-id="${Number(workout.id)}">Delete</button>
    </li>
  `).join("");

  bindWorkoutDeleteButtons(list);
}

function renderTodayProgress(today) {
  const summary = calculateSummary(today);
  setText("todayProgressCalories", `${formatNumber(summary.calories)} kcal`);
  setText("todayProgressWorkouts", `${summary.workouts} ${summary.workouts === 1 ? "Exercise" : "Exercises"}`);
  setText("todayProgressVolume", `${formatNumber(summary.volume)} kg`);
  setText("todayProgressSets", `${summary.sets} ${summary.sets === 1 ? "Set" : "Sets"}`);
}

function resetDoneCounterIfNewDay() {
  const todayKey = localDateKey(new Date());
  if (localStorage.getItem("ironixDoneTodayDate") !== todayKey) {
    localStorage.setItem("ironixDoneTodayDate", todayKey);
    localStorage.setItem("ironixDoneTodayCount", "0");
  }
}

function localDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function bindWorkoutDeleteButtons(container) {
  container.querySelectorAll(".delete-workout[data-id]").forEach(button => {
    button.addEventListener("click", () => requestWorkoutDelete(button));
  });
}

function requestWorkoutDelete(button) {
  const id = button.dataset.id;

  if (button.dataset.confirmStep !== "1") {
    button.dataset.confirmStep = "1";
    button.classList.add("is-armed");
    button.textContent = "Click again";
    button.title = "First confirmation: click again if you really want to delete this saved workout.";
    setMessage(getDeleteMessageTarget(), "Delete armed. Click the same button again, then confirm the final warning.");

    window.setTimeout(() => {
      if (button.dataset.confirmStep === "1") {
        resetDeleteButton(button);
      }
    }, 6000);
    return;
  }

  const finalConfirm = window.confirm("Final confirmation: permanently delete this saved workout from your history? This cannot be undone.");
  if (!finalConfirm) {
    resetDeleteButton(button);
    setMessage(getDeleteMessageTarget(), "Delete cancelled.");
    return;
  }

  button.disabled = true;
  button.textContent = "Deleting...";
  deleteWorkout(id, button);
}

function resetDeleteButton(button) {
  button.dataset.confirmStep = "";
  button.classList.remove("is-armed");
  button.textContent = "Delete";
  button.title = "";
}

function getDeleteMessageTarget() {
  return document.getElementById("formMessage") || document.getElementById("sessionMessage");
}

function deleteWorkout(id, button) {
  const formData = new URLSearchParams();
  formData.set("id", id);

  fetch("delete_workout.php", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: formData.toString()
  })
    .then(response => {
      if (!response.ok) throw new Error("Workout could not be deleted");
      return response.text();
    })
    .then(() => {
      setMessage(getDeleteMessageTarget(), "Saved workout deleted.");
      loadWorkouts();
    })
    .catch(error => {
      if (button) {
        button.disabled = false;
        resetDeleteButton(button);
      }
      setMessage(getDeleteMessageTarget(), error.message);
    });
}

function calculateSummary(workouts) {
  return workouts.reduce((summary, workout) => {
    const sets = Number(workout.set_counts) || 0;
    const reps = Number(workout.rep_count) || 0;
    const weight = Number(workout.weight_kg) || 0;
    const calories = Number(workout.calories_burned) || 0;
    summary.workouts += 1;
    summary.sets += sets;
    summary.volume += sets * reps * weight;
    summary.calories += calories;
    return summary;
  }, { workouts: 0, sets: 0, volume: 0, calories: 0 });
}

function setValue(id, value) {
  const element = document.getElementById(id);
  if (element) element.value = value;
}

function setText(id, text) {
  const element = document.getElementById(id);
  if (element) element.textContent = text;
}

function setMessage(element, text) {
  if (element) element.textContent = text;
}

function formatNumber(value) {
  return Number(value || 0).toLocaleString(undefined, { maximumFractionDigits: 1 });
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
