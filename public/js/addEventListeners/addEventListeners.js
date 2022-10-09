import { createGrid } from "../createGrid/createGrid.js";
import showNextGenerationGrid from "../showNextGenerationGrid/showNextGenerationGrid.js";

const startButton = document.querySelector(".start-button");
const forwardButton = document.querySelector(".forward-button");

const addEventListeners = () => {
  startButton.addEventListener("click", createGrid);
  forwardButton.addEventListener("click", showNextGenerationGrid);
};

export default addEventListeners;
