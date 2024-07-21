module.exports = (api) => {
  api.cache(true);
  return {
    plugins: [
      ["react-native-worklets-core/plugin", { processNestedWorklets: true }],
    ],
    presets: ["babel-preset-expo"],
  };
};
