import { openDbAsync } from "./dbConection";

export const toggleFavorite = async (id: number, currentStatus: number) => {
  const db = await openDbAsync();
  const newStatus = currentStatus === 1 ? 0 : 1;

  if (newStatus == 1) {
    console.log("El himno se agrogo a favoritos");
  } else {
    console.log("El himno se elimina de favoritos");
  }

  await db.runAsync(`UPDATE hymns SET favorit = ? WHERE id = ?`, [
    newStatus,
    id,
  ]);

  return newStatus;
};
