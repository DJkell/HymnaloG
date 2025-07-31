import { Stack } from "expo-router";
import { Button, View, TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";
import BtnBack from "@/components/BtnBack";
import BtnBackHeader from "@/components/BtnBackhead";

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
              <View style={{ flexDirection: "row", gap: 10 }}>
                <BtnBackHeader
                  margin={22}
                  name="search"
                  link="/HymnSearchScreen"
                />
                <BtnBackHeader margin={0} />
              </View>
            </>
          ),
        })}
      />
    </Stack>
  );
}
