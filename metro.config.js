const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

/**
 * Metro configuration
 * https://metrobundler.dev/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    // This makes it possible to import .glb files in your code:
    assetExts: [...(defaultConfig.resolver?.assetExts || []), "glb"],
  },
};

module.exports = mergeConfig(defaultConfig, config);
