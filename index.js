// link inquirer to index.js
const inquirer = require("inquirer");
// const { renderLogo } = require("./lib/shapes");
const Shapes = require("./lib/shapes.js");

// init function
// function init() {
//   renderLogo();
// }

// init();
const newShape = new Shapes();
newShape.run();
