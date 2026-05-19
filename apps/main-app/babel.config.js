module.exports = (api) => {
  const isWeb = api.caller((caller) => caller?.platform === "web");

  return {
    presets: [["babel-preset-expo"], "nativewind/babel"],

    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],

          alias: {
            "@": ["./", "../../libs/shared/src/"],
            "tailwind.config": "./tailwind.config.js",
          },
        },
      ],
      !isWeb && "react-native-worklets/plugin",
    ].filter(Boolean),
  };
};
