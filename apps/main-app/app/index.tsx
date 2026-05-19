import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { useThemeStore } from "@workspace/stores";

export default function HomeScreen() {
  const { mode, cycleMode } = useThemeStore();

  const THEME_OPTIONS = {
    system: { icon: "⚙️", label: "System" },
    light: { icon: "☀️", label: "Light" },
    dark: { icon: "🌙", label: "Dark" },
  } as const;

  const { icon, label } = THEME_OPTIONS[mode];

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <View style={{ flex: 1 }} />
        <TouchableOpacity onPress={cycleMode} style={styles.themeBtn} activeOpacity={0.8}>
          <Text style={styles.themeBtnIcon}>{icon}</Text>
          <Text style={styles.themeBtnLabel}>{label}</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Expo Monorepo</Text>
        <Text style={styles.subtitle}>
          This is a standalone monorepo clone using npm workspaces and Zustand.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  themeBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#f5f5f5",
  },
  themeBtnIcon: {
    fontSize: 16,
  },
  themeBtnLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: "#333",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    lineHeight: 24,
  },
});
