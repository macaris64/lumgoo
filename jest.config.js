const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/stores/(.*)$': '<rootDir>/src/stores/$1',
    '^@/types/(.*)$': '<rootDir>/src/types/$1',
    '^@/utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@/constants/(.*)$': '<rootDir>/src/constants/$1',
    '^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
    // Mock CSS and style files
    '\\.css$': 'identity-obj-proxy',
    '\\.scss$': 'identity-obj-proxy',
    '\\.module\\.css$': 'identity-obj-proxy',
    // Mock Swiper CSS specifically
    'swiper/css': 'identity-obj-proxy',
    'swiper/css/navigation': 'identity-obj-proxy',
    'swiper/css/pagination': 'identity-obj-proxy',
    'swiper/css/autoplay': 'identity-obj-proxy',
    'swiper/swiper.css': 'identity-obj-proxy',
  },
  testEnvironment: 'jest-environment-jsdom',
  transformIgnorePatterns: [
    'node_modules/(?!(swiper|ssr-window|dom7)/)',
  ],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/app/layout.tsx',
    '!src/app/not-found.tsx',
  ],
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 75,
      lines: 75,
      statements: 75,
    },
  },
  coverageReporters: [
    'text',
    'lcov',
    'html',
    'json-summary',
  ],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig) 