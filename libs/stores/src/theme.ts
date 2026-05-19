import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type ThemeMode = "light" | "dark" | "system";

interface ThemeState {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  cycleMode: () => void;
}

const CYCLE: ThemeMode[] = ["system", "light", "dark"];

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      mode: "system",
      setMode: (mode) => set({ mode }),
      cycleMode: () => {
        const currentMode = get().mode;
        const nextIndex = (CYCLE.indexOf(currentMode) + 1) % CYCLE.length;
        set({ mode: CYCLE[nextIndex] });
      },
    }),
    {
      name: "@tcf_theme_store",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
