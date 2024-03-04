// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  ##Title
  
  ${data.Title}

  ## Description

  ${data.Description}
  
  ## Table of Contents 

  ${data.Tableofcontents}
  
  
  ## Installation

  ${data.Installation}

  
  ## Usage

  ${data.Usage}

  ## Contributing

  ${data.Contributing}
 
  ## License
  
  ![badmath](https://img.shields.io/license-${data.license}-green.svg)
  
  ${data.license}
  
  ## Tests

  ${data.Tests}
  
  ## Questions

  ${data.Questions}




`;
}

module.exports = generateMarkdown;
