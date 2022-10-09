import createGrid from "../createGrid/createGrid.js";

const startButton = document.querySelector(".start-button");

const addEventListeners = () => {
  startButton.addEventListener("click", createGrid);
};

export default addEventListeners;
