<?php

require_once "auth_helpers.php";

if (!isset($_SESSION["user_id"])) {
    header("Location: auth.php?required=1");
    exit;
}

?>
