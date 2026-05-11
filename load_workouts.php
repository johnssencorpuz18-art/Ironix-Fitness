<?php

session_start();
header("Content-Type: application/json");

if (!isset($_SESSION["user_id"])) {
    http_response_code(401);
    echo json_encode([]);
    exit;
}

require "db.php";

$userId = (int)$_SESSION["user_id"];
$stmt = $conn->prepare("
    SELECT id, workout_name, set_counts, rep_count, weight_kg, duration_minutes, calories_burned, created_at
    FROM workout
    WHERE user_id = ?
    ORDER BY id DESC
");
$stmt->bind_param("i", $userId);
$stmt->execute();
$result = $stmt->get_result();

$data = [];

while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);

$stmt->close();
$conn->close();

?>
