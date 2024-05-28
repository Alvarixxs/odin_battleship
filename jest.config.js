/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: "coverage",
  testEnvironment: "node", // Use 'node' if you're testing Node.js code, 'jsdom' for browser environment
  roots: ["<rootDir>/src"], // Specify the root directory for your tests
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
};

module.exports = config;
