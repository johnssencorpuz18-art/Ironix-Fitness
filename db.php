<?php

require_once "local_only.php";

mysqli_report(MYSQLI_REPORT_OFF);

$configPath = __DIR__ . "/db_config.php";
$config = file_exists($configPath)
    ? require $configPath
    : [
        "host" => "localhost",
        "user" => "root",
        "password" => "",
        "dbname" => "ironix_db"
    ];

function connect_db($config) {
    return @new mysqli(
        $config["host"],
        $config["user"],
        $config["password"],
        $config["dbname"]
    );
}

$conn = connect_db($config);

if ($conn->connect_error && ($config["host"] ?? "") !== "localhost") {
    $localConfig = [
        "host" => "localhost",
        "user" => "root",
        "password" => "",
        "dbname" => "ironix_db"
    ];
    $conn = connect_db($localConfig);
}

if ($conn->connect_error) {
    http_response_code(500);
    $script = basename($_SERVER["SCRIPT_NAME"] ?? "");
    $expectsJson = strpos($_SERVER["HTTP_ACCEPT"] ?? "", "application/json") !== false || $script === "load_workouts.php";
    $isApi = in_array($script, [
        "delete_workout.php",
        "login.php",
        "profile_update.php",
        "register.php",
        "save_workout.php"
    ], true);

    if ($expectsJson) {
        header("Content-Type: application/json");
        echo json_encode(["error" => "Database connection failed. Check db_config.php and import database.sql."]);
    } elseif ($isApi) {
        echo "Database connection failed. Check db_config.php and import database.sql.";
    } else {
        echo '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>IRONIX Setup Needed</title><link rel="stylesheet" href="Css/style.css?v=28"></head><body><main class="locked-page"><section class="locked-panel"><span class="eyebrow">Setup Needed</span><h2>Database connection failed.</h2><p>Start MySQL in XAMPP, import database.sql, and confirm db_config.php points to the correct database.</p><a class="button-link" href="index.php">Back Home</a></section></main></body></html>';
    }

    exit;
}

?>
