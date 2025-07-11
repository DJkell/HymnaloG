import { useWindowDimensions, View, StyleSheet, Text } from "react-native";

export default function HeaderHome() {
  const { height } = useWindowDimensions();
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
    height: "50%",
  },
});
