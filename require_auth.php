<?php

require_once "auth_helpers.php";

if (!isset($_SESSION["user_id"])) {
    header("Location: login.html?required=1");
    exit;
}

?>
