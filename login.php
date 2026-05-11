<?php

session_start();
require "db.php";

$email = trim($_POST["email"] ?? "");
$password = $_POST["password"] ?? "";

if ($email === "" || $password === "") {
    http_response_code(400);
    echo "Please enter your email and password";
    exit;
}

$stmt = $conn->prepare("SELECT id, name, password_hash FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();
$user = $result->fetch_assoc();

if (!$user || !password_verify($password, $user["password_hash"])) {
    http_response_code(401);
    echo "Invalid email or password";
    exit;
}

$_SESSION["user_id"] = $user["id"];
$_SESSION["user_name"] = $user["name"];

echo "Login successful";

$stmt->close();
$conn->close();

?>
