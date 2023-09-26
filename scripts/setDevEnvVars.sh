#!/usr/bin/env bash

RED='\033[0;31m'
NC='\033[0m'

options=''
options="${options} --loader ts-node/esm"
options="${options} --no-warnings"
options="${options} --experimental-specifier-resolution=node"

export NODE_OPTIONS="${options}"
echo "[INFO] NODE_OPTIONS=${NODE_OPTIONS}"

tsNodeProject="$(realpath "tsconfig.dev.json")"
export TS_NODE_PROJECT="${tsNodeProject}"
echo "[INFO] TS_NODE_PROJECT=${TS_NODE_PROJECT}"
