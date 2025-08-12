import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import BtnBackHeader from "@/components/BtnBackhead";
import { Ionicons } from "@expo/vector-icons";
import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";

export default function DrawerLayout() {
  const themeCtx = useContext(ThemeContext);
  if (!themeCtx) return null;
  const { activeTheme, settings } = themeCtx;

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
        drawerInactiveTintColor: "#21211F", // Texto ítems normales
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
          headerTintColor: activeTheme.borderColor,
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
                color: activeTheme.titleColor,
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
      <Drawer.Screen
        name="SettingsScreen"
        options={{
          drawerLabel: "Configuracion",
          title: "Ajustes",
          drawerIcon: () => (
            <Ionicons name="settings" size={25} color="#895D3F" />
          ),
          headerRight: () => (
            <>
              <View style={{ flexDirection: "row", gap: 10 }}>
                <BtnBackHeader />
              </View>
            </>
          ),
        }}
      />
    </Drawer>
  );
}
