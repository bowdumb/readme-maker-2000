// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(license) {
  
  if(license === "Apache License 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  if(license === "GPL License/General Public License v3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }
  if(license === "BSD License, 2-clause") {
    return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
  }
  if(license === "BSD License, 3-clause") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  }
  if(license === "The MIT License") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  if (license === "The Unlicense") {
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  }
  if(license === "") {
  return "";
  }

  };
  
  


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "Apache License 2.0") {
    return "<a href=https://opensource.org/license/apache-2-0/>Apache License 2.0</a>"
  }
  if(license === "GPL License/General Public License v3.0") {
    return "<a href=https://www.gnu.org/licenses/gpl-3.0>GPL License/General Public License v3.0</a>"
  }
  if(license === "BSD License, 2-clause") {
    return "<a href=https://opensource.org/license/bsd-2-clause/>BSD License, 2-clause</a>"
  }
  if(license === "BSD License, 3-clause") {
    return "<a href=https://opensource.org/license/bsd-3-clause/>BSD License, 3-clause</a>"
  }
  if(license === "The MIT License") {
    return "<a href=https://opensource.org/license/mit/>The MIT License</a>"
  }
  if (license === "The Unlicense") {
    return "<a href=https://unlicense.org/>The Unlicense</a>"
  }
  if(license === "") {
  return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// The generateMarkdown function uses readmeMarkdown as a parameter, and provides a template for how the README.md will format.
// Below, template literals are used to inject their corresponding values as determined in the Inquirer prompts within the init function found in the index.js
// file.
function generateMarkdown(readmeMarkdown) {
  return `
  
  # Title

  ${readmeMarkdown.title}

  ## Licensing

  ${readmeMarkdown.licensing}
  
  ${renderLicenseBadge(readmeMarkdown.licensing)}

  ${renderLicenseLink(readmeMarkdown.licensing)}

  
  ## Description

  ${readmeMarkdown.description}

  ## Table of Contents

  [Installation](#installation)
  
  [Usage](#usage)

  [Features](#features)

  [Contribution](#contribute)

  [Creator's GitHub Profile](#github)

  [Credits](#credits)

  [Contact](#contact)

  [Licensing](#licensing)

**************************

  ## Installation

  ${readmeMarkdown.install}

  ## Usage

  ${readmeMarkdown.instructions}


  ## Features

  ${readmeMarkdown.features}

  ## Contribute

  ${readmeMarkdown.contribute}

  ## Tests

  ${readmeMarkdown.tests}

  ## GitHub

  <a href="https://www.github.com/${readmeMarkdown.username}" target="_blank">Follow this link to visit ${readmeMarkdown.username}'s GitHub profile</a>

  ## Credits

  ${readmeMarkdown.credit}

  ## Contact

  ${readmeMarkdown.contact}

 
  
`;
}

module.exports = generateMarkdown;


