import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import BtnBackHome from "@/components/BtnBackhead";
import BtnBackHeader from "@/components/BtnBackhead";

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
              <View style={{ flexDirection: "row", gap: 10 }}>
                <BtnBackHeader
                  margin={22}
                  name="heart"
                  link="/FavoriteScreen"
                  size={27}
                />
                <BtnBackHeader />
              </View>
            </>
          ),
        }}
      />
      <Drawer.Screen
        name="FavoriteScreen"
        options={{
          drawerLabel: "Favoritos",
          title: "Mis Favoritos",
          headerRight: () => (
            <>
              <View style={{ flexDirection: "row", gap: 10 }}>
                <BtnBackHeader
                  margin={22}
                  name="search"
                  link="/HymnSearchScreen"
                />
                <BtnBackHeader />
              </View>
            </>
          ),
        }}
      />
    </Drawer>
  );
}
