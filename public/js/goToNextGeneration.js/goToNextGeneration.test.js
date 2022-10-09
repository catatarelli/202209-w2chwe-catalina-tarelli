import gotToNextGeneration from "./goToNextGeneration.js";

describe("Given the function goToNextGeneration", () => {
  describe("When it receives the two-dimensional array [[1, 0, 1], [0, 1, 0], [1, 0, 1]]", () => {
    test("Then it should return a the two-dimensional array [[0, 1, 0], [1, 0, 1], [0, 1, 0]", () => {
      const testArray = [
        [1, 0, 1],
        [0, 1, 0],
        [1, 0, 1],
      ];
      const expectedArray = [
        [0, 1, 0],
        [1, 0, 1],
        [0, 1, 0],
      ];

      const returnedArray = gotToNextGeneration(testArray);

      expect(expectedArray).toStrictEqual(returnedArray);
    });
  });
});
