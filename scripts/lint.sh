#!/usr/bin/env bash

cd "$( dirname "${BASH_SOURCE[0]}" )/.." || exit 1

. scripts/setDevEnvVars.sh

yarn eslint . --ext .js,.jsx,.ts,.tsx --cache --fix "$@"
