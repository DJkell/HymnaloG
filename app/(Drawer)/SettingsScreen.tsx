import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { ThemeContext } from "@/context/ThemeContext";

const SettingsScreen = () => {
  const themeCtx = useContext(ThemeContext);

  if (!themeCtx) return null; // Seguridad si no hay contexto

  const { activeTheme, settings, setFontSize, setTheme } = themeCtx;

  const handleFontSizeChange = (delta: number) => {
    const newSize = Math.max(18, Math.min(26, settings.fontSize + delta));
    setFontSize(newSize);
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: activeTheme.backgroundColor },
      ]}
    >
      <Text
        style={[
          styles.label,
          { fontSize: settings.fontSize, color: activeTheme.textColor },
        ]}
      >
        Tema actual: {activeTheme.name}
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {["Light", "Dark", "Green", "Purple", "Cyan"].map((themeName) => (
          <TouchableOpacity
            key={themeName}
            onPress={() => setTheme(themeName)}
            style={[
              styles.colorOption,
              {
                backgroundColor:
                  activeTheme.name === themeName
                    ? activeTheme.borderColor
                    : "#ccc",
              },
            ]}
          >
            <Text style={{ color: "#fff" }}>{themeName}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text
        style={[
          styles.label,
          { fontSize: settings.fontSize, color: activeTheme.textColor },
        ]}
      >
        Tamaño fuente: {settings.fontSize}
      </Text>

      <View style={styles.fontButtons}>
        <Button
          title="A +"
          onPress={() => handleFontSizeChange(1)}
          color={activeTheme.accentColor}
        />
        <Button
          title="A -"
          onPress={() => handleFontSizeChange(-1)}
          color={activeTheme.accentColor}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    marginVertical: 10,
  },
  colorOption: {
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 20,
  },
  fontButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
});

export default SettingsScreen;
