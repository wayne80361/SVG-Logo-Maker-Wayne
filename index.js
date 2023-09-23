// link inquirer to index.js
const inquirer = require("inquirer");
const { renderLogo } = require("./lib/shapes");

// init function
function init() {
  renderLogo();
}

init();
