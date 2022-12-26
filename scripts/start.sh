#!/usr/bin/env bash

cd "$( dirname "${BASH_SOURCE[0]}" )/.." || exit 1

if [ ! -d "dist" ]; then
  echo "dist directory not found. Running yarn build..."
  yarn build
else
  echo "dist directory found. Using existing build."
fi

export NODE_OPTIONS="--experimental-specifier-resolution=node --no-warnings"
node dist/main.js "$@"
