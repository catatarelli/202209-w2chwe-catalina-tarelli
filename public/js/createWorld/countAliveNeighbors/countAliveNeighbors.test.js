import countAliveNeighbors from "./countAliveNeighbors.js";

describe("Given the function countAliveNeighbors", () => {
  describe("When it receives a grid of 3 by 3 with values [1, 0, 1] [0, 1, 0] [1, 1, 0]", () => {
    test("Then it should return 4, the sum of neighbors that the cell in the center has", () => {
      const grid = [
        [1, 0, 1],
        [0, 1, 0],
        [1, 1, 0],
      ];
      const expectedNeighbors = 4;

      const result = countAliveNeighbors(grid);

      expect(result).toBe(expectedNeighbors);
    });
  });
});
