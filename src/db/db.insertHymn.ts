import type { hymnt } from "../types/hymnTypes";
import { openDbAsync } from "./dbConection";
import hymnData from "../data/hymnData.json";

export const insertHymns = async () => {
  try {
    const db = await openDbAsync();

    for (const hymn of hymnData) {
      await db.runAsync(
        `INSERT OR IGNORE INTO hymns (id, title, category, duration, content, favorit, save, example)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          hymn.id,
          hymn.title,
          hymn.category.toString(),
          hymn.duration,
          hymn.content,
          0,
          0,
          hymn.example,
        ]
      );
    }
  } catch (err) {
    console.error("Error inserting hymns:( ", err);
  }
};
