<?php

function ensure_profile_columns(mysqli $conn): void
{
    $columns = [
        "birthday" => "DATE DEFAULT NULL",
        "contact_number" => "VARCHAR(40) DEFAULT NULL",
        "location" => "VARCHAR(120) DEFAULT NULL",
        "gender" => "VARCHAR(40) DEFAULT NULL",
        "activity_level" => "VARCHAR(80) DEFAULT NULL",
    ];

    foreach ($columns as $column => $definition) {
        $check = $conn->query("SHOW COLUMNS FROM users LIKE '" . $conn->real_escape_string($column) . "'");
        if ($check && $check->num_rows === 0) {
            $conn->query("ALTER TABLE users ADD COLUMN `$column` $definition");
        }
        if ($check) {
            $check->close();
        }
    }
}

?>
