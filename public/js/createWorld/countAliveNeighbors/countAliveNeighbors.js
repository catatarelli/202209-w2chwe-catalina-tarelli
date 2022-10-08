const countAliveNeighbors = (currentGrid) => {
  let aliveNeighbors = 0;
  const columns = 3;
  const rows = 3;
  for (let x = 1; x < columns - 1; x++) {
    for (let y = 1; y < rows - 1; y++) {
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          aliveNeighbors += currentGrid[x + i][y + j];
        }
      }
      aliveNeighbors -= currentGrid[x][y];
    }
  }
  return aliveNeighbors;
};

export default countAliveNeighbors;
