/**
 * @type {import("lint-staged").Config}
 */
const config = {
  "*.ts": "eslint --fix",
  "*.js": "eslint --fix",
  "*.md": "pnpm dlx prettier --parser markdown --write",
  "*.sh": "pnpm dlx shellcheck",
  ".husky/pre-commit": "pnpm dlx shellcheck",
};

export default config;
