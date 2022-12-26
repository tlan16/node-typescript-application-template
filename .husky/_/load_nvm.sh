#!/usr/bin/env sh

command_exists() {
    command -v "$1" >/dev/null 2>&1
}

load_nvm() {
    if [ -n "$NVM_DIR" ]; then
        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
        nvm install
        echo "nvm loaded"

        # Install yarn if not installed
        if ! command_exists yarn; then
            echo "yarn not found, installing yarn"
            npm install -g yarn
        fi
    fi
}
