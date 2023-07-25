#!/usr/bin/env bash

cd "$( dirname "${BASH_SOURCE[0]}" )/.." || exit 1

yarn build
export NODE_OPTIONS="--experimental-specifier-resolution=node --no-warnings"
node dist/main.js "$@"
