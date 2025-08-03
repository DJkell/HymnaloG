import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Button,
  TouchableOpacity,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { openDbAsync } from "@/db/dbConection";
import { openDatabaseAsync } from "expo-sqlite";
import { hymnt } from "@/types/hymnTypes";
import { useRouter } from "expo-router";
import { toggleFavorite } from "@/db/shangeFav";
import { useFocusEffect } from "expo-router";
import React, { useCallback } from "react";
import BtnBack from "@/components/BtnBack";
import BtnFav from "@/components/btnfavorite";
import { rgbaColor } from "react-native-reanimated/lib/typescript/Colors";
import CopyBtn from "@/components/CopyBtn";
import BtnBasic from "@/components/BtnBasic";

("/app/hymn/[id].tsx");

export const unstable_settings = {
  drawer: null,
};

export default function HymnContent() {
  const { id } = useLocalSearchParams();
  const [hymn, setHymn] = useState<hymnt | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useFocusEffect(
    useCallback(() => {
      const loadHymns = async () => {
        try {
          const db = await openDbAsync();
          const result = await db.getFirstAsync<hymnt>(
            "SELECT * FROM Hymns WHERE id = ?",
            [Number(id)]
          );

          setHymn(result);
        } catch (err) {
          console.error("Error loading hymn:", err);
        } finally {
          setLoading(false);
        }
      };
      loadHymns();
    }, [id])
  );

  const handleFavoriteToggle = async () => {
    if (!hymn) return;
    const newStatus = await toggleFavorite(hymn.id, hymn.favorit);
    setHymn({ ...hymn, favorit: newStatus });
    console.log(`El Himno #${hymn.id} se le cambia el estado de favoritos`);
  };

  if (loading || !hymn) {
    return <ActivityIndicator size="large" style={{ marginTop: 40 }} />;
  }

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Text style={styles.num}>{`Himno #${hymn.id}`}</Text>
          <View
            style={{
              flexDirection: "row",
              gap: 15,
              alignItems: "center",
              minWidth: "50%",
              backgroundColor: "black",
            }}
          >
            <CopyBtn hymnTitle={hymn.title} hymnContent={hymn.content} />
            <BtnFav onPressP={handleFavoriteToggle} State={hymn.favorit} />
          </View>
        </View>

        <Text style={styles.title}>{hymn.title}</Text>
        <Text style={styles.category}>{`${hymn.category} `}</Text>
        <Text style={styles.lyrics}>{hymn.content}</Text>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    paddingBottom: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  num: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
    color: "rgba(88, 88, 88, 0.7)",
  },
  category: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#555",
    marginBottom: 16,
  },
  lyrics: {
    fontSize: 18,
    lineHeight: 28,
  },
});
