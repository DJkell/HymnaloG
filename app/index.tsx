import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  useWindowDimensions,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import OptionsBtn from "./src/components/OptionsBtn";
import { dataBtnHome } from "./src/data/OptionsBtnData";
import type { ListItemsOp } from "./src/types/ophomeTypes";
import { useRouter } from "expo-router";

export default function index() {
  const router = useRouter();

  const { width, height } = useWindowDimensions();
  const intablet = width > 485;

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
