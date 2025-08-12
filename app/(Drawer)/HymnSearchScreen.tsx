import React, { useState, useEffect, useContext } from "react";
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
import Btnfiltrer from "@/components/Btnfiltro";
import CategoryFilter from "@/components/CategoryFilter";

import { ThemeContext } from "@/context/ThemeContext";

const HymnSearchScreen = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [allHymns, setAllHymns] = useState<hymnt[]>([]);
  const [filHymns, setFilHymns] = useState<hymnt[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const loadHymns = async () => {
      const HymnsFromDb = await getAllHymns();
      console.log("Total de himnos cargados:", HymnsFromDb.length);
      setAllHymns(HymnsFromDb);
      setFilHymns(HymnsFromDb);
      console.log("Himnos procesados" + allHymns.length);
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

      if (cat === "corto" || "largo") {
        const matchesCategory = cat ? hymns.duration === cat : true;
        return matchesSearch && matchesCategory;
      } else {
        const matchesCategory = cat ? hymns.category === cat : true;
        return matchesSearch && matchesCategory;
      }
    });

    setFilHymns(filtered);
  };

  const handleCategorySelect = (cat: string | null) => {
    setCategory(cat);
    applyFilters(query, cat);
  };

  const handleBtnFiltrer = () => {
    setShowFilters((prev) => !prev);
  };

  const themeCtx = useContext(ThemeContext);
  if (!themeCtx) return null;
  const { activeTheme, settings } = themeCtx;

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: activeTheme.backgroundColor ?? "#ffffff" },
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 20,
        }}
      >
        <SearchBar
          placeholder="Buscar por número o nombre  "
          value={query}
          onChangeText={filSearch}
          IconColor={activeTheme.btnStronColor}
          backgroundColor={"#E6DDCD"}
          borderColor={activeTheme.borderColor}
          borderSize={activeTheme.borderSize - 3}
        />

        <Btnfiltrer
          showFilters={showFilters}
          onSelect={handleBtnFiltrer}
          width={"20%"}
          IconColor={activeTheme.btnStronColor}
          backgroundColor={"#E6DDCD"}
          borderColor={activeTheme.borderColor}
          borderSize={activeTheme.borderSize - 3}
        />
      </View>
      {showFilters && (
        <CategoryFilter
          selected={category}
          onSelect={handleCategorySelect}
          backgroundColor={activeTheme.btnStronColor}
          selectColor={activeTheme.titleColor}
        />
      )}

      <HymnsList
        data={filHymns}
        textcolor={activeTheme.textColor}
        titleColor={activeTheme.titleColor}
        fontSize={settings.fontSize - 1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
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
