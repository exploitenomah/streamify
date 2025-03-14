
// export default {
//   testEnvironment: "jsdom",
//   setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
//   moduleNameMapper: {
//     "^@/(.*)$": "<rootDir>/src/$1", // Alias for imports
//   },
//   transform: {
//     "^.+\\.tsx?$": "ts-jest",
//   },
// }
export default {
  testEnvironment: "jsdom", // Ensure this line is present
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"], // Optional if you have global test setup
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
}
