const Shapes = require("../lib/shapes.js");
const fs = require("fs");

describe("Shapes", () => {
  describe("render Circle", () => {
    it("should generate a valid SVG file content for a Circle", async () => {
      // Arrange
      const circle = new Shapes.Circle("", "", "blue");
      // Act
      circle.renderLogo();
      const svgContent = await fs.promises.readFile("./logo.svg", "utf-8");
      // Assert
      expect(svgContent).toContain(
        '<circle cx="150" cy="100" r="80" fill="blue" />'
      );
    });
  });

  describe("render Triangle", () => {
    it("should generate a valid SVG file content for a Triangle", async () => {
      // Arrange
      const triangle = new Shapes.Triangle("", "", "green");
      // Act
      triangle.renderLogo();
      // delay 350m to avoid asynchronous reading on the same file issue
      await new Promise((resolve) => setTimeout(resolve, 350));
      const svgContent = await fs.promises.readFile("./logo.svg", "utf-8");
      // Assert
      expect(svgContent).toContain(
        '<polygon points="150, 25 260, 195 40, 195" fill="green" />'
      );
    });
  });

  describe("render Square", () => {
    it("should generate a valid SVG file content for a Square", async () => {
      // Arrange
      const square = new Shapes.Square("", "", "orange");
      // Act
      square.renderLogo();
      // delay 650m to avoid asynchronous reading on the same file issue
      await new Promise((resolve) => setTimeout(resolve, 650));
      const svgContent = await fs.promises.readFile("./logo.svg", "utf-8");
      // Assert
      expect(svgContent).toContain(
        '<polygon points="50, 25 250, 25 250, 200 50, 200" fill="orange"/>'
      );
    });
  });
});
