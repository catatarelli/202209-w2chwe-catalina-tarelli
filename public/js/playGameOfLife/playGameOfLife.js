import createWorld from "../createWorld/createWorld.js";
import goToNextGeneration from "../goToNextGeneration/goToNextGeneration.js";

let playing = true;
const rows = 40;
const columns = 40;
let currentWorld = [];
let nextWorld = [];

const playGameOfLife = () => {
  currentWorld = createWorld(rows, columns);
  nextWorld = goToNextGeneration(currentWorld);
  currentWorld = nextWorld;
  if (currentWorld.every((row) => row.every((cell) => cell === 0))) {
    playing = false;
    if (playing === false) {
      return;
    }
    while (playing === true) {
      nextWorld = goToNextGeneration(currentWorld);
      currentWorld = nextWorld;
    }
  }
};

export default playGameOfLife;
