<?php

require "require_auth.php";
require "db.php";
require "meal_plan_schema.php";

ensure_meal_plan_table($conn);

$userId = current_user_id();
$stmt = $conn->prepare("SELECT plan_json, done_json FROM meal_plans WHERE user_id = ?");
$stmt->bind_param("i", $userId);
$stmt->execute();
$row = $stmt->get_result()->fetch_assoc();
$stmt->close();

header("Content-Type: application/json");
echo json_encode([
    "ok" => true,
    "plan" => $row ? json_decode($row["plan_json"], true) : new stdClass(),
    "done" => $row ? json_decode($row["done_json"], true) : new stdClass(),
]);

$conn->close();

?>
