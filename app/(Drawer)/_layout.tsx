import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import BtnBackHome from "@/components/BtnBackhead";
import BtnBackHeader from "@/components/BtnBackhead";
import { Ionicons } from "@expo/vector-icons";

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#ffffffff",
          width: 260,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
        },
        drawerActiveBackgroundColor: "#E6DDCD", // este es mi ítem activo
        drawerActiveTintColor: "#895D3F", // Texto de es mi ítem activo
        drawerInactiveTintColor: "##21211F", // Texto ítems normales
        drawerLabelStyle: {
          marginLeft: -5,
          fontSize: 15,
          borderradius: 1,
        },
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          headerTintColor: "#ffffff",
          drawerLabel: "Inicio",
          title: "",
          headerStyle: {
            color: "#E6DED4",
            backgroundColor: "transparent",
            elevation: 0, //quita sombra de Android
            shadowOpacity: 0, //quita sombra de iOS
          },

          drawerIcon: () => <Ionicons name="home" size={25} color="#895D3F" />,
          headerTransparent: true,
          headerRight: () => (
            <Text
              style={{
                marginEnd: 30,
                fontWeight: "bold",
                color: "#E6DDCD",
                justifyContent: "center",
              }}
            >
              MENú
            </Text>
          ),
        }}
      />
      <Drawer.Screen
        name="HymnSearchScreen"
        options={{
          drawerLabel: "Buscar",
          title: "Buscar Himno",
          drawerIcon: () => (
            <Ionicons name="search" size={25} color="#895D3F" />
          ),
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
          drawerIcon: () => <Ionicons name="heart" size={25} color="red" />,
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
