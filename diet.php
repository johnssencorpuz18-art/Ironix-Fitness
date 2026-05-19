<?php
require "require_auth.php";
require "db.php";

$userId = current_user_id();
$profileStmt = $conn->prepare("SELECT age, height_cm, weight_kg FROM users WHERE id = ?");
$profileStmt->bind_param("i", $userId);
$profileStmt->execute();
$dietProfile = $profileStmt->get_result()->fetch_assoc() ?: [];
$profileStmt->close();
$conn->close();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Diet Planner - IRONIX</title>
  <link rel="stylesheet" href="Css/style.css?v=29">
</head>
<body>
  <header>
    <?php render_nav("diet"); ?>
  </header>

  <?php include "diet_content.php"; ?>

  <script>
    window.ironixDietProfile = <?php echo json_encode([
      "age" => isset($dietProfile["age"]) ? (float)$dietProfile["age"] : null,
      "heightCm" => isset($dietProfile["height_cm"]) ? (float)$dietProfile["height_cm"] : null,
      "weightKg" => isset($dietProfile["weight_kg"]) ? (float)$dietProfile["weight_kg"] : null
    ]); ?>;
  </script>
  <script src="Js/diet.js?v=26"></script>
</body>
</html>
