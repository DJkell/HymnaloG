import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { getFav } from "@/db/getFav";
import { hymnt } from "@/types/hymnTypes";
import HymnsList from "@/components/HymnCard";
import { useFocusEffect } from "expo-router";
import React from "react";
import CategoryFilter from "@/components/CategoryFilter";
import Btnfiltrer from "@/components/Btnfiltro";
import BtnFiltrer from "@/components/Btnfiltro";
import BtnBasic from "@/components/BtnBasic";

export default function FavoriteHymns() {
  const [HymnsF, setHymnsF] = useState<hymnt[]>([]);
  const [filtered, setFiltered] = useState<hymnt[]>([]);
  const [category, setCategory] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

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

  const handleBtnFiltrer = () => {
    setShowFilters((prev) => !prev);
  };

  if (filtered.length == 0) {
    return (
      <View style={styles.container}>
        <View style={{ padding: 10 }}>
          <Btnfiltrer
            showFilters={showFilters}
            onSelect={handleBtnFiltrer}
            height={40}
            width={"100%"}
          />

          {showFilters && (
            <CategoryFilter
              selected={category}
              onSelect={handleCategorySelect}
            />
          )}
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 20 }}>Aún no tienes himnos guardados</Text>
          <BtnBasic
            text="BUSCAR"
            link="/HymnSearchScreen"
            width={"60%"}
            bgColor="#895D3F"
            TextColor="#E6DED4"
            height={50}
            marginT={30}
          />
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={{ padding: 10 }}>
          <Btnfiltrer
            showFilters={showFilters}
            onSelect={handleBtnFiltrer}
            height={40}
            width={"100%"}
          />

          {showFilters && (
            <CategoryFilter
              selected={category}
              onSelect={handleCategorySelect}
            />
          )}
        </View>

        <HymnsList data={filtered} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    /*     backgroundColor: "#3C2A4D", */
    flex: 1,
  },
});
