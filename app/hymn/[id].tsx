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
import React, { useCallback, useContext } from "react";
import BtnBack from "@/components/BtnBack";
import BtnFav from "@/components/btnfavorite";
import { rgbaColor } from "react-native-reanimated/lib/typescript/Colors";
import CopyBtn from "@/components/CopyBtn";
import BtnBasic from "@/components/BtnBasic";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Toast from "react-native-root-toast";
import { RootSiblingParent } from "react-native-root-siblings";
import { FONT_MAX, FONT_MIN } from "@/constants/fontLimits";
import { ThemeContext } from "@/context/ThemeContext";

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

  //Configuramos el cambio a favoritos de los hymnos.
  const handleFavoriteToggle = async () => {
    if (!hymn) return;
    const newStatus = await toggleFavorite(hymn.id, hymn.favorit);
    setHymn({ ...hymn, favorit: newStatus });
    hymn.favorit == 0
      ? showCopiedToast(`Himno #${hymn.id} se agregó a favoritos ♥️​`)
      : showCopiedToast(`Himno #${hymn.id} ya no es favorito 💔`);
  };

  if (loading || !hymn) {
    return <ActivityIndicator size="large" style={{ marginTop: 40 }} />;
  }

  //Configuramos el mensajito que sale al copiar texto o guardar en fav
  const showCopiedToast = (Text: string) => {
    Toast.show(`${Text}`, {
      duration: Toast.durations.SHORT,
      position: Toast.positions.CENTER,
      shadow: true,
      animation: true,
      hideOnPress: true,
    });
  };

  //Referenciamos el Contex de los temas
  const themeCtx = useContext(ThemeContext);
  if (!themeCtx) return null;
  const { activeTheme, settings, setFontSize } = themeCtx;

  //Manejo del Size de la fuente
  const handleFontSizeChange = (delta: number) => {
    const newSize = Math.max(
      FONT_MIN,
      Math.min(FONT_MAX, settings.fontSize + delta)
    );
    setFontSize(newSize);
  };

  return (
    <RootSiblingParent>
      <ScrollView
        contentContainerStyle={[
          styles.container,
          { backgroundColor: activeTheme.backgroundColor },
        ]}
      >
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Text
            style={[styles.num, { color: activeTheme.textColor }]}
          >{`Himno #${hymn.id}`}</Text>
          <View
            style={{
              flexDirection: "row",
              gap: 15,
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              name="format-font-size-decrease"
              size={28}
              color={settings.fontSize <= 22.5 ? "red" : activeTheme.titleColor}
              onPress={() => handleFontSizeChange(-1)}
            />
            <MaterialCommunityIcons
              name="format-font-size-increase"
              size={28}
              color={settings.fontSize >= 27 ? "red" : activeTheme.titleColor}
              onPress={() => handleFontSizeChange(1)}
            />
            <CopyBtn
              hymnTitle={hymn.title}
              hymnContent={hymn.content}
              onCopied={() => showCopiedToast(`Himno Copiado 📄​`)}
              color={activeTheme.titleColor}
            />
            <BtnFav
              onPressP={handleFavoriteToggle}
              State={hymn.favorit}
              color={activeTheme.titleColor}
            />
          </View>
        </View>

        <Text
          style={[
            styles.title,
            { color: activeTheme.titleColor, fontSize: settings.fontSize + 2 },
          ]}
        >
          {hymn.title}
        </Text>

        <Text
          style={[
            styles.lyrics,
            { fontSize: settings.fontSize, color: activeTheme.subTitleColor },
          ]}
        >
          {hymn.content}
        </Text>
        <Text
          style={[styles.category, { color: activeTheme.textColor }]}
        >{`${hymn.category} `}</Text>
        <Toast />
      </ScrollView>
    </RootSiblingParent>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    paddingBottom: 100,
  },
  title: {
    fontWeight: "bold",
    marginVertical: 20,
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
    marginTop: 30,
  },
  lyrics: {
    lineHeight: 28,
  },
});
