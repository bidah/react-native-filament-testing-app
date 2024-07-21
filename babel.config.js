module.exports = (api) => {
  api.cache(true);
  return {
    plugins: [
      ["react-native-worklets-core/plugin", { processNestedWorklets: true }],
      "react-native-reanimated/plugin",
    ],
    presets: ["babel-preset-expo"],
  };
};
