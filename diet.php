<?php require "require_auth.php"; ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Diet Planner - Ironix</title>
  <link rel="stylesheet" href="Css/style.css?v=12">
</head>
<body>
  <header>
    <?php render_nav("diet"); ?>
  </header>

  <?php include "diet_content.php"; ?>

  <script src="Js/diet.js?v=12"></script>
</body>
</html>
