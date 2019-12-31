module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  roots: ['<rootDir>/src/', '<rootDir>/tests/'],
  bail: true,
  coverage: true,
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  coverageDirectory: 'coverage/commit',
  coverageReporters: ['html', 'text-summary'],
  findRelatedTests: true,
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
