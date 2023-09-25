const Shapes = require("./shapes.js");
// const Triangle = require("./shapes.js");
const Circle = require("./shapes.js");
// const Square = require("./shapes.js");
// const testFunction = require("./Arithemtic.js");
// const { renderCircle } = require("./Arithemtic.js");
// const inquirer = require("inquirer");
const fs = require("fs");

describe("Circle", () => {
  describe("render Circle", () => {
    it("should generate a valid SVG file content for a Circle", async () => {
      // Arrange
      const circle = new Shapes.Circle("", "", "blue");
      // Act
      circle.renderLogo();
      // Assert
      const svgContent = await fs.promises.readFile(
        "./logo.svg",
        "utf-8",
        (err) => (err ? console.error(err) : console.log("Generated logo.svg"))
      );
      // Your assertion logic here to compare svgContent with expected SVG content.
      // You should determine what the expected SVG content should be for a circle.
      // Example:
      expect(svgContent).toContain(
        '<circle cx="150" cy="100" r="80" fill="blue" />'
      );
    });
  });
});
