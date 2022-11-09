module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    "@babel/plugin-proposal-export-namespace-from",
    [
      "module-resolver",
      {
        alias: {
          components: "./src/components",
          buttons: "./src/components/buttons",
          src: "./src",
        },
      },
    ],
    "react-native-reanimated/plugin",
  ],
};
