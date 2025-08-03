import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

interface btnLocation {
  link?: string;
  size?: number;
  Iname?: string;
  marginR?: number;
  marginT?: number;
  color?: string;
  bgColor?: string;
  width?: number;
  height?: number;
  text?: string;
  TextColor?: string;
}

export default function BtnBasic({
  marginR,
  marginT,
  link,
  size,
  Iname,
  color,
  bgColor,
  width,
  height,
  text,
  TextColor,
}: btnLocation) {
  const Router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => {
        Router.push(link ?? "/");
      }}
      style={[
        styles.btncontainer,
        {
          backgroundColor: bgColor ?? "#E6DDCD",
          width: width,
          height: height,
          marginTop: marginT ?? 0,
        },
      ]}
    >
      <Text style={{ color: TextColor, fontWeight: "bold" }}>{text}</Text>

      {Iname ? (
        <Ionicons
          style={{ marginRight: marginR ?? 22 }}
          name={"search"}
          size={size ?? 25}
          color={color ?? "black"}
        />
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btncontainer: {
    justifyContent: "center",
    alignItems: "center",
    maxHeight: 50,
    borderRadius: 10,
  },
});
