import {
  TouchableOpacity,
  useWindowDimensions,
  View,
  StyleSheet,
  Text,
  ViewStyle,
} from "react-native";

interface OptionsHProps {
  option: string;
  colorP: string;
  texto: string;
  onpressp: () => void;
}

export default function OptionsBtn({
  onpressp,
  option,
  colorP,
  texto,
}: OptionsHProps) {
  const { height, width } = useWindowDimensions();
  const istablet = width > 500;

  return (
    <TouchableOpacity
      onPress={onpressp}
      style={[
        style.optionsbtn,
        {
          backgroundColor: `${colorP}`,
          maxWidth: istablet ? "20%" : "40%",
          marginHorizontal: istablet ? 30 : 10,
        },
      ]}
    >
      <Text>{texto}</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  optionsbtn: {
    flex: 1,
    margin: 10,
    minHeight: 90,
    maxWidth: "40%",

    justifyContent: "center",
    alignItems: "center",

    borderRadius: 10,
  },
});
