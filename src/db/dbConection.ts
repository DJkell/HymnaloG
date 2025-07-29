import * as SQLite from "expo-sqlite";

let db: SQLite.SQLiteDatabase | null = null;

export const openDbAsync = async (): Promise<SQLite.SQLiteDatabase> => {
  if (!db) {
    db = await SQLite.openDatabaseAsync("Himnario.db");
  }
  return db;
};
