import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import type { hymnt } from "@/types/hymnTypes";
import { getHymns } from "@/db/dbQuery";

export default function HymnsFull() {
  const [hymn, setHymn] = useState<hymnt | null>(null);

  useEffect(() => {
    (async () => {
      const data = await getHymns(1);
      console.log("Himno cargado:", data);
      setHymn(data);
    })();
  }, []);

  if (!hymn) {
    return (
      <View>
        <Text>Cargando himnoos...</Text>
      </View>
    );
  }

  return <Text>{hymn.content}</Text>;
}
