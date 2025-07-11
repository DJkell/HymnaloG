import { StatusBar } from "expo-status-bar";
import {
  useWindowDimensions,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import HeaderHome from "../components/HeaderHome";

export default function index() {
  const { height } = useWindowDimensions();
  return (
    <ScrollView style={styles.container}>
      <View style={[styles.headerBox, { height: height * 0.4 }]} />
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
});
