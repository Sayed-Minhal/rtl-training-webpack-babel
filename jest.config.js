// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const {defaults} = require('jest-config');

const config = {
    verbose: true,
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'js', 'ts', 'jsx', 'tsx'],
    collectCoverage: true,
    collectCoverageFrom: [
        "./src/**/*.{js,jsx}",
        "!./src/**/index.js",
        "!**/node_modules/**",
        "!**/vendor/**"
      ],
    coverageReporters: ["clover", "json", "lcov", "text", 'text-summary'],
    coverageThreshold: {
        "global": {
          "branches": 80,
          "functions": 80,
          "lines": 80,
          "statements": 80
        }
      },
    globals: {
        "__DEV__": true
    },
    modulePathIgnorePatterns:["<rootDir>/coverage/"],
    modulePaths:["<rootDir>/src/**/"],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|less)$": "identity-obj-proxy"
    },
    resetMocks: true,
    setupFilesAfterEnv: ['<rootDir>/setup-jest.js'],
    testEnvironment : 'jest-environment-jsdom',
    testTimeout:10000,
    transform: {
        "\\.[jt]sx?$": "babel-jest",
        ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform"
    }
  };
  
  module.exports = config;