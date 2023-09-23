const inquirer = require("inquirer");
const fs = require("fs");

class Shapes {
  constructor(text, textColor, shape, shapeColor) {
    if (text.length > 3) {
      throw new Error("text must be less than three characters");
    }
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  }
}

function renderLogo() {
  fs.writeFile(
    "./index.html",
    `
    <svg
      version="1.1"
      width="300"
      height="200"
      xmlns="http://www.w3.org/2000/svg">
    
      <circle cx="150" cy="100" r="80" fill="green" />

      <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">
        SVG
      </text>
    </svg>`,
    (err) => (err ? console.error(err) : console.log("Logo logged!"))
  );
}

module.exports = { renderLogo, Shapes };
