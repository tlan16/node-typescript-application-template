## Overview
This is a typescript seed project.

## Tech stack
1. Node v20
2. typescript v5 with full esm support
3. testing with jest
4. packages managed by yarn v3 with zero-install
5. prettier
6. editor config
7. eslint
8. docker and docker compose v2

## Features
1. Tests can be performed inside docker, so it doesn't rely on CI base image.

## Local Development
1. install nvm or use specified node version described in [package.json](/package.json).
2. use package manager `yarn` to install node dependencies.
3. run `yarn start`.

## Cloud runtime environment
Please refer to [Dockerfile](/docker/Dockerfile).
