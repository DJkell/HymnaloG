import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { getAllHymns } from "@/db/db.getHymns";
import { hymnt } from "@/types/hymnTypes";

const HymnSearchScreen = () => {
  const [query, setQuery] = useState("");
  const [allHymns, setAllHymns] = useState<hymnt[]>([]);
  const [filHymns, setFilHymns] = useState<hymnt[]>([]);

  useEffect(() => {
    const loadHymns = async () => {
      const HymnsFromDb = await getAllHymns();
      console.log("Total de himnos cargados:", HymnsFromDb.length);
      setAllHymns(HymnsFromDb);
      setFilHymns(HymnsFromDb);
    };

    loadHymns();
  }, []);

  const filSearch = (text: string) => {
    setQuery(text);

    const filtered = allHymns.filter(
      (hymns) =>
        hymns.title.toLowerCase().includes(text.toLowerCase()) ||
        hymns.id.toString().includes(text)
    );

    setFilHymns(filtered);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Buscar por número o nombre"
        value={query}
        onChangeText={filSearch}
      />

      <FlatList
        data={filHymns}
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
    </View>
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

export default HymnSearchScreen;
