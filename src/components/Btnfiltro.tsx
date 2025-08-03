import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";

interface btnfltrer {
  showFilters: boolean;
  onSelect: () => void;
  width?: number | string;
  height?: number;
}

export default function Btnfiltrer({
  showFilters,
  onSelect,
  width,
  height,
}: btnfltrer) {
  return (
    <TouchableOpacity
      style={[styles.btncontainer, { width: width ?? "20%", height: height }]}
      onPress={() => onSelect()}
    >
      {showFilters == false ? (
        <MaterialIcons name="filter-alt" size={24} color="black" />
      ) : (
        <MaterialIcons name="filter-alt-off" size={24} color="White" />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btncontainer: {
    backgroundColor: "#E6DDCD",
    justifyContent: "center",
    alignItems: "center",
    maxHeight: 50,
    borderRadius: 10,
  },
});
