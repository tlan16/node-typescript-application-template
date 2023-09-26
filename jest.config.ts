import type { Config } from 'jest';

const jestConfig: Config = {
  coverageProvider: 'v8',
  setupFiles: ['dotenv/config'],
  testMatch: ['src/**/__tests__/**/*.spec.mjs'],
  restoreMocks: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
};

export default jestConfig;
