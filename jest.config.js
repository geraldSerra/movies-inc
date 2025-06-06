module.exports = {
  preset: "jest-expo",
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native" +
      "|@react-native" +
      "|@react-native-community" +
      "|expo(nent)?" +
      "|@expo(nent)?" +
      "|react-navigation" +
      "|@unimodules" +
      "|expo-modules-core" +
      "|@react-native-js-polyfills" +
      "|lodash" +
      "|node_modules" +
      "|jest-expo" +
      ")",
  ],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
