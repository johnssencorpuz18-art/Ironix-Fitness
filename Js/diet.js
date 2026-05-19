const commonsBase = "https://commons.wikimedia.org/wiki/Special:FilePath/";
const commonsPageBase = "https://commons.wikimedia.org/wiki/File:";

function commonsPhoto(file, credit) {
  return {
    image: `${commonsBase}${encodeURIComponent(file)}?width=720`,
    credit,
    creditUrl: `${commonsPageBase}${encodeURIComponent(file)}`
  };
}

const photos = {
  adobo: commonsPhoto("Chicken adobo.jpg", "dbgg1979, CC BY 2.0"),
  sinigang: commonsPhoto("Sinigang na baboy.jpg", "Anne Molina, CC BY-SA 4.0"),
  tinola: commonsPhoto("Tinolang Manok.jpg", "Efrenefren, CC BY-SA 4.0"),
  inasal: commonsPhoto("Chicken inasal.jpg", "Derk29, CC BY-SA 4.0"),
  bangus: commonsPhoto("Grilled Bangus.jpg", "Gibough, CC BY-SA 4.0"),
  tortangTalong: commonsPhoto("Tortang talong.jpg", "Aerous, CC BY-SA 4.0"),
  pinakbet: commonsPhoto("Pinakbet.jpg", "Shubert Ciencia, CC BY 2.0"),
  pancitBihon: commonsPhoto("Pancit Bihon.jpg", "Aerous, CC BY-SA 4.0"),
  lumpia: commonsPhoto("Lumpiang shanghai.jpg", "Popdien, CC BY-SA 4.0"),
  kareKare: commonsPhoto("Kare-kare.jpg", "GracinhaMarco Abundo, CC BY 2.0"),
  rice: commonsPhoto("Steamed Rice.jpg", "DreamyFlutura11, CC BY-SA 4.0"),
  egg: commonsPhoto("Boiled eggs.jpg", "Paddy, CC BY-SA 3.0/GFDL"),
  banana: commonsPhoto("Banana (1).jpg", "National Cancer Institute"),
  oatmeal: commonsPhoto("Oatmeal (1).jpg", "National Cancer Institute"),
  sweetPotato: commonsPhoto("COOKED SWEET POTATOES.JPG", "Peter Lungile Chidothe, CC BY-SA 4.0"),
  tilapia: commonsPhoto("Grilled tilapia.jpg", "Penwills, CC BY-SA 4.0")
};

