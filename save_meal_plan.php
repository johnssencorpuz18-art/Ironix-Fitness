<?php

require "require_auth.php";
require "db.php";
require "meal_plan_schema.php";

ensure_meal_plan_table($conn);

$payload = json_decode(file_get_contents("php://input"), true);
if (!is_array($payload)) {
    http_response_code(400);
    echo "Invalid meal plan payload";
    exit;
}

$plan = $payload["plan"] ?? [];
$done = $payload["done"] ?? [];
if (!is_array($plan) || !is_array($done)) {
    http_response_code(400);
    echo "Invalid meal plan data";
    exit;
}

$userId = current_user_id();
$planJson = json_encode($plan);
$doneJson = json_encode($done);

$stmt = $conn->prepare("
    INSERT INTO meal_plans (user_id, plan_json, done_json)
    VALUES (?, ?, ?)
    ON DUPLICATE KEY UPDATE plan_json = VALUES(plan_json), done_json = VALUES(done_json)
");
$stmt->bind_param("iss", $userId, $planJson, $doneJson);

if ($stmt->execute()) {
    echo "Meal plan saved";
} else {
    http_response_code(500);
    echo "Meal plan save failed";
}

$stmt->close();
$conn->close();

?>
