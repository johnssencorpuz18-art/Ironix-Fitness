const exerciseGroups = {
  Chest: ["Bench Press", "Incline Dumbbell Press", "Push Up", "Cable Fly"],
  Back: ["Deadlift", "Lat Pulldown", "Barbell Row", "Seated Cable Row"],
  Legs: ["Squat", "Leg Press", "Romanian Deadlift", "Walking Lunge"],
  Shoulders: ["Overhead Press", "Lateral Raise", "Rear Delt Fly", "Arnold Press"],
  Arms: ["Bicep Curl", "Tricep Pushdown", "Hammer Curl", "Skull Crusher"]
};

document.addEventListener("DOMContentLoaded", () => {
  setupExercisePicker();
  setupWorkoutForm();
  loadWorkouts();
});

function setupWorkoutForm() {
  const form = document.getElementById("workoutForm");

  if (!form) {
    return;
  }

  form.addEventListener("submit", event => {
    event.preventDefault();
    addWorkout();
  });
}

function setupExercisePicker() {
  const tabs = document.getElementById("exerciseTabs");
  const library = document.getElementById("exerciseLibrary");
  const datalist = document.getElementById("exerciseOptions");

  if (!tabs || !library) {
    return;
  }

  const groups = Object.keys(exerciseGroups);

  if (datalist) {
    datalist.innerHTML = groups
      .flatMap(group => exerciseGroups[group])
      .map(exercise => `<option value="${escapeHtml(exercise)}"></option>`)
      .join("");
  }

  tabs.innerHTML = groups
    .map((group, index) => `<button type="button" class="${index === 0 ? "active" : ""}" data-group="${group}">${group}</button>`)
    .join("");

  tabs.addEventListener("click", event => {
    const button = event.target.closest("button[data-group]");

    if (!button) {
      return;
    }

    tabs.querySelectorAll("button").forEach(tab => tab.classList.remove("active"));
    button.classList.add("active");
    renderExerciseGroup(button.dataset.group);
  });

  library.addEventListener("click", event => {
    const button = event.target.closest("button[data-exercise]");
    const exerciseInput = document.getElementById("exercise");

    if (button && exerciseInput) {
      exerciseInput.value = button.dataset.exercise;
      exerciseInput.focus();
    }
  });

  renderExerciseGroup(groups[0]);
}

function renderExerciseGroup(group) {
  const library = document.getElementById("exerciseLibrary");

  if (!library) {
    return;
  }

  library.innerHTML = exerciseGroups[group]
    .map(exercise => `<button type="button" data-exercise="${escapeHtml(exercise)}">${escapeHtml(exercise)}</button>`)
    .join("");
}

function addWorkout() {
  const form = document.getElementById("workoutForm");
  const message = document.getElementById("formMessage");

  if (!form) {
    return;
  }

  setMessage(message, "Saving workout...");

  const formData = new URLSearchParams();
  formData.set("workout", document.getElementById("exercise").value.trim());
  formData.set("sets", document.getElementById("sets").value);
  formData.set("reps", document.getElementById("reps").value);
  formData.set("weight", document.getElementById("weight").value);
  formData.set("duration", document.getElementById("duration").value);

  fetch("save_workout.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: formData.toString()
  })
    .then(async response => {
      const text = await response.text();

      if (!response.ok) {
        throw new Error(text || "Workout could not be saved");
      }

      return text;
    })
    .then(text => {
      setMessage(message, text);
      form.reset();
      loadWorkouts();
    })
    .catch(error => {
      setMessage(message, error.message);
    });
}

function loadWorkouts() {
  fetch("load_workouts.php")
    .then(response => {
      if (!response.ok) {
        throw new Error("Unable to load workouts");
      }

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

  if (!list) {
    return;
  }

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
  const totalWorkouts = document.getElementById("totalWorkouts");
  const totalSets = document.getElementById("totalSets");
  const totalVolume = document.getElementById("totalVolume");
  const totalCalories = document.getElementById("totalCalories");

  if (!totalWorkouts && !totalSets && !totalVolume && !totalCalories) {
    return;
  }

  const summary = calculateSummary(workouts);

  if (totalWorkouts) totalWorkouts.textContent = summary.workouts;
  if (totalSets) totalSets.textContent = summary.sets;
  if (totalVolume) totalVolume.textContent = `${formatNumber(summary.volume)} kg`;
  if (totalCalories) totalCalories.textContent = `${formatNumber(summary.calories)} kcal`;
}

function renderProgressPage(workouts) {
  const calories = document.getElementById("progressCalories");
  const workoutTotal = document.getElementById("progressWorkouts");
  const volume = document.getElementById("progressVolume");
  const days = document.getElementById("progressDays");
  const recent = document.getElementById("progressRecent");

  if (!calories && !workoutTotal && !volume && !days && !recent) {
    return;
  }

  const summary = calculateSummary(workouts);
  const activeDays = new Set(workouts.map(workout => String(workout.created_at).slice(0, 10))).size;

  if (calories) calories.textContent = `${formatNumber(summary.calories)} kcal`;
  if (workoutTotal) workoutTotal.textContent = `${summary.workouts} ${summary.workouts === 1 ? "Session" : "Sessions"}`;
  if (volume) volume.textContent = `${formatNumber(summary.volume)} kg`;
  if (days) days.textContent = `${activeDays} ${activeDays === 1 ? "Day" : "Days"}`;

  if (!recent) {
    return;
  }

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
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: formData.toString()
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Workout could not be deleted");
      }

      return response.text();
    })
    .then(loadWorkouts)
    .catch(error => {
      setMessage(document.getElementById("formMessage"), error.message);
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

function setMessage(element, text) {
  if (element) {
    element.textContent = text;
  }
}

function formatNumber(value) {
  return Number(value || 0).toLocaleString(undefined, {
    maximumFractionDigits: 1
  });
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
