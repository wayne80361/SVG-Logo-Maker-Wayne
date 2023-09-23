// link inquirer to index.js
const inquirer = require("inquirer");
const { generateLogo } = require("./lib/shapes");

// init function
function init() {
  generateLogo();
}

init();
