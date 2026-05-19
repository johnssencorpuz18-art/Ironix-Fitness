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

$profileStmt = $conn->prepare("SELECT weight_kg FROM users WHERE id = ?");
$profileStmt->bind_param("i", $userId);
$profileStmt->execute();
$profile = $profileStmt->get_result()->fetch_assoc();
$profileStmt->close();

$bodyWeightKg = (float)($profile["weight_kg"] ?? 0);
if ($bodyWeightKg <= 0) {
    $bodyWeightKg = 70.0;
}

$totalReps = $sets * $reps;
$relativeLoad = $bodyWeightKg > 0 ? $weight / $bodyWeightKg : 0;
$workDensity = $duration > 0 ? $totalReps / $duration : 0;
$met = 3.5;

if ($relativeLoad >= 0.75 || $workDensity >= 5) {
    $met = 6.0;
} elseif ($relativeLoad >= 0.4 || $workDensity >= 3) {
    $met = 4.5;
}

// Active-calorie estimate: MET method minus resting burn, using total minutes including rest.
$calories = (($met - 1) * 3.5 * $bodyWeightKg / 200) * $duration;
$calories = max(1, round($calories, 1));

$sql = "
    INSERT INTO workout
        (user_id, workout_name, set_counts, rep_count, weight_kg, duration_minutes, calories_burned)
    VALUES
        (?, ?, ?, ?, ?, ?, ?)
";

$stmt = $conn->prepare($sql);
$stmt->bind_param("isiidid", $userId, $workout, $sets, $reps, $weight, $duration, $calories);

if ($stmt->execute()) {
    echo "Workout saved. Estimated active calories: " . round($calories);
} else {
    http_response_code(500);
    echo "Save failed";
}

$stmt->close();
$conn->close();

?>
