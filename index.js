const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
      {
        type: 'input',
        name: 'Title',
        message: 'Enter the title of your project?',
      },
      {
        type: 'input',
        name: 'Description',
        message: 'Give a brief description of your project?',
      },
      {
        type: 'input',
        name: 'Table of contents',
        message: 'What heading will be in your table of contents?',
      },
      {
        type: 'input',
        name: 'Installation',
        message: 'What are the steps required to install your project?',
      },
      {
        type: 'input',
        name: 'Usage',
        message: 'Provide link to deployed page',
      },
      { 
        type: 'input',
        name: 'Contributing',
        message: 'How can developers contribute to this project',
      },
      {
        type: 'input',
        name: 'license',
        message: 'what type of license will this project use',
      },
      {
        type: 'input',
        name: 'Tests',
        message: 'Enter test instructions',
      },
      {
        type: 'input',
        name: 'Questions',
        message: 'Enter your GitHub Username',
      },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(),fileName), data)
}

// function to initialize program
function init() {
inquirer.prompt(questions).then((answers) => writeToFile('tempREADME.md', generateMarkdown(answers)))
}

// function call to initialize program
init();
