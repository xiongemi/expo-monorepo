import { Platform } from "react-native";

export const BANNER_AD_UNIT_ID = Platform.select({
  ios: process.env.EXPO_PUBLIC_AD_UNIT_ID_IOS,
  android: process.env.EXPO_PUBLIC_AD_UNIT_ID_ANDROID,
  default: "ca-app-pub-3940256099942544/6300978111", // Test ID
});

export const BANNER_AD_UNIT_IDS = {
  top: {
    ios: process.env.EXPO_PUBLIC_AD_UNIT_ID_IOS,
    android: process.env.EXPO_PUBLIC_AD_UNIT_ID_ANDROID,
  },
  bottom: {
    ios: process.env.EXPO_PUBLIC_AD_UNIT_ID_IOS,
    android: process.env.EXPO_PUBLIC_AD_UNIT_ID_ANDROID,
  },
};
