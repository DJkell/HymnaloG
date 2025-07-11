import { View, StyleSheet, Text } from "react-native";

export default function HeaderHome() {
  return (
    <View style={style.backHeader}>
      <Text>HOla Diego</Text>
    </View>
  );
}

const style = StyleSheet.create({
  backHeader: {
    backgroundColor: "#555352",
    width: "100%",
    height: 40,
    paddingTop: "20%",
  },
});
