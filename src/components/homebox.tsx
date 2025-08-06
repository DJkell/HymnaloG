import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { BlurView } from "expo-blur";
import BtnBasic from "./BtnBasic";

interface HomeBoxProps {
  marginTop?: number | string;
  MxHeight?: number | string;
  MxWidth?: number | string;
  borderColor?: string;
  ColorText?: string;
  ColorSubText?: string;
  btnColor?: string;
  blurColor?: string;
  borderSize?: number;
}

export default function HomeBox({
  marginTop,
  MxHeight,
  MxWidth,
  borderColor,
  ColorText,
  ColorSubText,
  btnColor,
  borderSize,
  blurColor,
}: HomeBoxProps) {
  return (
    <BlurView
      intensity={30}
      tint={blurColor ?? "dark"}
      style={[
        styles.titleBox,
        {
          marginTop: marginTop ?? "25%",
          maxHeight: MxHeight ?? "40%",
          maxWidth: MxWidth ?? "100%",
          borderColor: borderColor ?? "#E6DED4",
          borderWidth: borderSize ?? 8,
        },
      ]}
    >
      <Text style={[styles.text, { color: ColorText ?? "#E6DED4" }]}>
        Himnario de Gloria
      </Text>
      <Text style={[styles.subtext, { color: ColorSubText ?? "#E6DED4" }]}>
        Mas de 500 Himnos para alabar al Señor
      </Text>
      <BtnBasic
        text="BUSCAR"
        link="/HymnSearchScreen"
        width={"60%"}
        bgColor={btnColor ?? "#21211F"}
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
    elevation: 0,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    fontFamily: "Poppins_600SemiBold",
  },
  subtext: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
    width: "80%",
    fontFamily: "Adamina_400Regular",
    alignItems: "center",
  },
});
