import createWorld from "./createWorld.js";

describe("Given the function createWorld", () => {
  describe("When it receives the values 40 and 40", () => {
    test("Then it should return a two-dimensional array of 40 by 40 filled randomly with 1 or 0 in each possition", () => {
      const rows = 40;
      const columns = 40;
      const totalArrays = 40;
      const shouldNotContainValues = [2, 3, 4, 5, 6, 7, 8, 9];

      const result = createWorld(rows, columns);

      expect(result.length).toBe(totalArrays);
      shouldNotContainValues.map((value) =>
        expect(result).not.toContain(value)
      );
    });
  });
});
