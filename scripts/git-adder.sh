#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)
PROJECT_DIR="$SCRIPT_DIR/.."
cd "$PROJECT_DIR" || exit 1

# Set the maximum size in bytes
max_size=40000000 # 40 MB

# Initialize the total size to 0
total_size=0

function get_File_file_bytes() {
  local file
  file="$1"
  stat --printf="%s" "$file"
}

# reset to last remote commit
git reset --quiet "origin/$(git rev-parse --abbrev-ref HEAD)"

counter=0
# shellcheck disable=SC2044
for file in *.* **/*; do
  if [[ "$file" == *"URLs.txt" ]] || [ ! -f "$file" ]; then
    continue
  fi
  file_size=$(get_File_file_bytes "$file")

  if [ $total_size -gt $max_size ] || [ $counter -gt 100 ] ; then
    git commit --message "$total_size"
    git push --force-with-lease
    total_size=0
    counter=0
    continue
  fi

  if ! git ls-files --error-unmatch "$file" &>/dev/null; then
    git add "$file"
    echo "Added $file"
    total_size=$((total_size + file_size))
    counter=$((counter + 1))
  fi
done

git add .
if [ "$(git status --porcelain)" ]; then
  git commit --message "$total_size"
  git push --force-with-lease
fi
