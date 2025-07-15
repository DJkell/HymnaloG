import * as SQLite from "expo-sqlite";

export const openDbAsync = async () => {
  const db = await SQLite.openDatabaseAsync("Himnario.db");
  return db;
};
