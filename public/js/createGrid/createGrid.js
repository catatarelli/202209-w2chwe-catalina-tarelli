import createWorld from "../createWorld/createWorld.js";

export let currentWorld = [];

export const createGrid = () => {
  const rows = 10;
  const columns = 10;
  currentWorld = createWorld(rows, columns);
  for (let i = 0; i < currentWorld.length; i++) {
    for (let j = 0; j < currentWorld[i].length; j++)
      if (currentWorld[i][j] === 1) {
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
  return currentWorld;
};
