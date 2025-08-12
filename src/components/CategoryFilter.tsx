// components/CategoryFilter.tsx
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

interface Props {
  selected: string | null;
  onSelect: (category: string | null) => void;
  textColor?: string;
  backgroundColor?: string;
  selectColor?: string;
}

export default function CategoryFilter({
  selected,
  onSelect,
  textColor,
  backgroundColor,
  selectColor,
}: Props) {
  return (
    <View style={styles.filterContainer}>
      {/* Todos */}
      <TouchableOpacity
        style={[
          styles.button,
          selected === null && {
            backgroundColor: backgroundColor,
          },
        ]}
        onPress={() => onSelect(null)}
      >
        <Text
          style={[
            styles.buttonText,
            selected === null && {
              color: "#E6DDCD",
            },
          ]}
        >
          Todos
        </Text>
      </TouchableOpacity>

      {/* Alabanza */}
      <TouchableOpacity
        style={[
          styles.button,
          selected === "alabanza" && { backgroundColor: backgroundColor },
        ]}
        onPress={() => onSelect("alabanza")}
      >
        <Text
          style={[
            styles.buttonText,
            selected === "alabanza" && {
              color: "#E6DDCD",
            },
          ]}
        >
          Alabanza
        </Text>
      </TouchableOpacity>

      {/* Adoración */}
      <TouchableOpacity
        style={[
          styles.button,
          selected === "adoracion" && { backgroundColor: backgroundColor },
        ]}
        onPress={() => onSelect("adoracion")}
      >
        <Text
          style={[
            styles.buttonText,
            selected === "adoracion" && {
              color: "#E6DDCD",
            },
          ]}
        >
          Adoración
        </Text>
      </TouchableOpacity>

      {/* Solemne */}
      <TouchableOpacity
        style={[
          styles.button,
          selected === "solemne" && { backgroundColor: backgroundColor },
        ]}
        onPress={() => onSelect("solemne")}
      >
        <Text
          style={[
            styles.buttonText,
            selected === "solemne" && {
              color: "#E6DDCD",
            },
          ]}
        >
          Solemne
        </Text>
      </TouchableOpacity>

      {/* Alegre */}
      <TouchableOpacity
        style={[
          styles.button,
          selected === "alegre" && { backgroundColor: backgroundColor },
        ]}
        onPress={() => onSelect("alegre")}
      >
        <Text
          style={[
            styles.buttonText,
            selected === "alegre" && {
              color: "#E6DDCD",
            },
          ]}
        >
          Alegre
        </Text>
      </TouchableOpacity>

      {/* Esperanza */}
      <TouchableOpacity
        style={[
          styles.button,
          selected === "esperanza" && { backgroundColor: backgroundColor },
        ]}
        onPress={() => onSelect("esperanza")}
      >
        <Text
          style={[
            styles.buttonText,
            selected === "esperanza" && {
              color: "#E6DDCD",
            },
          ]}
        >
          Esperanza
        </Text>
      </TouchableOpacity>

      {/* Servicio */}
      <TouchableOpacity
        style={[
          styles.button,
          selected === "servicio" && {
            backgroundColor: backgroundColor,
          },
        ]}
        onPress={() => onSelect("servicio")}
      >
        <Text
          style={[
            styles.buttonText,
            selected === "servicio" && {
              color: "#E6DDCD",
            },
          ]}
        >
          Servicio
        </Text>
      </TouchableOpacity>

      {/* Largo */}
      <TouchableOpacity
        style={[
          styles.button,
          selected === "largo" && {
            backgroundColor: backgroundColor,
          },
        ]}
        onPress={() => onSelect("largo")}
      >
        <Text
          style={[
            styles.buttonText,
            selected === "largo" && {
              color: "#E6DDCD",
            },
          ]}
        >
          Largo
        </Text>
      </TouchableOpacity>

      {/* Corto*/}
      <TouchableOpacity
        style={[
          styles.button,
          selected === "corto" && {
            backgroundColor: backgroundColor,
          },
        ]}
        onPress={() => onSelect("corto")}
      >
        <Text
          style={[
            styles.buttonText,
            selected === "corto" && {
              color: "#E6DDCD",
            },
          ]}
        >
          Corto
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "flex-start",
    gap: "10%",
    marginTop: 10,
    marginBottom: "-20%",
    flexWrap: "wrap",
    paddingHorizontal: 5,
    paddingBottom: -10,
  },
  button: {
    minWidth: "20%",
    maxWidth: "25%",
    maxHeight: "30%",
    backgroundColor: "#E6DDCD",
    padding: 8,
    flexWrap: "nowrap",
    borderRadius: 5,
    flex: 1,
  },
  buttonText: {
    color: "black",
  },
});
