#!/usr/bin/env bash

cd "$( dirname "${BASH_SOURCE[0]}" )/.." || exit 1

. scripts/setDevEnvVars.sh

echo "[INFO] Starting dev server..."
node --watch src/main.mts src/main.mts "$@"
