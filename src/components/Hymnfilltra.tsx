import { useRouter } from "expo-router";

export default function getRandomId() {
  return Math.floor(Math.random() * 5) + 1;
}
