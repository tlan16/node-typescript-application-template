## Overview
This is a typescript seed project.

## Tech stack
1. typescript with full esm support
2. testing with jest
3. packages managed by yarn v3 with zero-install
4. prettier
5. editor config
6. eslint
7. docker and docker compose

## Features
1. Tests can be performed inside docker, so it doesn't rely on CI base image.

## Local Development
1. install nvm or use specified node version described in [package.json](/package.json).
2. use package manager `yarn` to install node dependencies.
3. run `yarn start`.

## Cloud runtime environment
Please refer to [Dockerfile](/docker/Dockerfile).
