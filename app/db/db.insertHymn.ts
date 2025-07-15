import type { hymnt } from "../src/types/hymnTypes";
import { openDbAsync } from "./dbConection";
import hymnData from "../src/data/hymnData.json";

export const insertHymns = async () => {
  const db = await openDbAsync();

  for (const hymn of hymnData) {
    await db.runAsync(
      `INSERT OR IGNORE INTO hymns (id, title, category, duration, content)
       VALUES (?, ?, ?, ?, ?)`,
      [hymn.id, hymn.title, hymn.category, hymn.duration, hymn.content]
    );
  }
};
