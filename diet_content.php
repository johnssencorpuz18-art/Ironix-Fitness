<main class="diet-page">
  <section class="diet-hero">
    <div>
      <span class="eyebrow">Food Database</span>
      <h2>Filipino meals and fitness foods with calories and protein.</h2>
      <p>Search food, filter by goal, and click any meal to see estimated nutrition per serving.</p>
    </div>
  </section>

  <section class="diet-controls">
    <input id="foodSearch" type="search" placeholder="Search adobo, sinigang, rice, chicken...">
    <select id="foodFilter">
      <option value="all">All foods</option>
      <option value="filipino">Filipino foods</option>
      <option value="protein">High protein</option>
      <option value="carb">Carb source</option>
      <option value="fatLoss">Fat loss friendly</option>
    </select>
  </section>

  <section class="food-grid" id="foodGrid"></section>

  <section class="food-detail-panel" id="foodDetail">
    <span class="eyebrow">Food Details</span>
    <h3>Select a food</h3>
    <p>Click a card to view calories, protein, carbs, and fats per serving.</p>
  </section>

  <section class="meal-planner panel" id="weeklyMealPlanner">
    <div class="section-title">
      <div>
        <span class="eyebrow">Weekly Meal Plan</span>
        <h3>Plan meals by day</h3>
      </div>
      <button type="button" class="secondary-button" id="clearMealPlanButton">Clear Meals</button>
    </div>

    <div class="meal-day-tabs" id="mealDayTabs" role="tablist" aria-label="Meal plan days"></div>

    <section class="meal-day-panel">
      <div class="meal-day-head">
        <div>
          <span class="eyebrow">Selected Day</span>
          <h4 id="selectedMealDayTitle">Monday</h4>
        </div>
        <div class="meal-day-totals" id="mealDayTotals"></div>
      </div>

      <div class="meal-slot-grid" id="mealSlotGrid"></div>

      <section class="meal-add-panel" aria-label="Add meal to selected day">
        <div>
          <span class="eyebrow">Add Meal</span>
          <h4>Customize the selected day</h4>
        </div>

        <div class="meal-add-grid">
          <label>Meal Type
            <select id="mealTypeSelect">
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Snack">Snack</option>
              <option value="Appetizer">Appetizer</option>
              <option value="Dessert">Dessert</option>
              <option value="Other">Other</option>
            </select>
          </label>

          <label>Food
            <select id="mealFoodSelect"></select>
          </label>
        </div>

        <div class="meal-add-grid">
          <label>Servings
            <input id="mealServingsInput" type="number" min="0.25" step="0.25" value="1">
          </label>
          <label>Note
            <input id="mealNoteInput" type="text" placeholder="Optional prep note">
          </label>
        </div>

        <button type="button" id="addMealButton">Add To Day</button>
      </section>
    </section>
  </section>
</main>
