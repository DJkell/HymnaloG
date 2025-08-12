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
  btnStronColor?: string;
  borderColor?: string;
  subBorderColor?: string;
  borderSize: number;
  decorationColorOne?: string;
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
    litebackgroundColor: "#353532ff",
    StatusBarColor: "dark",
    textColor: "#000000",
    titleColor: "#593B25",
    subTitleColor: "#704C34",
    btnliteColor: "#E6DDCD",
    btnStronColor: "#21211F",
    borderColor: "#8d6e5aff",
    subBorderColor: "#21211F",
    decorationColorOne: "#E6DDCD",
    borderSize: 0,
  },
  {
    name: "Dark",
    backgroundColor: "#1C1C1A",
    litebackgroundColor: "#c5c3c3ff",
    StatusBarColor: "light",
    textColor: "#99867aff",
    titleColor: "#ffffffff",
    subTitleColor: "#E6DED4",
    btnliteColor: "#E6DED4",
    btnStronColor: "#704C34",
    borderColor: "#895D3F",
    subBorderColor: "#895D3F",
    decorationColorOne: "#E6DDCD",
    borderSize: 5,
  },
  {
    name: "Green",
    backgroundColor: "#5F7862",
    litebackgroundColor: "#c5c3c3ff",
    StatusBarColor: "light",
    textColor: "#E6DDCD",
    titleColor: "#ffffffff",
    subTitleColor: "#E6DED4",

    btnliteColor: "#895D3F",
    btnStronColor: "#21211F",
    borderColor: "#E6DDCD",
    subBorderColor: "#E6DDCD",
    decorationColorOne: "#21211F",
    borderSize: 5,
  },
  {
    name: "Purple",
    backgroundColor: "#756184",
    litebackgroundColor: "#c5c3c3ff",
    StatusBarColor: "light",
    textColor: "#E6DDCD",
    titleColor: "#ffffffff",
    subTitleColor: "#E6DED4",

    btnliteColor: "#895D3F",
    btnStronColor: "#21211F",
    borderColor: "#E6DDCD",
    subBorderColor: "#21211F",
    decorationColorOne: "#21211F",
    borderSize: 5,
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
