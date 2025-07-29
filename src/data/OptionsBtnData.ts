import type { RootStackParamList } from "navigation/types";
import type { ListItemsOp } from "@/types/ophomeTypes";

export const dataBtnHome: ListItemsOp[] = [
  {
    id: "1",
    label: "Buscar Himno",
    screenPt: "/HymnSearchScreen",
    btnColor: "rgba(230, 222, 212, 1)",
  },
  {
    id: "2",
    label: "Favoritos",
    screenPt: "./FavoriteScreen",
    btnColor: "rgba(230, 222, 212, 1)",
  },
  {
    id: "3",
    label: "Descubrir",
    screenPt: "",
    btnColor: "rgba(230, 222, 212, 1)",
  },
  {
    id: "4",
    label: "Ajustes",
    screenPt: "./searchView",
    btnColor: "rgba(230, 222, 212, 1)",
  },
];
