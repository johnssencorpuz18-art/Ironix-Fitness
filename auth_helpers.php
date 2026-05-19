<?php

require_once "local_only.php";

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

function is_logged_in() {
    return isset($_SESSION["user_id"]);
}

function current_user_id() {
    return (int)($_SESSION["user_id"] ?? 0);
}

function render_nav($active = "") {
    $member = is_logged_in();

    echo '<nav>';
    echo '<h1>IRONIX</h1>';
    echo '<ul>';
    echo '<li><a ' . ($active === "home" ? 'class="active"' : '') . ' href="index.php">Home</a></li>';

    if ($member) {
        echo '<li><a ' . ($active === "progress" ? 'class="active"' : '') . ' href="dashboard.php">Dashboard</a></li>';
        echo '<li><a ' . ($active === "workouts" ? 'class="active"' : '') . ' href="workouts.php">Plan</a></li>';
        echo '<li><a ' . ($active === "diet" ? 'class="active"' : '') . ' href="diet.php">Diet</a></li>';
        echo '<li><a ' . ($active === "bmi" ? 'class="active"' : '') . ' href="bmi.php">BMI</a></li>';
        echo '<li><a ' . ($active === "community" ? 'class="active"' : '') . ' href="community.php">Community</a></li>';
        echo '<li><a ' . ($active === "leaderboard" ? 'class="active"' : '') . ' href="leaderboard.php">Leaders</a></li>';
        echo '<li><a ' . ($active === "profile" ? 'class="active"' : '') . ' href="profile.php">Profile</a></li>';
        echo '<li><a href="logout.php">Logout</a></li>';
    } else {
        echo '<li><a ' . ($active === "workouts" ? 'class="active"' : '') . ' href="workouts.php">Workouts</a></li>';
        echo '<li><a ' . ($active === "bmi" ? 'class="active"' : '') . ' href="bmi.php">BMI</a></li>';
        echo '<li><a ' . ($active === "diet" ? 'class="active"' : '') . ' href="diet.php">Diet</a></li>';
        echo '<li><a ' . ($active === "login" ? 'class="active"' : '') . ' href="auth.php">Login</a></li>';
        echo '<li><a class="signup-tab" href="auth.php#signup">Sign Up</a></li>';
    }

    echo '</ul>';
    echo '</nav>';
}

?>
