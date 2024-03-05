const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
      {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Give a brief description of your project?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How will this app be used?',
      },
      { 
        type: 'input',
        name: 'contributing',
        message: 'Who are the contributors?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'what type of license will this project use',
        choices: ["MIT","Appachi","IBM"]
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please enter your Github username',
      }
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
