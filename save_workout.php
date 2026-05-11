<?php

session_start();

if (!isset($_SESSION["user_id"])) {
    http_response_code(401);
    echo "Please login before saving workouts";
    exit;
}

require "db.php";

$userId = (int)$_SESSION["user_id"];
$workout = trim($_POST['workout'] ?? '');
$sets = (int)($_POST['sets'] ?? 0);
$reps = (int)($_POST['reps'] ?? 0);
$weight = (float)($_POST['weight'] ?? 0);
$duration = (int)($_POST['duration'] ?? 0);

if ($workout === '' || $sets <= 0 || $reps <= 0 || $weight < 0 || $duration <= 0) {
    http_response_code(400);
    echo "Please complete all workout fields";
    exit;
}

$calories = ($sets * $reps * $weight * 0.1) + ($duration * 5);

$sql = "
    INSERT INTO workout
        (user_id, workout_name, set_counts, rep_count, weight_kg, duration_minutes, calories_burned)
    VALUES
        (?, ?, ?, ?, ?, ?, ?)
";

$stmt = $conn->prepare($sql);
$stmt->bind_param("isiidid", $userId, $workout, $sets, $reps, $weight, $duration, $calories);

if ($stmt->execute()) {
    echo "Workout saved. Calories burned: " . round($calories);
} else {
    http_response_code(500);
    echo "Save failed";
}

$stmt->close();
$conn->close();

?>
