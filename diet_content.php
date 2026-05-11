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
</main>
