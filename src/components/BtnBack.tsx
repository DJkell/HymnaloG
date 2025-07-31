import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

interface Ruta {
  Path: string;
}

export default function BtnBack({ Path }: Ruta) {
  const router = useRouter();

  console.log("la ruta a viajar es" + Path);

  return (
    <TouchableOpacity
      style={{ alignItems: "center" }}
      onPress={() => router.push(`${Path}`)}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Ionicons name="chevron-back-outline" size={24} color="black" />

        <Text style={{ fontSize: 16, marginLeft: 4 }}>Volver</Text>
      </View>
    </TouchableOpacity>
  );
}
