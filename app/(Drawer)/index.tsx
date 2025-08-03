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

import { useEffect } from "react";
import { insertHymns } from "@/db/db.insertHymn";
import { createHymnsTable } from "@/db/dbCreation";
import { resetHymns } from "@/db/resetdb";
import HomeBox from "@/components/homebox";

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

  return (
    <View style={[styles.backg, { paddingHorizontal: inpc ? "20%" : "7%" }]}>
      <StatusBar backgroundColor="#21211F" style="light" />
      <View
        style={{
          width: inbigScreen ? 300 : 200,
          height: inbigScreen ? 300 : 200,
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
          backgroundColor: "#21211F",
          borderBottomRightRadius: "100%",
          borderTopRightRadius: 1,
        }}
      ></View>
      {intablet ? (
        <HomeBox marginTop={"-30%"} />
      ) : (
        <HomeBox marginTop={inpc ? "-10%" : "25%"} />
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
        <Text style={styles.textContainer}>OPCIONES</Text>
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
          renderItem={({ item }: { item: ListItemsOp }) => (
            <OptionsBtn
              texto={item.label}
              colorP={item.btnColor}
              option={item.id}
              onpressp={() => router.push(item.screenPt)}
              Icon={item.Icon}
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
    backgroundColor: "#5F7862",
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