const foods = [
  { name: "Chicken Adobo", group: "filipino protein", serving: "1 cup", calories: 320, protein: 28, carbs: 6, fat: 20, ...photos.adobo },
  { name: "Pork Adobo", group: "filipino", serving: "1 cup", calories: 430, protein: 26, carbs: 5, fat: 34, ...photos.adobo },
  { name: "Sinigang na Baboy", group: "filipino", serving: "1 bowl", calories: 300, protein: 22, carbs: 12, fat: 18, ...photos.sinigang },
  { name: "Sinigang na Isda", group: "filipino fatLoss protein", serving: "1 bowl", calories: 190, protein: 24, carbs: 10, fat: 6, ...photos.sinigang },
  { name: "Tinolang Manok", group: "filipino fatLoss protein", serving: "1 bowl", calories: 220, protein: 25, carbs: 8, fat: 9, ...photos.tinola },
  { name: "Chicken Inasal", group: "filipino protein", serving: "1 piece", calories: 360, protein: 35, carbs: 4, fat: 22, ...photos.inasal },
  { name: "Grilled Bangus", group: "filipino protein fatLoss", serving: "1 medium", calories: 280, protein: 32, carbs: 0, fat: 16, ...photos.bangus },
  { name: "Daing na Bangus", group: "filipino protein", serving: "1 medium", calories: 360, protein: 34, carbs: 2, fat: 24, ...photos.bangus },
  { name: "Tortang Talong", group: "filipino", serving: "1 piece", calories: 210, protein: 9, carbs: 12, fat: 14, ...photos.tortangTalong },
  { name: "Pinakbet", group: "filipino fatLoss", serving: "1 cup", calories: 180, protein: 7, carbs: 20, fat: 8, ...photos.pinakbet },
  { name: "Laing", group: "filipino", serving: "1 cup", calories: 260, protein: 8, carbs: 18, fat: 18, ...photos.pinakbet },
  { name: "Ginisang Monggo", group: "filipino protein carb", serving: "1 cup", calories: 250, protein: 15, carbs: 36, fat: 5, ...photos.pinakbet },
  { name: "Pancit Canton", group: "filipino carb", serving: "1 plate", calories: 420, protein: 15, carbs: 58, fat: 14, ...photos.pancitBihon },
  { name: "Pancit Bihon", group: "filipino carb", serving: "1 plate", calories: 360, protein: 12, carbs: 62, fat: 8, ...photos.pancitBihon },
  { name: "Lumpiang Shanghai", group: "filipino", serving: "5 pieces", calories: 330, protein: 14, carbs: 22, fat: 21, ...photos.lumpia },
  { name: "Kare-Kare", group: "filipino", serving: "1 bowl", calories: 520, protein: 26, carbs: 18, fat: 38, ...photos.kareKare },
  { name: "Bicol Express", group: "filipino", serving: "1 cup", calories: 500, protein: 22, carbs: 10, fat: 42, ...photos.kareKare },
  { name: "Arroz Caldo", group: "filipino carb", serving: "1 bowl", calories: 310, protein: 18, carbs: 44, fat: 7, ...photos.rice },
  { name: "Champorado", group: "filipino carb", serving: "1 bowl", calories: 330, protein: 8, carbs: 64, fat: 5, ...photos.rice },
  { name: "Garlic Rice", group: "filipino carb", serving: "1 cup", calories: 260, protein: 5, carbs: 48, fat: 6, ...photos.rice },
  { name: "Steamed White Rice", group: "carb", serving: "1 cup", calories: 205, protein: 4, carbs: 45, fat: 0, ...photos.rice },
  { name: "Brown Rice", group: "carb fatLoss", serving: "1 cup", calories: 215, protein: 5, carbs: 45, fat: 2, ...photos.rice },
  { name: "Boiled Egg", group: "protein fatLoss", serving: "1 large", calories: 78, protein: 6, carbs: 1, fat: 5, ...photos.egg },
  { name: "Chicken Breast", group: "protein fatLoss", serving: "100g cooked", calories: 165, protein: 31, carbs: 0, fat: 4, ...photos.inasal },
  { name: "Tuna", group: "protein fatLoss", serving: "100g", calories: 132, protein: 29, carbs: 0, fat: 1, ...photos.tilapia },
  { name: "Tilapia", group: "protein fatLoss", serving: "100g cooked", calories: 128, protein: 26, carbs: 0, fat: 3, ...photos.tilapia },
  { name: "Oatmeal", group: "carb fatLoss", serving: "1 cup cooked", calories: 154, protein: 6, carbs: 27, fat: 3, ...photos.oatmeal },
  { name: "Banana", group: "carb", serving: "1 medium", calories: 105, protein: 1, carbs: 27, fat: 0, ...photos.banana },
  { name: "Sweet Potato", group: "carb fatLoss", serving: "1 medium", calories: 112, protein: 2, carbs: 26, fat: 0, ...photos.sweetPotato },
  { name: "Greek Yogurt", group: "protein fatLoss", serving: "170g", calories: 100, protein: 17, carbs: 6, fat: 0, ...photos.oatmeal },
  { name: "Scrambled Eggs", group: "protein fatLoss", serving: "2 eggs", calories: 180, protein: 13, carbs: 2, fat: 13, meals: ["Breakfast"], ...photos.egg },
  { name: "Egg White Omelet", group: "protein fatLoss", serving: "4 egg whites", calories: 90, protein: 18, carbs: 1, fat: 0, meals: ["Breakfast"], ...photos.egg },
  { name: "Tapsilog", group: "filipino protein carb", serving: "1 plate", calories: 620, protein: 32, carbs: 68, fat: 24, meals: ["Breakfast", "Lunch"], ...photos.rice },
  { name: "Longsilog", group: "filipino carb", serving: "1 plate", calories: 690, protein: 24, carbs: 72, fat: 34, meals: ["Breakfast"], ...photos.rice },
  { name: "Tocilog", group: "filipino carb", serving: "1 plate", calories: 650, protein: 26, carbs: 75, fat: 26, meals: ["Breakfast"], ...photos.rice },
  { name: "Pandisal", group: "filipino carb", serving: "2 pieces", calories: 260, protein: 8, carbs: 48, fat: 4, meals: ["Breakfast", "Snack"], ...photos.rice },
  { name: "Peanut Butter Toast", group: "carb", serving: "2 slices", calories: 340, protein: 13, carbs: 36, fat: 18, meals: ["Breakfast", "Snack"], ...photos.oatmeal },
  { name: "Protein Smoothie", group: "protein fatLoss", serving: "1 glass", calories: 280, protein: 28, carbs: 30, fat: 5, meals: ["Breakfast", "Snack"], ...photos.banana },
  { name: "Avocado Toast", group: "carb fatLoss", serving: "1 serving", calories: 320, protein: 10, carbs: 34, fat: 17, meals: ["Breakfast", "Snack"], ...photos.oatmeal },
  { name: "Chicken Tinola with Rice", group: "filipino protein carb fatLoss", serving: "1 bowl + 1 cup rice", calories: 425, protein: 29, carbs: 53, fat: 9, meals: ["Lunch", "Dinner"], ...photos.tinola },
  { name: "Grilled Chicken Rice Bowl", group: "protein carb fatLoss", serving: "1 bowl", calories: 520, protein: 42, carbs: 58, fat: 12, meals: ["Lunch", "Dinner"], ...photos.inasal },
  { name: "Chicken Adobo Rice Plate", group: "filipino protein carb", serving: "1 plate", calories: 560, protein: 32, carbs: 55, fat: 22, meals: ["Lunch", "Dinner"], ...photos.adobo },
  { name: "Sinigang with Rice", group: "filipino carb", serving: "1 bowl + 1 cup rice", calories: 505, protein: 26, carbs: 57, fat: 18, meals: ["Lunch", "Dinner"], ...photos.sinigang },
  { name: "Salmon Rice Bowl", group: "protein carb fatLoss", serving: "1 bowl", calories: 540, protein: 36, carbs: 52, fat: 20, meals: ["Lunch", "Dinner"], ...photos.tilapia },
  { name: "Beef Steak Tagalog", group: "filipino protein", serving: "1 cup", calories: 380, protein: 32, carbs: 12, fat: 22, meals: ["Lunch", "Dinner"], ...photos.adobo },
  { name: "Chicken Caesar Salad", group: "protein fatLoss", serving: "1 bowl", calories: 410, protein: 35, carbs: 16, fat: 24, meals: ["Lunch", "Dinner"], ...photos.inasal },
  { name: "Tuna Sandwich", group: "protein carb", serving: "1 sandwich", calories: 390, protein: 28, carbs: 38, fat: 14, meals: ["Lunch", "Snack"], ...photos.tilapia },
  { name: "Vegetable Stir Fry", group: "fatLoss", serving: "1 plate", calories: 240, protein: 9, carbs: 30, fat: 9, meals: ["Lunch", "Dinner"], ...photos.pinakbet },
  { name: "Turkey Wrap", group: "protein carb fatLoss", serving: "1 wrap", calories: 430, protein: 32, carbs: 42, fat: 14, meals: ["Lunch"], ...photos.inasal },
  { name: "Chicken Sopas", group: "filipino carb", serving: "1 bowl", calories: 360, protein: 20, carbs: 42, fat: 12, meals: ["Dinner", "Snack"], ...photos.tinola },
  { name: "Grilled Pork Chop", group: "protein", serving: "1 piece", calories: 430, protein: 38, carbs: 0, fat: 30, meals: ["Lunch", "Dinner"], ...photos.inasal },
  { name: "Fruit Salad", group: "filipino carb", serving: "1 cup", calories: 220, protein: 3, carbs: 42, fat: 5, meals: ["Dessert", "Snack"], ...photos.banana },
  { name: "Halo-Halo", group: "filipino carb", serving: "1 glass", calories: 430, protein: 8, carbs: 78, fat: 10, meals: ["Dessert"], ...photos.banana },
  { name: "Leche Flan", group: "filipino", serving: "1 slice", calories: 280, protein: 7, carbs: 38, fat: 11, meals: ["Dessert"], ...photos.egg },
  { name: "Mango Graham", group: "filipino carb", serving: "1 slice", calories: 320, protein: 5, carbs: 48, fat: 12, meals: ["Dessert"], ...photos.banana },
  { name: "Fresh Mango", group: "carb fatLoss", serving: "1 cup", calories: 100, protein: 1, carbs: 25, fat: 1, meals: ["Dessert", "Snack"], ...photos.banana },
  { name: "Mixed Nuts", group: "protein", serving: "30g", calories: 180, protein: 6, carbs: 6, fat: 16, meals: ["Snack", "Appetizer"], ...photos.oatmeal },
  { name: "Cottage Cheese", group: "protein fatLoss", serving: "1 cup", calories: 220, protein: 28, carbs: 8, fat: 9, meals: ["Snack", "Breakfast"], ...photos.oatmeal },
  { name: "Edamame", group: "protein fatLoss", serving: "1 cup", calories: 190, protein: 17, carbs: 15, fat: 8, meals: ["Snack", "Appetizer"], ...photos.pinakbet },
  { name: "Cucumber Salad", group: "fatLoss", serving: "1 cup", calories: 70, protein: 2, carbs: 10, fat: 3, meals: ["Appetizer", "Snack"], ...photos.pinakbet },
  { name: "Vegetable Soup", group: "fatLoss", serving: "1 bowl", calories: 120, protein: 5, carbs: 20, fat: 3, meals: ["Appetizer", "Dinner"], ...photos.sinigang }
];

