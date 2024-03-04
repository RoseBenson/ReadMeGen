// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  ## Title
  
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

Please reach out via email if you have any questions 

  ${data.Questions}

`;
}

module.exports = generateMarkdown;
