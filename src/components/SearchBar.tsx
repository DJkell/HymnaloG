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
      <TextInput
        placeholder={placeholder || "Buscar..."}
        value={value}
        onChangeText={onChangeText}
      />

      <Ionicons
        name="search"
        size={24}
        color="black"
        style={{ marginEnd: 5 }}
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
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f31667ff",
    padding: 4,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 10,
  },
});

export default SearchBar;
