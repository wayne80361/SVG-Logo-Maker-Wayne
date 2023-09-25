const Shapes = require("./shapes.js");

describe("Shapes", () => {
  describe("test sum", () => {
    it("should take two numbers and add them together", () => {
      // Arrange
      const num1 = 1;
      const num2 = 2;
      const total = 3;
      // Act
      const shapes = new Shapes();
      // Assert
      expect(shapes.sum(num1, num2)).toEqual(total);
    });
  });
});
