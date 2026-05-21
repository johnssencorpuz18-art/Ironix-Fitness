<?php require_once "auth_helpers.php"; ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BMI Calculator - IRONIX</title>
  <link rel="stylesheet" href="Css/style.css?v=48">
</head>
<body>
  <header>
    <?php render_nav("bmi"); ?>
  </header>

  <main class="bmi-page">
    <section class="community-hero">
      <div>
        <span class="eyebrow">Body Metrics</span>
        <h2>Calculate BMI and understand your range.</h2>
        <p>Enter your weight and height to get a quick body mass index estimate.</p>
      </div>
    </section>

    <section class="bmi-layout">
      <form class="panel profile-form" id="bmiForm">
        <div class="panel-title">
          <span class="eyebrow">Calculator</span>
          <h3>Your Details</h3>
        </div>

        <label for="weight">Weight (kg)</label>
        <input id="weight" type="number" min="1" step="0.1" placeholder="70" required>

        <label for="height">Height (cm)</label>
        <input id="height" type="number" min="1" step="0.1" placeholder="175" required>

        <button type="submit">Calculate BMI</button>
      </form>

      <section class="panel bmi-result" id="result" aria-live="polite">
        <span class="eyebrow">Result</span>
        <strong>--</strong>
        <p>Complete the form to see your BMI category.</p>
      </section>
    </section>

    <section class="bmi-scale">
      <span>Underweight: below 18.5</span>
      <span>Healthy range: 18.5 to 24.9</span>
      <span>Overweight: 25 to 29.9</span>
      <span>Obesity range: 30 and above</span>
    </section>
  </main>

  <script>
    document.getElementById("bmiForm").addEventListener("submit", event => {
      event.preventDefault();

      const weight = parseFloat(document.getElementById("weight").value);
      const heightCm = parseFloat(document.getElementById("height").value);
      const result = document.getElementById("result");

      if (!weight || !heightCm) {
        result.innerHTML = '<span class="eyebrow">Result</span><strong>--</strong><p>Please enter valid numbers.</p>';
        return;
      }

      const heightM = heightCm / 100;
      const bmi = weight / (heightM * heightM);
      let category = "Healthy range";

      if (bmi < 18.5) category = "Underweight";
      if (bmi >= 25) category = "Overweight";
      if (bmi >= 30) category = "Obesity range";

      result.innerHTML = `<span class="eyebrow">Result</span><strong>${bmi.toFixed(1)}</strong><p>${category}</p>`;
    });
  </script>
</body>
</html>
