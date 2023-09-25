const inquirer = require("inquirer");
const fs = require("fs");

class Shapes {
  constructor(text, textColor, shapeColor, shape) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    this.shape = shape;
  }

  run() {
    return inquirer
      .prompt([
        {
          type: "list",
          message: "Please select a shape",
          name: "shape",
          choices: ["circle", "triangle", "square"],
          // check if the input are typeof string, yet this is a choice of list here, not necessary to check
          validate: (input) => {
            if (typeof input !== "string") {
              throw new Error("input must be a string");
            }
            return true;
          },
        },
        {
          type: "input",
          message: "Please enter 3 or less characters for the Logo",
          name: "text",
          // check if the input is 3 or fewer characters
          validate: (input) => {
            if (input.length > 3) {
              throw new Error("text must be three or fewer characters");
            }
            return true;
          },
        },
        {
          type: "input",
          message: "Please enter your prefer text color",
          name: "textColor",
        },
        {
          type: "input",
          message: "Please enter your prefer shape's color",
          name: "shapeColor",
        },
      ])
      .then(function (response) {
        runClass(
          response.shape,
          response.text,
          response.textColor,
          response.shapeColor
        );
      });
  }
}

function runClass(shapeSelected, text, textColor, shapeColor) {
  let newCircle = new Circle();
  let newTriangle = new Triangle();
  let newSquare = new Square();
  switch (shapeSelected) {
    case "circle":
      newCircle = new Circle(text, textColor, shapeColor);
      newCircle.renderLogo();
      break;
    case "triangle":
      newTriangle = new Triangle(text, textColor, shapeColor);
      newTriangle.renderLogo();
      break;
    case "square":
      newSquare = new Square(text, textColor, shapeColor);
      newSquare.renderLogo();
      break;
  }
}
// Create a Circle class constructor and inherit from Shapes class
class Circle extends Shapes {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  renderLogo() {
    fs.writeFile(
      "./logo.svg",
      `
      <svg
        version="1.1"
        width="300"
        height="200"
        xmlns="http://www.w3.org/2000/svg">
        

        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
  
        <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">
          ${this.text}
        </text>
      </svg>`,
      (err) => (err ? console.error(err) : console.log("Generated logo.svg"))
    );
  }
}
// Create a Triangle class constructor and inherit from Shapes class
class Triangle extends Shapes {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  renderLogo() {
    fs.writeFile(
      "./logo.svg",
      `
      <svg
        version="1.1"
        width="300"
        height="200"
        xmlns="http://www.w3.org/2000/svg">
      
        <polygon points="150, 25 260, 195 40, 195" fill="${this.shapeColor}" />

        <text x="150" y="175" font-size="60" text-anchor="middle" fill="${this.textColor}">
          ${this.text}
        </text>
      </svg>`,
      (err) => (err ? console.error(err) : console.log("Generated logo.svg"))
    );
  }
}
// Create a Square class constructor and inherit from Shapes class
class Square extends Shapes {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  renderLogo() {
    fs.writeFile(
      "./logo.svg",
      `
      <svg
        version="1.1"
        width="300"
        height="200"
        xmlns="http://www.w3.org/2000/svg">
      
        <polygon points="50, 25 250, 25 250, 200 50, 200" fill="${this.shapeColor}"/>

        <text x="150" y="130" font-size="60" text-anchor="middle" fill="${this.textColor}">
          ${this.text}
        </text>
      </svg>`,
      (err) => (err ? console.error(err) : console.log("Generated logo.svg"))
    );
  }
}

module.exports = Shapes;
module.exports = Circle;
module.exports = Triangle;
module.exports = Square;
