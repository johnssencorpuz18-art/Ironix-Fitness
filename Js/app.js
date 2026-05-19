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

  const shouldShow = new URLSearchParams(window.location.search).get("onboarding") === "1" || !localStorage.getItem("ironixFitnessProfile");
  panel.hidden = !shouldShow;

  form.addEventListener("submit", event => {
    event.preventDefault();
    const profile = readFitnessProfile();
    localStorage.setItem("ironixFitnessProfile", JSON.stringify(profile));
    buildRecommendedPlan(profile);
    panel.hidden = true;
    document.getElementById("weeklyPlanner")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  skip?.addEventListener("click", () => {
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
  document.getElementById("addToCalendarButton")?.addEventListener("click", () => addExerciseToNextOpenDay(selectedExercise));
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
      <div class="exercise-card-diagram" aria-hidden="true">${renderAnatomySvg(exercise.muscle, "card")}</div>
      <div class="exercise-card-content">
        <span>${escapeHtml(exercise.muscle)} | ${escapeHtml(exercise.equipment)}</span>
        <h4>${escapeHtml(exercise.name)}</h4>
        <p>${exercise.sets} sets x ${exercise.reps} reps</p>
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
    diagram.innerHTML = `
      <div class="anatomy-panel">
        ${renderAnatomySvg(exercise.muscle, "large")}
        <div class="muscle-target-note">
          <span>Target muscle</span>
          <strong>${escapeHtml(exercise.muscle)}</strong>
        </div>
      </div>
    `;
  }

  setText("exerciseMeta", `${exercise.category} | ${exercise.muscle} | ${exercise.equipment}`);
  setText("exerciseName", exercise.name);
  setText("exerciseSummary", `Suggested target: ${exercise.sets} sets of ${exercise.reps} reps. Choose a load that leaves 1-3 controlled reps in reserve.`);

  const steps = document.getElementById("exerciseSteps");
  if (steps) {
    steps.innerHTML = exercise.steps.map(step => `<li>${escapeHtml(step)}</li>`).join("");
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
        .map(exercise => exercise.name);
      weeklyPlan[day] = exercises;
      saveWeeklyPlan();
      renderCalendar();
    });
  });
}

function filterByEquipment(equipment) {
  if (equipment === "gym") return exerciseCatalog;
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

  calendar.innerHTML = dayNames.map(day => {
    const items = weeklyPlan[day] || [];
    return `
      <article class="calendar-day">
        <h4>${day}</h4>
        ${items.length ? `<ul>${items.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : '<p>Rest or add exercises.</p>'}
        <button type="button" data-day="${day}">Add selected exercise</button>
      </article>
    `;
  }).join("");

  calendar.querySelectorAll("button[data-day]").forEach(button => {
    button.addEventListener("click", () => {
      const day = button.dataset.day;
      weeklyPlan[day] = [...(weeklyPlan[day] || []), selectedExercise.name];
      saveWeeklyPlan();
      renderCalendar();
    });
  });
}

function addExerciseToNextOpenDay(exercise) {
  const day = dayNames.find(name => !weeklyPlan[name] || weeklyPlan[name].length < 4) || dayNames[0];
  weeklyPlan[day] = [...(weeklyPlan[day] || []), exercise.name];
  saveWeeklyPlan();
  renderCalendar();
  document.getElementById("weeklyPlanner")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function addExerciseToSession(exercise) {
  liveSession.push({
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name: exercise.name,
    muscle: exercise.muscle,
    equipment: exercise.equipment,
    plannedSets: exercise.sets,
    plannedReps: exercise.reps,
    sets: exercise.sets,
    reps: exercise.reps,
    weight: exercise.equipment === "body only" ? 0 : "",
    duration: defaultDurationForExercise(exercise),
    done: false
  });
  saveLiveSession();
  renderLiveSession();
  document.getElementById("liveSession")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function defaultDurationForExercise(exercise) {
  if (exercise.category === "Conditioning") return 20;
  if (exercise.category === "Mobility") return 10;
  return 8;
}

function renderLiveSession() {
  const list = document.getElementById("liveSessionList");
  if (!list) return;

  const doneCount = liveSession.filter(item => item.done).length;
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
        <input type="checkbox" data-session-field="done" ${item.done ? "checked" : ""}>
        <span>${item.done ? "Done" : "Mark done"}</span>
      </label>

      <div class="session-exercise-main">
        <strong>${index + 1}. ${escapeHtml(item.name)}</strong>
        <span>${escapeHtml(item.muscle)} | planned ${item.plannedSets}x${item.plannedReps}</span>
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
    input.addEventListener("input", updateSessionItem);
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
    item.done = event.target.checked;
  } else {
    item[field] = event.target.value;
  }

  saveLiveSession();
  renderLiveSession();
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
  if (!document.getElementById("duration")?.value) setValue("duration", 45);
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
    })
    .catch(() => {
      renderWorkoutList([]);
      renderWorkoutSummary([]);
      renderProgressPage([]);
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
        <span>${formatNumber(workout.calories_burned)} kcal</span>
      </div>
      <button type="button" class="delete-workout" data-id="${Number(workout.id)}">Delete</button>
    </li>
  `).join("");

  list.querySelectorAll(".delete-workout").forEach(button => {
    button.addEventListener("click", () => deleteWorkout(button.dataset.id));
  });
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
      </div>
    </li>
  `).join("");
}

function deleteWorkout(id) {
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
    .then(loadWorkouts)
    .catch(error => setMessage(document.getElementById("formMessage"), error.message));
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
