//Voy a quitar esto en produccion

import { openDbAsync } from "./dbConection";

export const resetHymns = async () => {
  const db = await openDbAsync();
  await db.execAsync("DELETE FROM hymns");
};
