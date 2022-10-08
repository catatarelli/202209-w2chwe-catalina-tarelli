const newWorld = [];

const createWorld = (rows, columns) => {
  for (let i = 0; i < rows; i++) {
    newWorld[i] = [];
    for (let j = 0; j < columns; j++) {
      if (i === 0 || j === 0 || i === columns - 1 || j === rows - 1) {
        newWorld[i][j] = 0;
      } else {
        newWorld[i][j] = Math.floor(Math.random() * 2);
      }
    }
  }
  return newWorld;
};

export default createWorld;
