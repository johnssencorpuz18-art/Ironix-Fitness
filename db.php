<?php

$host = "localhost";
$user = "root";
$password = "";
$dbname = "ironix_db";

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    http_response_code(500);
    echo "Database connection failed";
    exit;
}

?>
