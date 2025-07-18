import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  useWindowDimensions,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import OptionsBtn from "@/components/OptionsBtn";
import { dataBtnHome } from "@/data/OptionsBtnData";
import type { ListItemsOp } from "../src/types/ophomeTypes";
import { useRouter } from "expo-router";

import { useEffect } from "react";
import { insertHymns } from "../src/db/db.insertHymn";
import { createHymnsTable } from "../src/db/dbCreation";
import { resetHymns } from "@/db/resetdb";

import HymnsFull from "@/components/HymnCard";

export default function index() {
  //*Aqui inicializamos nuestra base de datos creando la tabla e insertando los valores*/
  useEffect(() => {
    (async () => {
      await createHymnsTable();
      await resetHymns(); //Voy a quitar esto en produccion
      await insertHymns();
    })();
  }, []);

  /*Aqui Configuramos el router para usarlo mas abajo*/
  const router = useRouter();

  /*Aqui extraimos el alto y ancho de nuestra pestana para crear el efecto responsive*/
  const { width, height } = useWindowDimensions();
  const intablet = width > 485;

  /*Aqui Configuramos el router para usarlo mas abajo*/
  return (
    <ScrollView style={styles.container}>
      <View
        style={[
          styles.headerBox,
          { height: height * 0.4, maxHeight: intablet ? 300 : 400 },
        ]}
      >
        <FlatList
          data={dataBtnHome}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: intablet ? "center" : "space-between",
            padding: 10,
          }}
          contentContainerStyle={{ padding: 16 }}
          renderItem={({ item }: { item: ListItemsOp }) => (
            <OptionsBtn
              texto={item.label}
              colorP={item.btnColor}
              option={item.id}
              onpressp={() => router.push(item.screenPt)}
            />
          )}
        />
      </View>
      <View style={[styles.headerbuscar, { height: height * 0.1 }]}>
        {/* Aqui voy a poner la barra de busqueda */}
      </View>
      <HymnsFull />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerBox: {
    backgroundColor: "#555352",
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
