import { View, TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";

interface Ruta {
  Path: string;
}

export default function BtnBack({ Path }: Ruta) {
  const router = useRouter();

  console.log("la ruta a viajar es" + Path);

  return (
    <TouchableOpacity onPress={() => router.push(`${Path}`)}>
      <Text>Volver</Text>
    </TouchableOpacity>
  );
}
