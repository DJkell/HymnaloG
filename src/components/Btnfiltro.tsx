import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";

interface btnfltrer {
  showFilters: boolean;
  onSelect: () => void;
  width?: number | string;
  height?: number;
  IconColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderSize?: number;
}

export default function Btnfiltrer({
  showFilters,
  onSelect,
  width,
  height,
  IconColor,
  backgroundColor,
  borderColor,
  borderSize,
}: btnfltrer) {
  return (
    <TouchableOpacity
      style={[
        styles.btncontainer,
        {
          borderColor: borderColor ?? "#ccc",
          borderWidth: borderSize ?? 0,
          width: width ?? "20%",
          height: height,
          backgroundColor: backgroundColor ?? "#E6DDCD",
        },
      ]}
      onPress={() => onSelect()}
    >
      {showFilters == false ? (
        <MaterialIcons
          name="filter-alt"
          size={24}
          color={IconColor ?? "black"}
        />
      ) : (
        <MaterialIcons name="filter-alt-off" size={24} color={"red"} />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btncontainer: {
    justifyContent: "center",
    alignItems: "center",
    maxHeight: 50,
    borderRadius: 10,
  },
});
