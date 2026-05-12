<?php

$configPath = __DIR__ . "/db_config.php";
$config = file_exists($configPath)
    ? require $configPath
    : [
        "host" => "localhost",
        "user" => "root",
        "password" => "",
        "dbname" => "ironix_db"
    ];

$conn = new mysqli(
    $config["host"],
    $config["user"],
    $config["password"],
    $config["dbname"]
);

if ($conn->connect_error) {
    http_response_code(500);
    echo "Database connection failed";
    exit;
}

?>
