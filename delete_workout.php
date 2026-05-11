<?php

session_start();

if (!isset($_SESSION["user_id"])) {
    http_response_code(401);
    echo "Please login before deleting workouts";
    exit;
}

require "db.php";

$userId = (int)$_SESSION["user_id"];
$id = (int)($_POST['id'] ?? 0);

if ($id <= 0) {
    http_response_code(400);
    echo "Invalid workout";
    exit;
}

$stmt = $conn->prepare("DELETE FROM workout WHERE id = ? AND user_id = ?");
$stmt->bind_param("ii", $id, $userId);

if ($stmt->execute()) {
    echo "Workout deleted";
} else {
    http_response_code(500);
    echo "Delete failed";
}

$stmt->close();
$conn->close();

?>
