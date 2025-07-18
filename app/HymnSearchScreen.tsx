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
import HymnsList from "@/components/HymnCard";
import SearchBar from "@/components/SearchBar";

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
    <View style={styles.container}>
      <SearchBar
        placeholder="Buscar por número o nombre"
        value={query}
        onChangeText={filSearch}
      />

      <HymnsList data={filHymns} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#3C2A4D",
    flex: 1,
  },
  input: {
    backgroundColor: "#D6C6CC",
    padding: 10,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 10,
  },
});

export default HymnSearchScreen;