const foodGrid = document.getElementById("foodGrid");
const foodDetail = document.getElementById("foodDetail");
const foodSearch = document.getElementById("foodSearch");
const foodFilter = document.getElementById("foodFilter");
const mealDayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Appetizer", "Dessert", "Other"];
const mealFallbacks = {
  Breakfast: ["Oatmeal", "Boiled Egg", "Scrambled Eggs", "Tapsilog", "Pandisal", "Greek Yogurt"],
  Lunch: ["Chicken Adobo Rice Plate", "Tinolang Manok", "Grilled Chicken Rice Bowl", "Tuna Sandwich", "Vegetable Stir Fry", "Brown Rice"],
  Dinner: ["Sinigang with Rice", "Chicken Tinola with Rice", "Grilled Bangus", "Salmon Rice Bowl", "Chicken Sopas", "Pinakbet"],
  Snack: ["Banana", "Greek Yogurt", "Protein Smoothie", "Pandisal", "Mixed Nuts", "Fresh Mango"],
  Appetizer: ["Lumpiang Shanghai", "Cucumber Salad", "Vegetable Soup", "Edamame", "Boiled Egg"],
  Dessert: ["Fruit Salad", "Halo-Halo", "Leche Flan", "Mango Graham", "Fresh Mango", "Banana"],
  Other: ["Chicken Breast", "Steamed White Rice", "Sweet Potato", "Tuna", "Tilapia", "Brown Rice"]
};
let selectedMealDay = localStorage.getItem("ironixSelectedMealDay") || mealDayNames[0];
let weeklyMealPlan = JSON.parse(localStorage.getItem("ironixWeeklyMealPlan") || "{}");

