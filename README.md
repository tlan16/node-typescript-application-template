## Overview
This is a typescript seed project.

## Tech stack
1. typescript
1. mocha with chai
1. packages managed by pnpm
1. prettier
1. editor config
1. eslint
1. docker and docker compose

## Features
1. Tests can be performed via docker.

## Local Development
1. install nvm or use specified node version described in [.nvmrc](.nvmrc).
1. install package manager `pnpm` globally by `npm install --global pnpm`
1. install node dependencies by `pnpm install`.
1. run `pnpm run start`.

## Cloud runtime environment
Please refer to [Dockerfile](docker/Dockerfile).

## Integration
### Webstorm
#### eslint
To get eslint working, make sure yarn is selected as package manager.
![Webstorm settings node package manager](doc/webstorm_settings_node_package_manager.PNG)
