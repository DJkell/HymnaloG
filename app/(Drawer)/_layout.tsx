import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Inicio",
          title: "Inicio",
        }}
      />
      <Drawer.Screen
        name="HymnSearchScreen"
        options={{
          drawerLabel: "Buscar",
          title: "Buscar Himno",
          headerRight: () => (
            <>
              <TouchableOpacity>
                <Text>C</Text>
              </TouchableOpacity>
            </>
          ),
        }}
      />
      <Drawer.Screen
        name="FavoriteScreen"
        options={{ drawerLabel: "Favoritos", title: "Mis Favoritos" }}
      />
    </Drawer>
  );
}
