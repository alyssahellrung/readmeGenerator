const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./utils/generateMarkdown");

  inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "What is your GitHub username?"
  },
  {
    type: "input",
    name: "title",
    message: "Project title: "
  },
  {
    type: "input",
    name: "description",
    message: "Write a short description of your project: "
  },
  {
    type: "input",
    name: "installation",
    message: "Installation instructions: "
  },
  {
    type: "input",
    name: "usage",
    message: "How is this program used?"
  },
  {
    type: "list",
    name: "license",
    message: "What license are you using?",
    choices: [
      "MIT",
      "Apache",
      "BSD",
      "No license"
    ]
  },
  {
    type: "input",
    name: "contributing",
    message: "How to contribute: "
  },
  {
    type: "input",
    name: "tests",
    message: "Write about your tests here: "
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?"
  }
]).then(function(data) {
  console.log(data);

  fs.writeFile("README.md", markdown(data), function(err, data) {

  }
  )
});


function writeToFile(fileName, data) {
}

function init() {

}

init();
