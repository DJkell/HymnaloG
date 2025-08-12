import React from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";

import { hymnt } from "@/types/hymnTypes";
import { useRouter } from "expo-router";
import BtnFav from "./btnfavorite";
import { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

interface HymnListProps {
  data: hymnt[];
  textcolor?: string;
  fontSize?: number;
  titleColor?: string;
}

const HymnsList = ({
  data,
  textcolor,
  fontSize,
  titleColor,
}: HymnListProps) => {
  const router = useRouter();

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={[
            styles.hymnCard,
            { borderBottomWidth: 1, borderBottomColor: "#E6DDCD" },
          ]}
          onPress={() => router.push(`/hymn/${item.id}`)}
        >
          <View
            style={{
              maxWidth: "90%",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={[
                styles.hymnNumber,
                { color: textcolor, fontSize: fontSize },
              ]}
            >{`${item.id}   `}</Text>

            <Text
              style={[
                styles.hymnName,
                { color: titleColor, fontSize: fontSize },
              ]}
            >{` ${item.title}`}</Text>
            {/*           <Text style={styles.tags}>
              {item.category} • {item.duration}
            </Text> */}
          </View>
          <View style={{ justifyContent: "center" }}>
            {item.favorit == 1 ? (
              <MaterialIcons name="favorite" size={20} color="red" />
            ) : (
              <></>
            )}
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#3C2A4D",
  },
  input: {
    backgroundColor: "#D6C6CC",
    padding: 10,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  hymnCard: {
    borderRadius: 12,
    padding: 16,
    marginVertical: 6,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  hymnNumber: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#000",
  },
  hymnName: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
    maxWidth: "95%",
  },
  tags: {
    fontSize: 12,
    color: "#666",
  },
});

export default HymnsList;
