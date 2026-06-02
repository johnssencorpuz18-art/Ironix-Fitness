<?php

function ensure_meal_plan_table(mysqli $conn): void
{
    $conn->query("
        CREATE TABLE IF NOT EXISTS meal_plans (
            user_id INT NOT NULL PRIMARY KEY,
            plan_json LONGTEXT NOT NULL,
            done_json LONGTEXT NOT NULL,
            updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci
    ");
}

?>
