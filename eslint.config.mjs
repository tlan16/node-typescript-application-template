import js from '@eslint/js'
import tslint from 'typescript-eslint'
import unusedImports from 'eslint-plugin-unused-imports'
import stylisticTs from '@stylistic/eslint-plugin-ts'
import stylisticJs from '@stylistic/eslint-plugin-js'

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

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
const typescriptConfigs = [
  ...tslint.configs.strictTypeChecked.map((config) => ({
    files: ['**/*.ts'],
    ...config,
  })),
  ...tslint.configs.stylisticTypeChecked.map((config) => ({
    files: ['**/*.ts'],
    ...config,
  })),
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    plugins: {
      '@stylistic/js': stylisticJs,
      '@stylistic/ts': stylisticTs,
    },
    rules: {
      '@stylistic/js/no-trailing-spaces': ["error", { "skipBlankLines": true }],
      '@stylistic/js/no-multiple-empty-lines': ["error", { "max": 2, "maxEOF": 0 }],
      '@stylistic/ts/object-curly-spacing': ["error", "always"],
      '@typescript-eslint/no-unsafe-return': 'off',
      '@stylistic/ts/block-spacing': 'error',
      '@stylistic/ts/comma-dangle': ["error", "always-multiline"],
      '@stylistic/ts/indent': ['error', 2],
    },
  },
]

export default [
  globalIgnoreConfig,
  js.configs.recommended,
  unusedImportConfig,
  ...typescriptConfigs,
  testFilesConfig,
]
