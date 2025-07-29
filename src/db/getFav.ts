import { openDbAsync } from "./dbConection";
import { hymnt } from "../types/hymnTypes";

export const getFav = async (): Promise<hymnt[]> => {
  const db = await openDbAsync();

  const result = await db.getAllAsync<hymnt>(
    "SELECT * FROM hymns WHERE favorit = 1"
  );
  console.log("Himnos en favoritos " + result.length);

  return result;
};
