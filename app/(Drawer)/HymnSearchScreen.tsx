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
import CategoryFilter from "@/components/CategoryFilter";

const HymnSearchScreen = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);
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
    applyFilters(text, category);
  };

  const applyFilters = (text: string, cat: string | null) => {
    const filtered = allHymns.filter((hymns) => {
      const matchesSearch =
        hymns.title.toLowerCase().includes(text.toLowerCase()) ||
        hymns.id.toString().includes(text);

      const matchesCategory = cat ? hymns.category === cat : true;
      return matchesSearch && matchesCategory;
    });

    setFilHymns(filtered);
  };

  const handleCategorySelect = (cat: string | null) => {
    setCategory(cat);
    applyFilters(query, cat);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Buscar por número o nombre"
        value={query}
        onChangeText={filSearch}
      />

      <CategoryFilter selected={category} onSelect={handleCategorySelect} />

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
