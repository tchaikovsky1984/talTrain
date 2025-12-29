import { createDefaultPreset } from "ts-jest";

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // Use the browser simulator

  // Handle CSS imports (prevents crashes)
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^react$": "<rootDir>/node_modules/react",
    "^react-dom$": "<rootDir>/node_modules/react-dom"
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  transform: {
    "^.+\\.tsx?$": ["ts-jest", {
      tsconfig: {
        jsx: "react-jsx",        // Fixes "Cannot use JSX"
        esModuleInterop: true,   // Fixes the warning about imports
      }
    }]
  }
};
