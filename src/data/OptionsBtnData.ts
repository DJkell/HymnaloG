import type { RootStackParamList } from "navigation/types";
import type { ListItemsOp } from "@/types/ophomeTypes";

export const dataBtnHome: ListItemsOp[] = [
  {
    id: "1",
    label: "Buscar Himno",
    screenPt: "/HymnSearchScreen",
    btnColor: "#895D3F",
    Icon: "search",
  },
  {
    id: "2",
    label: "Favoritos",
    screenPt: "./FavoriteScreen",
    btnColor: "#895D3F",
    Icon: "heart",
  },
  {
    id: "3",
    label: "Descubrir",
    screenPt: "",
    btnColor: "#895D3F",
    Icon: "book",
  },
  {
    id: "4",
    label: "Ajustes",
    screenPt: "./SettingsScreen",
    btnColor: "#895D3F",
    Icon: "settings",
  },
];
