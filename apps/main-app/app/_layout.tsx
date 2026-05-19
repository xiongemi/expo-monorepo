import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { PostHogProvider } from "posthog-react-native";
import { useEffect } from "react";
import "react-native-reanimated";

import { GluestackUIProvider, useThemeStore } from "@workspace/shared";
import "@/global.css";
import * as Sentry from "@sentry/react-native";

// Sentry should be initialized from .env
Sentry.init({
  dsn: process.env.EXPO_PUBLIC_SENTRY_DSN,
  sendDefaultPii: true,
  enableLogs: true,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1,
  integrations: [Sentry.mobileReplayIntegration(), Sentry.feedbackIntegration()],
});

function RootLayoutNav() {
  const mode = useThemeStore((state) => state.mode);
  const isDark = mode === "dark"; // Simple logic for demo

  return (
    <GluestackUIProvider>
      <ThemeProvider value={isDark ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
        </Stack>
        <StatusBar style={isDark ? "light" : "dark"} />
      </ThemeProvider>
    </GluestackUIProvider>
  );
}

export default Sentry.wrap(function RootLayout() {
  return (
    <PostHogProvider
      apiKey={process.env.EXPO_PUBLIC_POSTHOG_API_KEY}
      options={{
        host: process.env.EXPO_PUBLIC_POSTHOG_HOST,
        enableSessionReplay: true,
      }}
    >
      <RootLayoutNav />
    </PostHogProvider>
  );
});
