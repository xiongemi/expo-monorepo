module.exports = {
  expo: {
    name: "Main App",
    slug: "main-app",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "spain",
    userInterfaceStyle: "automatic",
    githubUrl: "https://github.com/xiongemi/tcf",
    ios: {
      supportsTablet: true,
      bundleIdentifier: "xiong.emily.spain",
      infoPlist: {
        ITSAppUsesNonExemptEncryption: false,
      },
    },
    android: {
      icon: "./assets/images/icon.png",
      predictiveBackGestureEnabled: false,
      package: "xiong.emily.spain",
    },
    description: "Comprehensive CCSE Quiz platform.",
    web: {
      output: "static",
      favicon: "./assets/images/favicon.png",
      bundler: "metro",
      backgroundColor: "#ffffff",
      themeColor: "#4F6EF7",
    },
    plugins: [
      [
        "expo-router",
        {
          origin: "https://spain.expo.app",
        },
      ],
      [
        "expo-splash-screen",
        {
          image: "./assets/images/icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
          dark: {
            backgroundColor: "#000000",
          },
        },
      ],
      [
        "react-native-google-mobile-ads",
        {
          androidAppId: process.env.EXPO_PUBLIC_AD_APP_ID_ANDROID || "",
          iosAppId: process.env.EXPO_PUBLIC_AD_APP_ID_IOS || "",
        },
      ],
      "expo-font",
      "expo-image",
      "expo-web-browser",
      [
        "@sentry/react-native/expo",
        {
          url: "https://sentry.io/",
          project: "spain",
          organization: "emily-xiong"
        },
      ],
      "expo-localization",
      "@sentry/react-native",
    ],
    experiments: {
      typedRoutes: true,
      reactCompiler: true,
    },
    extra: {
      router: {
        origin: "https://spain.expo.app",
      },
      eas: {
        projectId: "4ae98ede-2647-4659-8c91-2ea0de364985",
      },
    },
    owner: "exiong",
  },
};
