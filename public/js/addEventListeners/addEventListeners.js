import createGrid from "../createGrid/createGrid.js";

const clearButton = document.querySelectorAll(".clear-button");
const forwardButton = document.querySelector("forward-button");
const startButton = document.querySelector(".start-button");

const addEventListeners = () => {
  startButton.addEventListener("click", createGrid);
};

export default addEventListeners;
