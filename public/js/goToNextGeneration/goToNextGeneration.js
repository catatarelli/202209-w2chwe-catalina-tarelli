let nextGeneration = [];

const goToNextGeneration = (grid) => {
  nextGeneration = grid.map((array) => [...array]);
  const rows = grid.length;
  const columns = grid[0].length;
  for (let column = 0; column < grid.length; column++) {
    for (let row = 0; row < grid[column].length; row++) {
      const currentCell = grid[column][row];
      let sumNeighbors = 0;

      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          if (i === 0 && j === 0) {
            continue;
          }

          const x = column + i;
          const y = row + j;

          if (x >= 0 && y >= 0 && x < columns && y < rows) {
            const currentNeighbor = grid[column + i][row + j];
            sumNeighbors += currentNeighbor;
          }
        }
      }

      if (currentCell === 0 && sumNeighbors === 3) {
        nextGeneration[column][row] = 1;
      } else if (currentCell === 1 && (sumNeighbors < 2 || sumNeighbors > 3)) {
        nextGeneration[column][row] = 0;
      } else {
        nextGeneration[column][row] = currentCell;
      }
    }
  }
  return nextGeneration;
};

export default goToNextGeneration;