if (foodGrid && foodSearch && foodFilter) {
  foodSearch.addEventListener("input", renderFoods);
  foodFilter.addEventListener("change", renderFoods);
  foodGrid.addEventListener("click", showFoodDetails);
  renderFoods();
}

setupMealPlanner();

function renderFoods() {
  const search = foodSearch.value.toLowerCase();
  const filter = foodFilter.value;
  const visibleFoods = foods.filter(food => {
    const matchesSearch = food.name.toLowerCase().includes(search);
    const matchesFilter = filter === "all" || food.group.includes(filter);
    return matchesSearch && matchesFilter;
  });

  foodGrid.innerHTML = visibleFoods.map(food => `
    <button class="food-card" type="button" data-index="${foods.indexOf(food)}">
      <img class="food-card-image" src="${food.image}" alt="${food.name}" loading="lazy">
      <span>${food.serving}</span>
      <strong>${food.name}</strong>
      <p>${food.calories} kcal | ${food.protein}g protein</p>
    </button>
  `).join("");
}

function showFoodDetails(event) {
  const card = event.target.closest(".food-card");

  if (!card) {
    return;
  }

  const food = foods[Number(card.dataset.index)];
  foodDetail.innerHTML = `
    <img class="food-detail-image" src="${food.image}" alt="${food.name}">
    <span class="eyebrow">Food Details</span>
    <h3>${food.name}</h3>
    <p>Serving: ${food.serving}</p>
    <div class="food-macro-grid">
      <strong>${food.calories}<span>kcal</span></strong>
      <strong>${food.protein}g<span>protein</span></strong>
      <strong>${food.carbs}g<span>carbs</span></strong>
      <strong>${food.fat}g<span>fat</span></strong>
    </div>
    <a class="food-credit" href="${food.creditUrl}" target="_blank" rel="noopener">Photo: ${food.credit}</a>
  `;
}

