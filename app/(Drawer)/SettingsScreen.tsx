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
import { FONT_MIN, FONT_MAX } from "@/constants/fontLimits";

const SettingsScreen = () => {
  const themeCtx = useContext(ThemeContext);

  if (!themeCtx) return null; // Seguridad si no hay contexto

  const { activeTheme, settings, setFontSize, setTheme } = themeCtx;

  const handleFontSizeChange = (delta: number) => {
    const newSize = Math.max(
      FONT_MIN,
      Math.min(FONT_MAX, settings.fontSize + delta)
    );
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
          {
            fontSize: settings.fontSize,
            color: activeTheme.titleColor,
            fontWeight: "bold",
          },
        ]}
      >
        Tema actual: {activeTheme.name}
      </Text>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {["Light", "Dark", "Green", "Purple"].map((themeName) => (
            <TouchableOpacity
              key={themeName}
              onPress={() => setTheme(themeName)}
              style={[
                styles.colorOption,
                {
                  backgroundColor:
                    themeName == "Light"
                      ? "#c2bfbfff"
                      : themeName == "Dark"
                        ? "#161414ff"
                        : themeName.toLowerCase(),
                  marginBottom: 50,
                  borderColor: activeTheme.subBorderColor,
                  borderWidth: 5,
                },
              ]}
            >
              <Text
                style={{
                  color: "#ffffffff",
                  fontWeight: "bold",
                }}
              >
                {themeName}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text
          style={[
            styles.label,
            {
              fontSize: settings.fontSize,
              color: activeTheme.titleColor,
              fontWeight: "bold",
            },
          ]}
        >
          Tamaño fuente:
        </Text>

        <View style={styles.fontButtons}>
          <TouchableOpacity
            style={{
              backgroundColor: activeTheme.borderColor,
              borderRadius: 50,
            }}
            onPress={() => handleFontSizeChange(1)}
          >
            <Text
              style={{
                color: "#000000ff",
                padding: 15,
                fontWeight: "bold",
              }}
            >
              A +
            </Text>
          </TouchableOpacity>

          <Text
            style={{
              fontSize: settings.fontSize,
              color: activeTheme.textColor,
            }}
          >
            Texto de ejemplo
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: activeTheme.borderColor,
              borderRadius: 50,
            }}
            onPress={() => handleFontSizeChange(-1)}
          >
            <Text
              style={{
                color: "#000000ff",
                padding: 15,
                fontWeight: "bold",
              }}
            >
              A -
            </Text>
          </TouchableOpacity>
        </View>
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
    alignItems: "center",
  },
});

export default SettingsScreen;
