<?php

function default_profile_avatars(): array
{
    return [
        [
            "label" => "Iron Classic",
            "path" => "Assets/avatars/ironix-default.svg",
        ],
        [
            "label" => "Power",
            "path" => "Assets/avatars/ironix-power.svg",
        ],
        [
            "label" => "Runner",
            "path" => "Assets/avatars/ironix-runner.svg",
        ],
        [
            "label" => "Focus",
            "path" => "Assets/avatars/ironix-focus.svg",
        ],
    ];
}

function default_profile_avatar_paths(): array
{
    return array_map(static fn($avatar) => $avatar["path"], default_profile_avatars());
}

?>
