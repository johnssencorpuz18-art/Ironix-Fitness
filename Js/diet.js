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
  { name: "Greek Yogurt", group: "protein fatLoss", serving: "170g", calories: 100, protein: 17, carbs: 6, fat: 0, ...photos.oatmeal }
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
