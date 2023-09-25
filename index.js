// link inquirer to index.js
const inquirer = require("inquirer");
// const { renderLogo } = require("./lib/shapes");
const Circle = require("./lib/shapes.js");
const Shapes = require("./lib/shapes.js");
const Triangle = require("./lib/shapes.js");
const Square = require("./lib/shapes.js");

// init function
// function init() {
//   renderLogo();
// }

// init();
const newCircle = new Circle("ABC", "red", "purple");
newCircle.renderLogo();
