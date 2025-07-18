import React from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { hymnt } from "@/types/hymnTypes";

interface HymnListProps {
  data: hymnt[];
}

const HymnsList = ({ data }: HymnListProps) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.hymnCard}>
          <Text style={styles.hymnNumber}>#{item.id}</Text>
          <Text style={styles.hymnName}>{item.title}</Text>
          <Text style={styles.tags}>
            {item.category} • {item.duration}
          </Text>
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
    backgroundColor: "#F5F1E3",
    borderRadius: 12,
    padding: 16,
    marginVertical: 6,
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
  },
  tags: {
    fontSize: 12,
    color: "#666",
  },
});

export default HymnsList;
