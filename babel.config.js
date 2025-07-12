module.exports = {
  presets: ["babel-preset-expo"],
  plugins: [
    ["expo-router/babel"],
    [
      "module-resolver",
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        alias: { "@/": "./src" },
      },
    ],
    "react-native-reanimated/plugin",
  ],
};
