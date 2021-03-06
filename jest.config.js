const path = require("path")

module.exports = {
  setupFilesAfterEnv: [
    path.resolve(__dirname, "./jest-configs/setup-test-env.js"),
  ],
  transform: {
    // "^.+\\.(tsx?|jsx?)$": "ts-jest",
    "\\.svg": "<rootDir>/jest-configs/__mocks__/svgTransform.js",
    "^.+\\.[tj]sx?$": `<rootDir>/jest-configs/jest-preprocess.js`,
  },
  moduleNameMapper: {
    // "\\.svg": `./jest-configs/__mocks__/file-mocks.js`,
    "\\.svg": `<rootDir>/jest-configs/__mocks__/svgTransform.js`,
    "typeface-*": "identity-obj-proxy",
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`, `\\.svg`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  moduleFileExtensions: ["ts", "tsx", "js"],
  collectCoverage: false,
  coverageReporters: ["lcov", "text", "html"],
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/loadershim.js`],
}
