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
          name="settings"
          options={{ drawerLabel: "Ajustes", title: "Ajustes" }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
