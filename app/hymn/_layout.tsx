import { Stack } from "expo-router";
import { Button, View, TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";
import BtnBack from "@/components/BtnBack";

export default function HymnLayout() {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerBackVisible: true,
        headerBackTitle: "Atrás",
      }}
    >
      <Stack.Screen
        name="[id]"
        options={({ route }: { route: { params: { id: string } } }) => ({
          title: ` `,
          headerLeft: () => <BtnBack Path="/HymnSearchScreen" />,

          headerRight: () => (
            <>
              <TouchableOpacity>
                <Text>C</Text>
              </TouchableOpacity>
            </>
          ),
        })}
      />
      <Stack.Screen
        name="FavoriteScreen"
        options={({ route }: { route: { params: { id: string } } }) => ({
          title: ` `,
          headerLeft: () => <BtnBack Path="/" />,

          headerRight: () => (
            <>
              <TouchableOpacity>
                <Text>C</Text>
              </TouchableOpacity>
            </>
          ),
        })}
      />
    </Stack>
  );
}
