import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  IconColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderSize?: number;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  placeholder,
  IconColor,
  backgroundColor,
  borderColor,
  borderSize,
}) => {
  return (
    <View
      style={[
        styles.input,
        {
          backgroundColor: backgroundColor || "#E6DDCD",
          borderWidth: borderSize || 0,
          borderColor: borderColor || "#ccc",
        },
      ]}
    >
      <Ionicons
        name="search"
        size={24}
        color={IconColor ?? "#000000ff"}
        style={{ marginEnd: 5 }}
      />
      <TextInput
        style={{ flex: 1, fontSize: 16 }}
        placeholder={placeholder || "Buscar..."}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 50,
    maxHeight: 60,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",

    padding: 4,
    borderRadius: 13,
    fontSize: 16,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default SearchBar;
