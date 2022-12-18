import { POS } from "./constants";
import dictionary from "./pos-dictionary.json";

export const generate = (input) =>
  input
    .split("")
    .map((char, i) => {
      const n = parseInt(char, 10);
      if (isNaN(n)) {
        return char;
      } else {
        const posInt = n > 0 ? n : randomRange(1, 9);
        const pos = POS[Object.keys(POS)[posInt]];
        const words = dictionary[pos];
        const randomIndex = randomRange(0, words.length - 1);
        const word = words[randomIndex];
        const finalWord =
          word.indexOf(";") === -1 ? word : word.slice(0, word.indexOf(";"));
        return i === 0
          ? finalWord.charAt(0).toUpperCase() + finalWord.toLowerCase().slice(1)
          : finalWord.toLowerCase();
      }
    })
    .join("");

function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
