module.exports = (api) => {
  api.cache(true);
  return {
    plugins: [
      "react-native-reanimated/plugin",
      ["react-native-worklets-core/plugin", { processNestedWorklets: true }],
    ],
    presets: ["babel-preset-expo"],
  };
};