function setupMealPlanner() {
  const tabs = document.getElementById("mealDayTabs");
  const foodSelect = document.getElementById("mealFoodSelect");
  const foodSearchInput = document.getElementById("mealFoodSearch");
  const mealTypeSelect = document.getElementById("mealTypeSelect");
  const suggestions = document.getElementById("mealSuggestions");
  const addButton = document.getElementById("addMealButton");
  const clearButton = document.getElementById("clearMealPlanButton");

  if (!tabs || !foodSelect || !addButton) return;

  renderMealFoodOptions();
  renderMealSuggestions();
  foodSearchInput?.addEventListener("input", () => {
    renderMealFoodOptions();
    renderMealSuggestions();
  });
  mealTypeSelect?.addEventListener("change", () => {
    renderMealFoodOptions();
    renderMealSuggestions();
  });
  suggestions?.addEventListener("click", event => {
    const button = event.target.closest("[data-meal-food]");
    if (!button) return;
    foodSelect.value = button.dataset.mealFood;
    foodSearchInput.value = foods[Number(button.dataset.mealFood)]?.name || "";
    renderMealFoodOptions();
  });
  addButton.addEventListener("click", addMealToSelectedDay);
  clearButton?.addEventListener("click", () => {
    weeklyMealPlan = {};
    saveMealPlan();
    renderMealPlanner();
  });

  renderMealPlanner();
}

function renderMealFoodOptions() {
  const foodSelect = document.getElementById("mealFoodSelect");
  if (!foodSelect) return;

  const current = foodSelect.value;
  const matches = getVisibleMealFoods();
  const visibleFoods = matches.length ? matches : getMealTypeFoods(document.getElementById("mealTypeSelect")?.value || "Other");

  foodSelect.innerHTML = visibleFoods.map(({ food, index }) => (
    `<option value="${index}">${escapeHtml(food.name)} - ${food.calories} kcal, ${food.protein}g protein</option>`
  )).join("");

  if (visibleFoods.some(({ index }) => String(index) === String(current))) {
    foodSelect.value = current;
  }
}

function renderMealSuggestions() {
  const suggestions = document.getElementById("mealSuggestions");
  if (!suggestions) return;

  const type = document.getElementById("mealTypeSelect")?.value || "Other";
  const matches = getVisibleMealFoods().slice(0, 8);
  const fallback = mealFallbacks[type] || mealFallbacks.Other;
  const suggestionItems = matches.length ? matches : fallback
    .map(name => {
      const index = foods.findIndex(food => food.name === name);
      return index >= 0 ? { food: foods[index], index } : null;
    })
    .filter(Boolean);

  suggestions.innerHTML = suggestionItems.map(({ food, index }) => (
    `<button type="button" data-meal-food="${index}">${escapeHtml(food.name)}</button>`
  )).join("");
}

function getVisibleMealFoods() {
  const type = document.getElementById("mealTypeSelect")?.value || "Other";
  const search = (document.getElementById("mealFoodSearch")?.value || "").trim().toLowerCase();
  return getMealTypeFoods(type).filter(({ food }) => {
    if (!search) return true;
    return food.name.toLowerCase().includes(search) || food.group.toLowerCase().includes(search);
  });
}

function getMealTypeFoods(type) {
  return foods
    .map((food, index) => ({ food, index }))
    .filter(({ food }) => matchesMealType(food, type));
}

