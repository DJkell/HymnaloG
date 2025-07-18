import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{ drawerLabel: "Inicio", title: "Inicio" }}
        />
        <Drawer.Screen
          name="HymnSearchScreen"
          options={{ drawerLabel: "Buscar", title: "Buscar Himno" }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
