# Node.js application template

It uses:

1. EcmaScript Modules (ESM)
2. Native file watcher for dev server. No need for nodemon.
3. Native .env file handler. No need for dotenv.
4. Native testing and assertions. No need for jest.
5. swc (written in Rust) as dev ts to js compiler for better performance.
6. pnpm and corepack for package management.
7. latest eslint with flat config.
8. Used eslint stylistic instead prettier.
9. ESM named export mocking with vitest. 

Sister project:

1. https://github.com/tlan16/node-typescript-library-template

Dev dependencies:

1. [pipx](https://pipx.pypa.io/stable/installation/)

Known Issues:

1. Dev dependency `@swc-node/register` is locked to version `1.9.1` due to esm related issues.
