/* import { openDbAsync } from "./dbConection";
import { hymnt } from "../types/hymnTypes";

export const getHymns = async (id: number): Promise<hymnt | null> => {
  const db = await openDbAsync();
  // const Nrandom = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

  const result = await db.getFirstAsync<hymnt>(
    "SELECT * FROM hymns WHERE id = ?",
    [id]
  );

  return result || null;
};
 */
