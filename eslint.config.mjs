import js from '@eslint/js'
import unusedImports from 'eslint-plugin-unused-imports'
import stylisticTs from '@stylistic/eslint-plugin-ts'
import stylisticJs from '@stylistic/eslint-plugin-js'
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

/**
 * @type {import('eslint').Linter.FlatConfig}
 */
const globalIgnoreConfig = {
  ignores: [
    'examples/',
  ],
}

/**
 * @type {import('eslint').Linter.FlatConfig}
 */
const testFilesConfig = {
  files: ['**/*.spec.ts'],
  rules: {
    '@typescript-eslint/no-floating-promises': 'off',
  },
}

/**
 * @type {import('eslint').Linter.FlatConfig}
 */
const unusedImportConfig = {
  plugins: {
    'unused-imports': unusedImports,
  },
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        'vars': 'all',
        'varsIgnorePattern': '^_',
        'args': 'after-used',
        'argsIgnorePattern': '^_',
      },
    ],
  },
}

const typescriptConfigs = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/no-unsafe-return': 'off',
      "@typescript-eslint/consistent-type-imports": ["error", {
        fixStyle: 'inline-type-imports',
      }],
    },
  },
);

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
const stylingConfigs = [
  {
    plugins: {
      '@stylistic/js': stylisticJs,
      '@stylistic/ts': stylisticTs,
    },
    rules: {
      '@stylistic/js/no-trailing-spaces': ['error'],
      '@stylistic/js/no-multiple-empty-lines': ['error', { 'max': 2, 'maxEOF': 0 }],
      '@stylistic/ts/object-curly-spacing': ['error', 'always'],
      '@stylistic/ts/block-spacing': 'error',
      '@stylistic/ts/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/ts/indent': ['error', 2],
    },
  },
]

export default [
  globalIgnoreConfig,
  js.configs.recommended,
  unusedImportConfig,
  ...typescriptConfigs,
  ...stylingConfigs,
  testFilesConfig,
]
