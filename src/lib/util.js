import { POS } from "./constants";
import dictionary from "./pos-dictionary.json";

export const generate = (input) =>
  input
    .split("")
    .map((char) => {
      const n = parseInt(char, 10);
      if (isNaN(n)) {
        return char;
      } else {
        const posInt = n > 0 ? n : randomRange(1, 9);
        const pos = POS[Object.keys(POS)[posInt]];
        const words = dictionary[pos];
        const randomIndex = randomRange(0, words.length - 1);
        return words[randomIndex];
      }
    })
    .join("");

function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
