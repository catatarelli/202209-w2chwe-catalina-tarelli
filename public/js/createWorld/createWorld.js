const newWorld = [];

const createWorld = (rows, columns) => {
  for (let i = 0; i < rows; i++) {
    newWorld[i] = [];
    for (let j = 0; j < columns; j++) {
      newWorld[i][j] = Math.floor(Math.random() * 2);
    }
  }
  return newWorld;
};

export default createWorld;
