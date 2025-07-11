import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import HeaderHome from "../components/HeaderHome";

export default function index() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <HeaderHome />
        <Text>Aleluya</Text>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
