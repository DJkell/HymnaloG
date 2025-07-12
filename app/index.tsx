import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  useWindowDimensions,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import OptionsBtn from "./components/OptionsBtn";
import { dataBtnHome } from "./data/OptionsBtnData";
import type { ListItemsOp } from "./types/ophomeTypes";
import { useRouter } from "expo-router";

export default function index() {
  const router = useRouter();

  const { height } = useWindowDimensions();
  return (
    <ScrollView style={styles.container}>
      <View style={[styles.headerBox, { height: height * 0.4 }]} />

      <FlatList
        data={dataBtnHome}
        keyExtractor={(item) => item.id}
        renderItem={({ item }: { item: ListItemsOp }) => (
          <OptionsBtn
            texto={item.label}
            colorP={item.btnColor}
            option={item.id}
            onpressp={() => router.push(item.screenPt)}
          />
        )}
      />

      <View style={[styles.headerbuscar, { height: height * 0.1 }]}>
        {/* Aqui voy a poner la barra de busqueda */}
      </View>
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
