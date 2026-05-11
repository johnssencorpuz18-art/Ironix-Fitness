<?php

session_start();
require "db.php";

$name = trim($_POST["name"] ?? "");
$email = trim($_POST["email"] ?? "");
$password = $_POST["password"] ?? "";

if ($name === "" || $email === "" || $password === "") {
    http_response_code(400);
    echo "Please complete all registration fields";
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo "Please enter a valid email";
    exit;
}

if (strlen($password) < 6) {
    http_response_code(400);
    echo "Password must be at least 6 characters";
    exit;
}

$passwordHash = password_hash($password, PASSWORD_DEFAULT);
$stmt = $conn->prepare("INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $name, $email, $passwordHash);

if ($stmt->execute()) {
    $_SESSION["user_id"] = $stmt->insert_id;
    $_SESSION["user_name"] = $name;
    echo "Registration successful";
} else {
    http_response_code(409);
    echo "Email is already registered";
}

$stmt->close();
$conn->close();

?>
