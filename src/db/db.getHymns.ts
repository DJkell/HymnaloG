import { openDbAsync } from "./dbConection";
import { hymnt } from "../types/hymnTypes";

export const getAllHymns = async (): Promise<hymnt[]> => {
  const db = await openDbAsync();

  const result = await db.getAllAsync<hymnt>("SELECT * FROM hymns");
  console.log("Himnos:", result.length);

  return result;
};
