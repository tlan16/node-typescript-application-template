import type { Config } from 'jest';

const jestConfig: Config = {
  coverageProvider: 'v8',
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
};

export default jestConfig;
