// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ## Description

  ${data.description}
  
  ## Table of Contents 

 - [Installation](#Installation)
 - [Usage](#Usage)
 - [Contributing](#Contributing)
 - [Lisence](#Lisence)
 - [Tests](#Tests)
 - [Questions](#Questions)
  
  
  ## Installation

  ${data.installation}

  
  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contributing}
 
  ## License
  
  ![GitHub](https://img.shields.io/badge/license-${data.license}-green.svg)
  
  ${data.license}
  
  ## Tests

  ${data.tests}
  
  ## Questions

Please reach out via email:${data.email} if you have any questions.

 [My GitHub](https://${data.github}) This is my GitHub if you would like to look at my other work

`;
}

module.exports = generateMarkdown;