function matchesMealType(food, type) {
  if (type === "Other") return true;
  if (food.meals?.includes(type)) return true;

  const name = food.name.toLowerCase();
  const group = food.group.toLowerCase();

  if (type === "Breakfast") return ["egg", "oat", "yogurt", "banana", "silog", "pandisal", "smoothie", "toast"].some(term => name.includes(term));
  if (type === "Lunch") return group.includes("protein") || group.includes("carb") || ["rice", "sandwich", "wrap", "salad"].some(term => name.includes(term));
  if (type === "Dinner") return group.includes("filipino") || ["soup", "grilled", "bowl", "salad"].some(term => name.includes(term));
  if (type === "Snack") return ["banana", "yogurt", "toast", "nuts", "pandisal", "smoothie", "mango"].some(term => name.includes(term));
  if (type === "Appetizer") return ["lumpia", "soup", "salad", "egg", "edamame"].some(term => name.includes(term));
  if (type === "Dessert") return ["fruit", "halo", "flan", "mango", "banana", "champorado"].some(term => name.includes(term));

  return true;
}

function renderMealPlanner() {
  const tabs = document.getElementById("mealDayTabs");
  const title = document.getElementById("selectedMealDayTitle");
  const grid = document.getElementById("mealSlotGrid");
  const totals = document.getElementById("mealDayTotals");
  const result = document.getElementById("mealDayResult");

  if (!tabs || !title || !grid || !totals) return;

  if (!mealDayNames.includes(selectedMealDay)) {
    selectedMealDay = mealDayNames[0];
  }

  tabs.innerHTML = mealDayNames.map(day => {
    const count = getMealsForDay(day).length;
    return `
      <button type="button" class="${day === selectedMealDay ? "active" : ""}" data-meal-day="${day}" role="tab" aria-selected="${day === selectedMealDay ? "true" : "false"}">
        <span>${day.slice(0, 3)}</span>
        <strong>${count}</strong>
      </button>
    `;
  }).join("");

  title.textContent = selectedMealDay;
  const dayMeals = getMealsForDay(selectedMealDay);
  const dayTotals = calculateMealTotals(dayMeals);
  totals.innerHTML = `
    <span>${formatMacro(dayTotals.calories)} kcal</span>
    <span>${formatMacro(dayTotals.protein)}g protein</span>
    <span>${formatMacro(dayTotals.carbs)}g carbs</span>
    <span>${formatMacro(dayTotals.fat)}g fat</span>
  `;
  if (result) {
    result.innerHTML = renderDayResult(dayTotals);
  }

  grid.innerHTML = mealTypes.map(type => renderMealSlot(type, dayMeals.filter(meal => meal.type === type))).join("");

  tabs.querySelectorAll("[data-meal-day]").forEach(button => {
    button.addEventListener("click", () => {
      selectedMealDay = button.dataset.mealDay;
      localStorage.setItem("ironixSelectedMealDay", selectedMealDay);
      renderMealPlanner();
    });
  });

  grid.querySelectorAll("[data-remove-meal]").forEach(button => {
    button.addEventListener("click", () => {
      const meals = getMealsForDay(selectedMealDay);
      meals.splice(Number(button.dataset.removeMeal), 1);
      weeklyMealPlan[selectedMealDay] = meals;
      saveMealPlan();
      renderMealPlanner();
    });
  });
}

function renderDayResult(dayTotals) {
  const profile = window.ironixDietProfile || {};
  const weightKg = validNumber(profile.weightKg, 70);
  const heightCm = validNumber(profile.heightCm, 170);
  const age = validNumber(profile.age, 25);
  const maintenance = estimateMaintenanceCalories(weightKg, heightCm, age);
  const workoutBurn = estimateNormalWorkoutBurn(weightKg);
  const netAfterWorkout = dayTotals.calories - workoutBurn;
  const balance = netAfterWorkout - maintenance;
  const fatEquivalentKg = Math.abs(balance) / 7700;
  const direction = balance >= 0 ? "surplus" : "deficit";

  return `
    <div>
      <span>Meals</span>
      <strong>${formatMacro(dayTotals.calories)} kcal</strong>
    </div>
    <div>
      <span>Normal Workout</span>
      <strong>-${formatMacro(workoutBurn)} kcal</strong>
    </div>
    <div>
      <span>After Workout</span>
      <strong>${formatMacro(netAfterWorkout)} kcal</strong>
    </div>
    <div>
      <span>Vs Maintenance</span>
      <strong>${balance >= 0 ? "+" : "-"}${formatMacro(Math.abs(balance))} kcal</strong>
    </div>
    <p>${direction === "deficit" ? "Estimated deficit" : "Estimated surplus"} equals about ${formatMacro(fatEquivalentKg)} kg of fat energy, not instant scale change.</p>
  `;
}

