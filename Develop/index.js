const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
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
    type: "input",
    name: "version",
    message: "What version of the project is this?"
  },
  {
    type: "list",
    name: "license",
    message: "What license are you using?",
    choices: [
      "MIT",
      "Apache",
      "BSD",
      "ISC",
      "No_License"
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
  }
  
]).then(function(data) {
  console.log(data);

  // const queryUrl = `https://api.github.com/users/${data.name}`;

  // axios.get(queryUrl).then(function(res) {
  //   const myObject = {"email": res.email, "image": res.avatar_url}; 
  //   });



  fs.writeFile("README.md", markdown(data), function(err, data) {
    if (err) {
      throw err;
    } else
    console.log("Success!");
  })
});




function init() {

}

init();
