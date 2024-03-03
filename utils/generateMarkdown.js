// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

 ${data.description}
  
  ## Table of Contents 
  
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
  
  ## Usage
  
  
  ## Credits
 
  ## Badges
  
  ![badmath](https://img.shields.io/license-${data.license}-green.svg)
  
  ${data.license}
  
  ## Features

  ${data.Features}

  
  ## How to Contribute
  
  
  
  ## Tests




`;
}

module.exports = generateMarkdown;
