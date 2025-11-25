import 'ts-jest';

/** @type {import("jest").Config} **/
export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy',
        '\\.(gif|ttf|eot|svg|png)$': 'jest-transform-stub',
    },

    roots: ['./src/__tests__/components'],
    // Reporting stuff
    collectCoverage: true,
    collectCoverageFrom: ['<rootDir>/src/components/**/*.tsx'],
    coverageDirectory: '<rootDir>/reports/unit-test/coverage-report',

    reporters: [
        'default',
        [
            './node_modules/jest-html-reporter',
            {
                pageTitle: 'fishboxen.net unit test report',
                outputPath: '<rootDir>/reports/unit-test/jest-report.html',
                sort: 'titleasc',
                theme: 'darkTheme',
                includeFailureMsg: true,
                collapseSuitesByDefault: true,
                includeStackTrace: false,
                includeConsoleLog: false,
            },
        ],
    ],
};
