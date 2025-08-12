import { StatusBar } from "expo-status-bar";

import {
  FlatList,
  useWindowDimensions,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import OptionsBtn from "@/components/OptionsBtn";
import { dataBtnHome } from "@/data/OptionsBtnData";
import type { ListItemsOp } from "@/types/ophomeTypes";
import { useRouter } from "expo-router";

import { useEffect, useState } from "react";
import { insertHymns } from "@/db/db.insertHymn";
import { createHymnsTable } from "@/db/dbCreation";
import { resetHymns } from "@/db/resetdb";
import HomeBox from "@/components/homebox";
import React, { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import getRandomId from "@/components/Hymnfilltra";

export default function index() {
  //*Aqui inicializamos nuestra base de datos creando la tabla e insertando los valores*/
  useEffect(() => {
    (async () => {
      await createHymnsTable();
      /*    await resetHymns(); //Voy a quitar esto en produccion */
      await insertHymns();
    })();
  }, []);

  /*Aqui Configuramos el router para usarlo mas abajo*/
  const router = useRouter();

  /*Aqui extraimos el alto y ancho de nuestra pestana para crear el efecto responsive*/
  const { width, height } = useWindowDimensions();
  const inbigScreen = width > 490;
  const intablet = width > 490 && width < 830; // Definimos un rango para tabletas
  const inpc = width >= 830; // Definimos un rango para PC

  const themeCtx = useContext(ThemeContext);
  if (!themeCtx) return null;

  const { activeTheme, settings } = themeCtx;

  return (
    <View
      style={[
        styles.backg,
        {
          paddingHorizontal: inpc ? "20%" : "7%",
          backgroundColor: activeTheme.backgroundColor,
        },
      ]}
    >
      <StatusBar
        backgroundColor="#050505ff"
        style={activeTheme.StatusBarColor === "light" ? "light" : "dark"}
      />
      <View
        style={{
          width: inbigScreen ? 300 : 200,
          height: inbigScreen ? 300 : 200,
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
          backgroundColor: activeTheme.decorationColorOne,
          borderBottomRightRadius: "100%",
          borderTopRightRadius: 1,
        }}
      ></View>
      {intablet ? (
        <HomeBox marginTop={"-30%"} />
      ) : (
        <HomeBox
          marginTop={inpc ? "-10%" : "25%"}
          borderColor={activeTheme.borderColor}
          ColorText={activeTheme.titleColor}
          ColorSubText={activeTheme.subTitleColor}
          btnColor={activeTheme.btnStronColor}
        />
      )}
      <View
        style={[
          styles.headerBox,
          {
            height: height * 0.4,
            maxHeight: inbigScreen ? 300 : 400,
            marginTop: inbigScreen ? 20 : "8%",
          },
        ]}
      >
        <Text
          style={[
            styles.textContainer,
            { color: activeTheme.name === "Light" ? "#1C1C1A" : "#E6DED4" },
          ]}
        >
          OPCIONES
        </Text>
        <FlatList
          data={dataBtnHome}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: intablet ? "center" : "space-between",
          }}
          contentContainerStyle={[
            styles.contentContainerStyle,
            { paddingBottom: 20 },
          ]}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }: { item: ListItemsOp }) => (
            <OptionsBtn
              texto={item.label}
              option={item.id}
              onpressp={() => {
                if (item.id === "3") {
                  router.push(`/hymn/${getRandomId()}`);
                } else {
                  router.push(item.screenPt);
                }
              }}
              Icon={item.Icon}
              colorback={activeTheme.btnliteColor}
              Bcolor={activeTheme.borderColor}
              BZise={activeTheme.borderSize ?? 0}
              tcolor={activeTheme.textColor}
              colorIcon={activeTheme.backgroundColor}
              IconColorfill={activeTheme.btnStronColor}
              fontSize={settings.fontSize - 7}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    marginTop: 15,
  },
  textContainer: {
    fontSize: 20,
    color: "#E6DED4",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    fontFamily: "Poppins_600SemiBold",
  },
  backg: {
    flex: 1,
    justifyContent: "center",
    padding: "7%",
  },

  headerBox: {
    padding: 0,
  },
  headerbuscar: {
    backgroundColor: "#E6DED4",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  row: {
    justifyContent: "space-between",
    padding: 4,
  },
});
