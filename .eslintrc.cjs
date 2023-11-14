/* eslint-env node */

/**
 * @type {import('@types/eslint').Linter.Config}
 */
const baseConfig =  {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
}

/**
 * @type {import('@types/eslint').Linter.Config}
 */
const config = {
  ...baseConfig,
  root: true,
};

module.exports = config;
