const rows = 40;
const columns = 40;
let newWorld = [];

const createWorld = (newRows, newColumns) => {
  for (let i = 0; i < newRows; i++) {
    newWorld[i] = [];
    for (let j = 0; j < newColumns; j++) {
      newWorld[i][j] = Math.floor(Math.random() * 2);
    }
  }
  return newWorld;
};

newWorld = createWorld(rows, columns);

export default createWorld;
