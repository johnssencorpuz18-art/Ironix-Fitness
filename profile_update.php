<?php

require "require_auth.php";
require "db.php";

$userId = current_user_id();
$name = trim($_POST["name"] ?? "");
$bio = trim($_POST["bio"] ?? "");
$age = $_POST["age"] === "" ? null : (int)$_POST["age"];
$height = $_POST["height_cm"] === "" ? null : (float)$_POST["height_cm"];
$weight = $_POST["weight_kg"] === "" ? null : (float)$_POST["weight_kg"];
$goal = trim($_POST["fitness_goal"] ?? "");
$avatar = trim($_POST["avatar_url"] ?? "");

if ($name === "") {
    http_response_code(400);
    echo "Name is required";
    exit;
}

$stmt = $conn->prepare("
    UPDATE users
    SET name = ?, bio = ?, age = ?, height_cm = ?, weight_kg = ?, fitness_goal = ?, avatar_url = ?
    WHERE id = ?
");
$stmt->bind_param("ssidsssi", $name, $bio, $age, $height, $weight, $goal, $avatar, $userId);

if ($stmt->execute()) {
    $_SESSION["user_name"] = $name;
    header("Location: profile.php?saved=1");
} else {
    http_response_code(500);
    echo "Profile update failed";
}

$stmt->close();
$conn->close();

?>
