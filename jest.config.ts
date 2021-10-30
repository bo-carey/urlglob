import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    "<rootDir>/src/*.spec.ts",
  ],
};
export default config;