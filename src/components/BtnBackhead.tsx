import Ionicons from "@expo/vector-icons/Ionicons";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

interface btnLocation {
  link?: string;
  size?: number;
  name?: string;
  margin?: number;
  color?: string;
}

export default function BtnBackHeader({
  margin,
  link,
  size,
  name,
  color,
}: btnLocation) {
  const Router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => {
        Router.push(link ?? "/");
      }}
    >
      <Ionicons
        style={{ marginRight: margin ?? 22 }}
        name={name ?? "home-sharp"}
        size={size ?? 25}
        color={color ?? "black"}
      />
    </TouchableOpacity>
  );
}
