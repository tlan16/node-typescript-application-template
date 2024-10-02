/**
 * @type {import("lint-staged").Config}
 */
const config = {
  "*.ts": "eslint --fix",
  "*.js": "eslint --fix",
  "*.md": "pnpm dlx prettier --parser markdown --write",
  "*.sh": "pnpm dlx shellcheck",
  "*.yaml": "pipx run yamllint",
  "*.yml": "pipx run yamllint",
  ".husky/pre-commit": "pnpm dlx shellcheck",
};

export default config;
