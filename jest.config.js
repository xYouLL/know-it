module.exports = {
    preset: 'jest-expo',
    transformIgnorePatterns: [
      "node_modules/(?!(jest-)?react-native|@react-native|expo(nent)?|@expo(nent)?|react-navigation|@react-navigation/.*)"
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js'],
  };
  