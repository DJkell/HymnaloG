import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  placeholder,
}) => {
  return (
    <View style={styles.input}>
      <Ionicons
        name="search"
        size={24}
        color="black"
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
    backgroundColor: "#E6DDCD",
    padding: 4,
    borderRadius: 13,
    fontSize: 16,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default SearchBar;