function renderMealSlot(type, meals) {
  return `
    <article class="meal-slot">
      <div class="meal-slot-head">
        <h5>${type}</h5>
        <span>${meals.length} item${meals.length === 1 ? "" : "s"}</span>
      </div>
      ${meals.length ? `
        <div class="meal-list">
          ${meals.map(meal => renderMealItem(meal)).join("")}
        </div>
      ` : '<p>No meal added yet.</p>'}
    </article>
  `;
}

function renderMealItem(meal) {
  const allMeals = getMealsForDay(selectedMealDay);
  const index = allMeals.indexOf(meal);
  const totals = mealTotals(meal);
  return `
    <div class="meal-item">
      <div>
        <strong>${escapeHtml(meal.name)}</strong>
        <span>${escapeHtml(meal.serving)} x ${meal.servings}${meal.note ? ` | ${escapeHtml(meal.note)}` : ""}</span>
      </div>
      <div class="meal-item-macros">
        <span>${formatMacro(totals.calories)} kcal</span>
        <span>${formatMacro(totals.protein)}g protein</span>
      </div>
      <button type="button" class="delete-workout" data-remove-meal="${index}">Remove</button>
    </div>
  `;
}

function addMealToSelectedDay() {
  const type = document.getElementById("mealTypeSelect")?.value || "Other";
  const foodIndex = Number(document.getElementById("mealFoodSelect")?.value || 0);
  const servings = Number(document.getElementById("mealServingsInput")?.value || 1);
  const note = document.getElementById("mealNoteInput")?.value.trim() || "";
  const food = foods[foodIndex] || foods[0];

  if (!food || servings <= 0) return;

  const meal = {
    type,
    name: food.name,
    serving: food.serving,
    servings,
    note,
    calories: food.calories,
    protein: food.protein,
    carbs: food.carbs,
    fat: food.fat
  };

  weeklyMealPlan[selectedMealDay] = [...getMealsForDay(selectedMealDay), meal];
  saveMealPlan();
  document.getElementById("mealNoteInput").value = "";
  renderMealPlanner();
}

function getMealsForDay(day) {
  return Array.isArray(weeklyMealPlan[day]) ? weeklyMealPlan[day] : [];
}

function mealTotals(meal) {
  const servings = Number(meal.servings) || 1;
  return {
    calories: Number(meal.calories) * servings,
    protein: Number(meal.protein) * servings,
    carbs: Number(meal.carbs) * servings,
    fat: Number(meal.fat) * servings
  };
}

function calculateMealTotals(meals) {
  return meals.reduce((totals, meal) => {
    const item = mealTotals(meal);
    totals.calories += item.calories;
    totals.protein += item.protein;
    totals.carbs += item.carbs;
    totals.fat += item.fat;
    return totals;
  }, { calories: 0, protein: 0, carbs: 0, fat: 0 });
}

function saveMealPlan() {
  localStorage.setItem("ironixWeeklyMealPlan", JSON.stringify(weeklyMealPlan));
}

function formatMacro(value) {
  return Number(value).toLocaleString(undefined, { maximumFractionDigits: 1 });
}

function estimateNormalWorkoutBurn(weightKg) {
  const normalStrengthMet = 4.5;
  const minutes = 45;
  return Math.round(((normalStrengthMet - 1) * 3.5 * weightKg / 200) * minutes);
}

function estimateMaintenanceCalories(weightKg, heightCm, age) {
  const neutralBmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) - 80;
  return Math.round(neutralBmr * 1.35);
}

function validNumber(value, fallback) {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? number : fallback;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
