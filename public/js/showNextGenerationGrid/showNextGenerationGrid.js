import goToNextGeneration from "../goToNextGeneration/goToNextGeneration.js";
import { currentWorld } from "../createGrid/createGrid.js";

let currentGrid = currentWorld;
let nextGrid = [];

const showNextGenerationGrid = () => {
  nextGrid = goToNextGeneration(currentGrid);
  for (let i = 0; i < nextGrid.length; i++) {
    for (let j = 0; j < nextGrid[i].length; j++)
      if (nextGrid[i][j] === 1) {
        document
          .querySelector(`.cell--${i}-${j}`)
          .classList.remove("cell--dead");
        document.querySelector(`.cell--${i}-${j}`).classList.add("cell--alive");
      } else {
        document
          .querySelector(`.cell--${i}-${j}`)
          .classList.remove("cell--alive");
        document.querySelector(`.cell--${i}-${j}`).classList.add("cell--dead");
      }
  }
  currentGrid = nextGrid;
};

export default showNextGenerationGrid;
