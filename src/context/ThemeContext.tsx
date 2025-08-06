import React, { createContext, useEffect, useState, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// TIPOS
export type Settings = {
  selectedTheme: string;
  fontSize: number;
};

export type Theme = {
  name: string;
  backgroundColor: string;
  litebackgroundColor?: string;
  StatusBarColor?: string;
  textColor: string;
  titleColor?: string;
  subTitleColor?: string;
  btnliteColor: string;
  borderColor?: string;
  subBorderColor?: string;
  borderZise?: number;
};

export type ThemeContextType = {
  settings: Settings;
  activeTheme: Theme;
  setTheme: (name: string) => void;
  setFontSize: (size: number) => void;
};

// THEMES DISPONIBLES
const themeOptions: Theme[] = [
  {
    name: "Light",
    backgroundColor: "#fffdfdff",
    litebackgroundColor: "#E6DDCD",
    StatusBarColor: "dark",
    textColor: "#000000",
    titleColor: "#593B25",
    subTitleColor: "#704C34",
    btnliteColor: "#E6DED4",
    borderColor: "#8d6e5aff",
    subBorderColor: "#21211F",
    borderZise: 5,
  },
  {
    name: "Dark",
    backgroundColor: "#1C1C1A",
    litebackgroundColor: "#c5c3c3ff",
    StatusBarColor: "light",
    textColor: "#1C1C1A",
    titleColor: "#ffffffff",
    subTitleColor: "#E6DED4",
    btnliteColor: "#E6DED4",
    borderColor: "#895D3F",
    subBorderColor: "#895D3F",
    borderZise: 5,
  },
  {
    name: "Green",
    backgroundColor: "#3f51b5ff",
    litebackgroundColor: "#c5c3c3ff",
    StatusBarColor: "light",
    textColor: "#ffffff",
    titleColor: "#ffffffff",
    btnliteColor: "#8bc34a",
    borderColor: "#558b2f",
    subBorderColor: "#21211F",
  },
  {
    name: "Purple",
    backgroundColor: "#ffab00ff",
    litebackgroundColor: "#c5c3c3ff",
    StatusBarColor: "light",
    textColor: "#000000",
    titleColor: "#ffffffff",
    btnliteColor: "#7e57c2",
    borderColor: "#5e35b1",
    subBorderColor: "#21211F",
  },
  {
    name: "Cyan",
    backgroundColor: "#009688ff",
    litebackgroundColor: "#c5c3c3ff",
    StatusBarColor: "light",
    textColor: "#ffffff",
    titleColor: "#ffffffff",
    btnliteColor: "#00e5ff",
    borderColor: "#00bcd4",
    subBorderColor: "#21211F",
  },
];

// CONTEXTO
export const ThemeContext = createContext<ThemeContextType | null>(null);

// PROVIDER
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState<Settings>({
    selectedTheme: "Light",
    fontSize: 16,
  });

  const activeTheme =
    themeOptions.find((t) => t.name === settings.selectedTheme) ||
    themeOptions[0];

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const saved = await AsyncStorage.getItem("userSettings");
        if (saved) {
          setSettings(JSON.parse(saved));
        }
      } catch (error) {
        console.error("Error al cargar configuración:", error);
      }
    };
    loadSettings();
  }, []);

  const saveSettings = async (newSettings: Settings) => {
    try {
      await AsyncStorage.setItem("userSettings", JSON.stringify(newSettings));
    } catch (error) {
      console.error("Error al guardar configuración:", error);
    }
  };

  const setTheme = (name: string) => {
    const updated = { ...settings, selectedTheme: name };
    setSettings(updated);
    saveSettings(updated);
  };

  const setFontSize = (size: number) => {
    const updated = { ...settings, fontSize: size };
    setSettings(updated);
    saveSettings(updated);
  };

  return (
    <ThemeContext.Provider
      value={{ settings, activeTheme, setTheme, setFontSize }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
