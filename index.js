// link inquirer to index.js
const inquirer = require("inquirer");
const { Shapes } = require("./lib/shapes.js");

// init();
const newShape = new Shapes();
newShape.run();
