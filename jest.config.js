module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  roots: ['<rootDir>/src/', '<rootDir>/tests/'],
  collectCoverage: true,
  collectCoverageFrom: [
    '!src/**/*.spec.js',
    '!src/vendor/*.js',
    '!src/main.js',
    'src/**/*.{js,vue}',
  ],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'text-summary'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/node_modules/',
    '<rootDir>/.history/',
  ],
  transformIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/node_modules/',
    '<rootDir>/.history/',
  ],
};
