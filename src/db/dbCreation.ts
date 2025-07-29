import { openDbAsync } from "./dbConection";
import * as SQLite from "expo-sqlite";

export const createHymnsTable = async () => {
  const db = await openDbAsync();

  /*   await db.execAsync(`DROP TABLE IF EXISTS hymns;`); //Voy a quitar esto en produccion */
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS hymns (
      id        INTEGER PRIMARY KEY NOT NULL,
      title     TEXT    NOT NULL,
      category  TEXT    NOT NULL,
      duration  TEXT    NOT NULL,
      content   TEXT    NOT NULL,
      favorit  INTEGER DEFAULT 0,    
      save  INTEGER DEFAULT 0 
    );
  `);
};
