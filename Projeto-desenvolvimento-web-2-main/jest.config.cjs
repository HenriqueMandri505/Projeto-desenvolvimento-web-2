module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.cjs"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.cjs"
  },
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  testPathIgnorePatterns: ["<rootDir>/node_modules/"]
};