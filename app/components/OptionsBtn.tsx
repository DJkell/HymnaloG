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
  const { height } = useWindowDimensions();
  return (
    <TouchableOpacity
      onPress={onpressp}
      style={[style.optionsbtn, { backgroundColor: `${colorP}` }]}
    >
      <Text>{texto}</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  optionsbtn: {
    flex: 1,
  },
});
