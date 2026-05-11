const foods = [
  { name: "Chicken Adobo", group: "filipino protein", serving: "1 cup", calories: 320, protein: 28, carbs: 6, fat: 20 },
  { name: "Pork Adobo", group: "filipino", serving: "1 cup", calories: 430, protein: 26, carbs: 5, fat: 34 },
  { name: "Sinigang na Baboy", group: "filipino", serving: "1 bowl", calories: 300, protein: 22, carbs: 12, fat: 18 },
  { name: "Sinigang na Isda", group: "filipino fatLoss protein", serving: "1 bowl", calories: 190, protein: 24, carbs: 10, fat: 6 },
  { name: "Tinolang Manok", group: "filipino fatLoss protein", serving: "1 bowl", calories: 220, protein: 25, carbs: 8, fat: 9 },
  { name: "Chicken Inasal", group: "filipino protein", serving: "1 piece", calories: 360, protein: 35, carbs: 4, fat: 22 },
  { name: "Grilled Bangus", group: "filipino protein fatLoss", serving: "1 medium", calories: 280, protein: 32, carbs: 0, fat: 16 },
  { name: "Daing na Bangus", group: "filipino protein", serving: "1 medium", calories: 360, protein: 34, carbs: 2, fat: 24 },
  { name: "Tortang Talong", group: "filipino", serving: "1 piece", calories: 210, protein: 9, carbs: 12, fat: 14 },
  { name: "Pinakbet", group: "filipino fatLoss", serving: "1 cup", calories: 180, protein: 7, carbs: 20, fat: 8 },
  { name: "Laing", group: "filipino", serving: "1 cup", calories: 260, protein: 8, carbs: 18, fat: 18 },
  { name: "Ginisang Monggo", group: "filipino protein carb", serving: "1 cup", calories: 250, protein: 15, carbs: 36, fat: 5 },
  { name: "Pancit Canton", group: "filipino carb", serving: "1 plate", calories: 420, protein: 15, carbs: 58, fat: 14 },
  { name: "Pancit Bihon", group: "filipino carb", serving: "1 plate", calories: 360, protein: 12, carbs: 62, fat: 8 },
  { name: "Lumpiang Shanghai", group: "filipino", serving: "5 pieces", calories: 330, protein: 14, carbs: 22, fat: 21 },
  { name: "Kare-Kare", group: "filipino", serving: "1 bowl", calories: 520, protein: 26, carbs: 18, fat: 38 },
  { name: "Bicol Express", group: "filipino", serving: "1 cup", calories: 500, protein: 22, carbs: 10, fat: 42 },
  { name: "Arroz Caldo", group: "filipino carb", serving: "1 bowl", calories: 310, protein: 18, carbs: 44, fat: 7 },
  { name: "Champorado", group: "filipino carb", serving: "1 bowl", calories: 330, protein: 8, carbs: 64, fat: 5 },
  { name: "Garlic Rice", group: "filipino carb", serving: "1 cup", calories: 260, protein: 5, carbs: 48, fat: 6 },
  { name: "Steamed White Rice", group: "carb", serving: "1 cup", calories: 205, protein: 4, carbs: 45, fat: 0 },
  { name: "Brown Rice", group: "carb fatLoss", serving: "1 cup", calories: 215, protein: 5, carbs: 45, fat: 2 },
  { name: "Boiled Egg", group: "protein fatLoss", serving: "1 large", calories: 78, protein: 6, carbs: 1, fat: 5 },
  { name: "Chicken Breast", group: "protein fatLoss", serving: "100g cooked", calories: 165, protein: 31, carbs: 0, fat: 4 },
  { name: "Tuna", group: "protein fatLoss", serving: "100g", calories: 132, protein: 29, carbs: 0, fat: 1 },
  { name: "Tilapia", group: "protein fatLoss", serving: "100g cooked", calories: 128, protein: 26, carbs: 0, fat: 3 },
  { name: "Oatmeal", group: "carb fatLoss", serving: "1 cup cooked", calories: 154, protein: 6, carbs: 27, fat: 3 },
  { name: "Banana", group: "carb", serving: "1 medium", calories: 105, protein: 1, carbs: 27, fat: 0 },
  { name: "Sweet Potato", group: "carb fatLoss", serving: "1 medium", calories: 112, protein: 2, carbs: 26, fat: 0 },
  { name: "Greek Yogurt", group: "protein fatLoss", serving: "170g", calories: 100, protein: 17, carbs: 6, fat: 0 }
];

const foodGrid = document.getElementById("foodGrid");
const foodDetail = document.getElementById("foodDetail");
const foodSearch = document.getElementById("foodSearch");
const foodFilter = document.getElementById("foodFilter");

if (foodGrid && foodSearch && foodFilter) {
  foodSearch.addEventListener("input", renderFoods);
  foodFilter.addEventListener("change", renderFoods);
  foodGrid.addEventListener("click", showFoodDetails);
  renderFoods();
}

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
    <span class="eyebrow">Food Details</span>
    <h3>${food.name}</h3>
    <p>Serving: ${food.serving}</p>
    <div class="food-macro-grid">
      <strong>${food.calories}<span>kcal</span></strong>
      <strong>${food.protein}g<span>protein</span></strong>
      <strong>${food.carbs}g<span>carbs</span></strong>
      <strong>${food.fat}g<span>fat</span></strong>
    </div>
  `;
}
