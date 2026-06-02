<?php

require "require_auth.php";
require "db.php";
require "profile_schema.php";
require "profile_avatars.php";

function null_if_empty(string $value): ?string
{
    $value = trim($value);
    return $value === "" ? null : $value;
}

function normalize_date(?string $value): ?string
{
    $value = trim((string)$value);
    if ($value === "") {
        return null;
    }

    $date = DateTime::createFromFormat("Y-m-d", $value);
    return $date && $date->format("Y-m-d") === $value ? $value : null;
}

function pounds_to_kg(?string $value): ?float
{
    $value = trim((string)$value);
    if ($value === "") {
        return null;
    }
    return round(((float)$value) / 2.20462, 2);
}

function save_uploaded_avatar(int $userId): ?string
{
    if (empty($_FILES["avatar_upload"]) || $_FILES["avatar_upload"]["error"] === UPLOAD_ERR_NO_FILE) {
        return null;
    }

    if ($_FILES["avatar_upload"]["error"] !== UPLOAD_ERR_OK) {
        http_response_code(400);
        echo "Avatar upload failed. Try a smaller image.";
        exit;
    }

    if ($_FILES["avatar_upload"]["size"] > 3 * 1024 * 1024) {
        http_response_code(400);
        echo "Avatar upload must be 3 MB or smaller.";
        exit;
    }

    $tmpPath = $_FILES["avatar_upload"]["tmp_name"];
    $finfo = new finfo(FILEINFO_MIME_TYPE);
    $mime = $finfo->file($tmpPath);
    $allowed = [
        "image/jpeg" => "jpg",
        "image/png" => "png",
        "image/webp" => "webp",
        "image/gif" => "gif",
    ];

    if (!isset($allowed[$mime])) {
        http_response_code(400);
        echo "Avatar must be a JPG, PNG, WebP, or GIF image.";
        exit;
    }

    $directory = __DIR__ . DIRECTORY_SEPARATOR . "uploads" . DIRECTORY_SEPARATOR . "avatars";
    if (!is_dir($directory)) {
        mkdir($directory, 0755, true);
    }

    $filename = "user-" . $userId . "-" . bin2hex(random_bytes(8)) . "." . $allowed[$mime];
    $target = $directory . DIRECTORY_SEPARATOR . $filename;

    if (!move_uploaded_file($tmpPath, $target)) {
        http_response_code(500);
        echo "Could not save avatar upload.";
        exit;
    }

    return "uploads/avatars/" . $filename;
}

$userId = current_user_id();
ensure_profile_columns($conn);

$name = trim($_POST["name"] ?? "");
$bio = trim($_POST["bio"] ?? "");
$age = ($_POST["age"] ?? "") === "" ? null : (int)$_POST["age"];
$height = ($_POST["height_cm"] ?? "") === "" ? null : (float)$_POST["height_cm"];
$weight = array_key_exists("weight_lb", $_POST) ? pounds_to_kg($_POST["weight_lb"]) : (($_POST["weight_kg"] ?? "") === "" ? null : (float)$_POST["weight_kg"]);
$targetWeight = pounds_to_kg($_POST["target_weight_lb"] ?? "");
$bodyGoal = null_if_empty($_POST["body_goal"] ?? "");
$goal = trim($_POST["fitness_goal"] ?? "");
$birthday = normalize_date($_POST["birthday"] ?? null);
$contact = null_if_empty($_POST["contact_number"] ?? "");
$location = null_if_empty($_POST["location"] ?? "");
$gender = null_if_empty($_POST["gender"] ?? "");
$activityLevel = null_if_empty($_POST["activity_level"] ?? "");

$avatarChoice = trim($_POST["avatar_choice"] ?? "");
$customAvatar = trim($_POST["avatar_url"] ?? "");
$avatar = in_array($avatarChoice, default_profile_avatar_paths(), true) ? $avatarChoice : $customAvatar;
$uploadedAvatar = save_uploaded_avatar($userId);
if ($uploadedAvatar !== null) {
    $avatar = $uploadedAvatar;
}

if ($name === "") {
    http_response_code(400);
    echo "Name is required";
    exit;
}

$stmt = $conn->prepare("
    UPDATE users
    SET name = ?, bio = ?, age = ?, height_cm = ?, weight_kg = ?, fitness_goal = ?, avatar_url = ?,
        birthday = ?, contact_number = ?, location = ?, gender = ?, activity_level = ?,
        body_goal = ?, target_weight_kg = ?
    WHERE id = ?
");
$stmt->bind_param(
    "ssiddssssssssdi",
    $name,
    $bio,
    $age,
    $height,
    $weight,
    $goal,
    $avatar,
    $birthday,
    $contact,
    $location,
    $gender,
    $activityLevel,
    $bodyGoal,
    $targetWeight,
    $userId
);

if ($stmt->execute()) {
    $_SESSION["user_name"] = $name;
    header("Location: profile.php?saved=1");
} else {
    http_response_code(500);
    echo "Profile update failed";
}

$stmt->close();
$conn->close();

?>
