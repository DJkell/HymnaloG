import {
  TouchableOpacity,
  useWindowDimensions,
  View,
  StyleSheet,
  Text,
  ViewStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface OptionsHProps {
  option: string;
  colorback: string;
  texto: string;
  tcolor?: string;
  onpressp: () => void;
  Icon?: string;
  colorIcon?: string;
  colorfill?: string;
  IconColorfill?: string;
  Bcolor?: string;
  BZise?: number;
}

export default function OptionsBtn({
  onpressp,
  option,
  colorback,
  tcolor,
  texto,
  Icon,
  colorIcon,
  IconColorfill,
  Bcolor,
  BZise,
}: OptionsHProps) {
  const { height, width } = useWindowDimensions();
  const istablet = width > 500;

  return (
    <TouchableOpacity
      onPress={onpressp}
      style={[
        styles.optionsbtn,
        {
          backgroundColor: `${colorback}`,
          maxWidth: istablet ? "50%" : "50%",
          maxHeight: istablet ? "60%" : "100%",
          minHeight: istablet ? 100 : 125,
          marginHorizontal: istablet ? 30 : 10,
          borderColor: Bcolor ?? "#E6DED4",
          borderWidth: BZise ?? 8,
        },
      ]}
    >
      <Text style={[styles.text, { color: tcolor ?? "#E6DED4" }]}>{texto}</Text>

      <View
        style={[
          styles.btnIcono,
          { backgroundColor: IconColorfill ?? "#21211F" },
        ]}
      >
        <Ionicons name={Icon} size={25} color={colorIcon ?? "#E6DDCD"} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnIcono: {
    position: "absolute",
    backgroundColor: "#21211F",
    bottom: -25,
    borderRadius: 100,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 3,
  },
  text: { marginBottom: 10, fontWeight: "bold" },

  optionsbtn: {
    flex: 1,
    margin: 10,
    marginBottom: 17,
    maxWidth: "40%",
    borderRadius: 15,

    justifyContent: "center",
    alignItems: "center",
  },
});
