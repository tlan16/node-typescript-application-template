#!/usr/bin/env sh

command_exists() {
    command -v "$1" >/dev/null 2>&1
}

load_nvm() {
    if ! command_exists n; then
        n auto
    fi
}
