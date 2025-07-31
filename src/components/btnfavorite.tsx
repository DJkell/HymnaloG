import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";

interface btnfavP {
  State: number;
  onPressP: () => void;
}

export default function BtnFav({ State, onPressP }: btnfavP) {
  return (
    <TouchableOpacity onPress={() => onPressP()}>
      {State == 0 ? (
        <MaterialIcons name="favorite-border" size={30} color="black" />
      ) : (
        <MaterialIcons name="favorite" size={30} color="red" />
      )}
    </TouchableOpacity>
  );
}
