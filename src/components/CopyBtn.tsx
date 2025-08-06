import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import * as Clipboard from "expo-clipboard";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

interface CopyButtonProps {
  hymnTitle: string;
  hymnContent: string;
  onCopied?: () => void;
}

export default function CopyBtn({
  hymnTitle,
  hymnContent,
  onCopied,
}: CopyButtonProps) {
  const handleCopy = async () => {
    const textToCopy = `${hymnTitle}\n\n${hymnContent}`;
    await Clipboard.setStringAsync(textToCopy);
    onCopied?.();
  };

  return (
    <TouchableOpacity onPress={handleCopy}>
      <MaterialCommunityIcons name="content-copy" size={24} color="black" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#6A4E77",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
