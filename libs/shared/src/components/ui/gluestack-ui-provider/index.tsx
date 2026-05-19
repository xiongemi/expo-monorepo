import { OverlayProvider } from "@gluestack-ui/core/overlay/creator";
import { ToastProvider } from "@gluestack-ui/core/toast/creator";
import { useColorScheme } from "nativewind";
import type React from "react";
import { useEffect } from "react";
import { View, type ViewProps } from "react-native";
import { config } from "./config";
import { useThemeStore } from "../../../stores/theme";

export function GluestackUIProvider({
  ...props
}: {
  children?: React.ReactNode;
  style?: ViewProps["style"];
}) {
  const { colorScheme, setColorScheme } = useColorScheme();
  const mode = useThemeStore((state) => state.mode);

  useEffect(() => {
    setColorScheme(mode);
  }, [mode, setColorScheme]);

  return (
    <View
      style={[
        config[(colorScheme as "light" | "dark") ?? "light"],
        { flex: 1, height: "100%", width: "100%" },
        props.style,
      ]}
    >
      <OverlayProvider>
        <ToastProvider>{props.children}</ToastProvider>
      </OverlayProvider>
    </View>
  );
}
