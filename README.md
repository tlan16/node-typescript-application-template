# Node.js application template

It uses:

1. EcmaScript Modules (ESM)
2. Uses [tsx](https://github.com/privatenumber/tsx) as typescript executor for dev environment.
3. pnpm and corepack for package management.
4. latest eslint with flat config.
5. Used eslint stylistic instead prettier.
6. ESM named export mocking with vitest.
7. Dockerized CI steps that build CI docker image once and use for all following CI steps

Sister project:

1. https://github.com/tlan16/node-typescript-library-template

Dev dependencies:

1. [pipx](https://pipx.pypa.io/stable/installation/)

Known Issues:

1. Dev dependency `@swc-node/register` is locked to version `1.9.1` due to esm related issues.
