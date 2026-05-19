<?php

function is_local_request() {
    if (PHP_SAPI === "cli") {
        return true;
    }

    $remote = $_SERVER["REMOTE_ADDR"] ?? "";
    $host = $_SERVER["HTTP_HOST"] ?? "";

    return in_array($remote, ["127.0.0.1", "::1"], true)
        || str_starts_with($host, "localhost")
        || str_starts_with($host, "127.0.0.1")
        || str_starts_with($host, "[::1]");
}

function enforce_local_only() {
    if (is_local_request()) {
        return;
    }

    http_response_code(403);
    $script = basename($_SERVER["SCRIPT_NAME"] ?? "");
    $isApi = in_array($script, [
        "delete_workout.php",
        "load_workouts.php",
        "login.php",
        "profile_update.php",
        "register.php",
        "save_workout.php"
    ], true);

    if ($isApi) {
        echo "Ironix local access only. Open the app from http://localhost/ironix/.";
    } else {
        echo '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Ironix Local Only</title><link rel="stylesheet" href="Css/style.css?v=41"></head><body><main class="locked-page"><section class="locked-panel"><span class="eyebrow">Local Access Only</span><h2>This Ironix app only runs on this computer.</h2><p>Open it from http://localhost/ironix/ on this machine. Network visitors are blocked.</p></section></main></body></html>';
    }

    exit;
}

enforce_local_only();

?>
