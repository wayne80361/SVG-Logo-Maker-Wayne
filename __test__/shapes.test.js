const Shapes = require("../lib/shapes.js");
// const Triangle = require("./shapes.js");
// const Circle = require("./shapes.js");
// const Square = require("./shapes.js");
// const testFunction = require("./Arithemtic.js");
// const { renderCircle } = require("./Arithemtic.js");
// const inquirer = require("inquirer");
const fs = require("fs");

// describe("Shapes", () => {
//   describe("render Circle", () => {
//     it("should generate a valid SVG file content for a Circle", async () => {
//       // Arrange
//       const circle = new Shapes.Circle("", "", "blue");

//       // Act
//       circle.renderLogo();
//       const svgContent = await fs.promises.readFile("./logo.svg", "utf-8");

//       // Assert
//       expect(svgContent).toContain(
//         '<circle cx="150" cy="100" r="80" fill="blue" />'
//       );
//     });

//     it("should generate a valid SVG file content for a Triangle", async () => {
//       // Arrange
//       const triangle = new Shapes.Triangle("", "", "green");

//       // Act
//       triangle.renderLogo();
//       const svgContent = await fs.promises.readFile("./logo.svg", "utf-8");

//       // Assert
//       expect(svgContent).toContain(
//         '<polygon points="150, 25 260, 195 40, 195" fill="green" />'
//       );
//     });
//   });
// });

describe("Shapes", () => {
  describe("render Circle", () => {
    it("should generate a valid SVG file content for a Circle", async () => {
      // Arrange
      const circle = new Shapes.Circle("A", "black", "blue");
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
      const triangle = new Shapes.Triangle("B", "red", "green");
      // Act
      triangle.renderLogo();
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
      const square = new Shapes.Square("B", "red", "orange");
      // Act
      square.renderLogo();
      await new Promise((resolve) => setTimeout(resolve, 650));
      const svgContent = await fs.promises.readFile("./logo.svg", "utf-8");
      // Assert
      expect(svgContent).toContain(
        '<polygon points="50, 25 250, 25 250, 200 50, 200" fill="orange"/>'
      );
    });
  });
});
