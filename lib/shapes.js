const inquirer = require("inquirer");
const fs = require("fs");

class Shapes {
  constructor(text, textColor, shapeColor, shape) {
    // if (text.length > 3) {
    //   throw new Error("text must be less than three characters");
    // }
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    this.shape = shape;
  }
}

class Circle extends Shapes {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  renderLogo() {
    fs.writeFile(
      "./index.html",
      `
      <svg
        version="1.1"
        width="300"
        height="300"
        xmlns="http://www.w3.org/2000/svg">
        

        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
  
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">
          ${this.text}
        </text>
      </svg>`,
      (err) => (err ? console.error(err) : console.log("Logo logged!"))
    );
  }
}

class Triangle extends Shapes {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  renderLogo() {
    fs.writeFile(
      "./index.html",
      `
      <svg
        version="1.1"
        width="300"
        height="300"
        xmlns="http://www.w3.org/2000/svg">
      
        <polygon points="150, 0 300, 300 0, 300" fill="${shapeColor}" />

        <text x="150" y="200" font-size="60" text-anchor="middle" fill="${this.textColor}">
          ${this.text}
        </text>
      </svg>`,
      (err) => (err ? console.error(err) : console.log("Logo logged!"))
    );
  }
}

class Square extends Shapes {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  renderLogo() {
    fs.writeFile(
      "./index.html",
      `
      <svg
        version="1.1"
        width="300"
        height="300"
        xmlns="http://www.w3.org/2000/svg">
      
        <polygon points="0, 0 300, 0 300, 300 0, 300" fill="${this.shapeColor}"/>

        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">
          ${this.text}
        </text>
      </svg>`,
      (err) => (err ? console.error(err) : console.log("Logo logged!"))
    );
  }
}

// function renderLogo() {
//   fs.writeFile(
//     "./index.html",
//     `
//     <svg
//       version="1.1"
//       width="300"
//       height="200"
//       xmlns="http://www.w3.org/2000/svg">

//       <circle cx="150" cy="100" r="80" fill="green" />

//       <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">
//         SVG
//       </text>
//     </svg>`,
//     (err) => (err ? console.error(err) : console.log("Logo logged!"))
//   );
// }

// const newCircle = new Circle("TET", "red", "purple");
// newCircle.renderLogo();

module.exports = Circle;
module.exports = Triangle;
module.exports = Square;
