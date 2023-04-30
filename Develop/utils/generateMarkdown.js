// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  ## Title

  ${data.title}

  ## Description

  ${data.description}

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

  ${data.install}

  ## Usage

  ${data.instructions}



  ## Features

  ${data.features}

  ## Contribute

  ${data.contribute}

 
  ## GitHub

  <a href="https://www.github.com/${data.username}" target="_blank">Follow this link to visit ${data.username}'s GitHub profile</a>

  ## Credits

  ${data.credit}

  ## Contact

  ${data.contact}

  ## Licensing

  ${data.licensing}
  
`;
}

module.exports = generateMarkdown;