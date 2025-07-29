import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { getFav } from "@/db/getFav";
import { hymnt } from "@/types/hymnTypes";
import HymnsList from "@/components/HymnCard";
import { useFocusEffect } from "expo-router";
import React from "react";
import CategoryFilter from "@/components/CategoryFilter";

export default function FavoriteHymns() {
  const [HymnsF, setHymnsF] = useState<hymnt[]>([]);
  const [filtered, setFiltered] = useState<hymnt[]>([]);
  const [category, setCategory] = useState<string | null>(null);

  const loadFavorites = async () => {
    const datafav = await getFav();
    setHymnsF(datafav);
    applyFilters(datafav, category);
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  );

  const applyFilters = (data: hymnt[], cat: string | null) => {
    const filteredHymns = data.filter((hymn) =>
      cat ? hymn.category === cat : true
    );
    setFiltered(filteredHymns);
  };

  const handleCategorySelect = (cat: string | null) => {
    setCategory(cat);
    applyFilters(HymnsF, cat);
  };

  if (filtered.length == 0) {
    return (
      <>
        <CategoryFilter selected={category} onSelect={handleCategorySelect} />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Aún No tienes Himnos guardados.</Text>
        </View>
      </>
    );
  } else {
    return (
      <View style={{ flex: 1 }}>
        <CategoryFilter selected={category} onSelect={handleCategorySelect} />
        <HymnsList data={filtered} />
      </View>
    );
  }
}
