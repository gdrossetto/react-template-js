/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: [
        "<rootDir>/src/setupTests.ts"
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    }


};