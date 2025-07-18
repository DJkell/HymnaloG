export interface hymnt {
  id: number;
  title: string;
  content: string;
  category: "Alegre" | "solemne";
  duration: "Corto" | "Largo";
  favorit: number;
  save: number;
}
