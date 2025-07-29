// components/CategoryFilter.tsx
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

interface Props {
  selected: string | null;
  onSelect: (category: string | null) => void;
}

export default function CategoryFilter({ selected, onSelect }: Props) {
  return (
    <View style={styles.filterContainer}>
      <TouchableOpacity
        style={[styles.button, selected === null && styles.activeButton]}
        onPress={() => onSelect(null)}
      >
        <Text style={styles.buttonText}>Todos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, selected === "solemne" && styles.activeButton]}
        onPress={() => onSelect("solemne")}
      >
        <Text style={styles.buttonText}>Solemnes</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, selected === "alegre" && styles.activeButton]}
        onPress={() => onSelect("alegre")}
      >
        <Text style={styles.buttonText}>Alegres</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-around",
    gap: 20,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "#ccc",
    padding: 8,
    borderRadius: 5,
    flex: 1,
  },
  activeButton: {
    backgroundColor: "#6A5ACD",
  },
  buttonText: {
    color: "Black",
    /* fontWeight: "bold", */
  },
});
