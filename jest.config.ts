import type { JestConfigWithTsJest } from 'ts-jest'
import { defaultsESM as tsjPreset } from 'ts-jest/presets'

const config: JestConfigWithTsJest = {
    preset: 'ts-jest/presets/default-esm',
    verbose: true,
    testEnvironment: 'node',
    /**
     * @see https://kulshekhar.github.io/ts-jest/docs/guides/esm-support#support-mts-extension
     */
    resolver: '<rootDir>/mjs-resolver.ts',
    extensionsToTreatAsEsm: ['.ts', '.mts'],
    moduleFileExtensions: ['js', 'ts', 'mts'],
    coverageProvider: 'v8',
    collectCoverageFrom: ['src/**/*.{mts,ts}'],
    coveragePathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/src/main.mts'],
    transform: {
        ...tsjPreset.transform,
        // process esm files with `ts-jest`
        '^.+\\.m?[tj]sx?$': [
            'ts-jest',
            {
                useESM: true,
            },
        ],
    },
    testMatch: ['<rootDir>/src/**/*.spec.{mts,ts}'],
}

export default config
