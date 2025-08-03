import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { BlurView } from "expo-blur";
import BtnBasic from "./BtnBasic";

interface HomeBoxProps {
  marginTop?: number | string;
  MxHeight?: number | string;
  MxWidth?: number | string;
}

export default function HomeBox({
  marginTop,
  MxHeight,
  MxWidth,
}: HomeBoxProps) {
  return (
    <BlurView
      intensity={30}
      tint="dark"
      style={[
        styles.titleBox,
        {
          marginTop: marginTop ?? "25%",
          maxHeight: MxHeight ?? "40%",
          maxWidth: MxWidth ?? "100%",
        },
      ]}
    >
      <Text style={styles.text}>Himnario de Gloria</Text>
      <Text style={styles.subtext}>Mas de 500 Himnos para alabar al Señor</Text>
      <BtnBasic
        text="BUSCAR"
        link="/HymnSearchScreen"
        width={"60%"}
        bgColor="#21211F"
        TextColor="#E6DED4"
        height={50}
        marginT={30}
      />
    </BlurView>
  );
}
const styles = StyleSheet.create({
  titleBox: {
    flex: 1,
    borderWidth: 8,
    justifyContent: "center",
    overflow: "hidden",
    borderColor: "#E6DED4",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    zIndex: 2,

    // iOS
    shadowColor: "#000",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 10,

    // Android
  },
  text: {
    fontSize: 30,
    color: "#E6DED4",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    fontFamily: "Poppins_600SemiBold",
  },
  subtext: {
    fontSize: 15,
    color: "#E6DED4",
    textAlign: "center",
    marginTop: 10,
    width: "80%",
    fontFamily: "Adamina_400Regular",
    alignItems: "center",
  },
});
