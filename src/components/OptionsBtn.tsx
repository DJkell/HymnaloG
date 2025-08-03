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
  colorP: string;
  texto: string;
  onpressp: () => void;
  Icon?: string;
}

export default function OptionsBtn({
  onpressp,
  option,
  colorP,
  texto,
  Icon,
}: OptionsHProps) {
  const { height, width } = useWindowDimensions();
  const istablet = width > 500;

  return (
    <TouchableOpacity
      onPress={onpressp}
      style={[
        styles.optionsbtn,
        {
          backgroundColor: `${colorP}`,
          maxWidth: istablet ? "50%" : "50%",
          maxHeight: istablet ? "60%" : "100%",
          minHeight: istablet ? 100 : 125,
          marginHorizontal: istablet ? 30 : 10,
        },
      ]}
    >
      <Text style={styles.text}>{texto}</Text>

      <View style={styles.btnIcono}>
        <Ionicons name={Icon} size={25} color="#E6DDCD" />
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
  text: { marginBottom: 10, color: "#E6DED4", fontWeight: "bold" },

  optionsbtn: {
    flex: 1,
    margin: 10,
    maxWidth: "40%",
    borderRadius: 15,
    borderColor: "#E6DED4",
    borderWidth: 8,

    justifyContent: "center",
    alignItems: "center",
  },
});
