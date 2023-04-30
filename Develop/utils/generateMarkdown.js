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
  return
  
  `## Title

  ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

* [Description](#description)

* [Installation](#install)

* [Usage](#instructions)

*[License](#licensing)

* [Contributions](#credit)

* [Tests](#tests)

${renderLicenseLink(data.license)}

* [Questions](#questions)


  ## Install

  ${data.install}

  ## Usage

  ${data.instructions}

  ## Credit

  ${data.credit}


  ## Contributions

  ${data.contribute}

  ## Licensing

  ${data.licensing}

  ## Username

  ${data.username}

  ## Questions?

  ${data.questions}

`;
}

module.exports = generateMarkdown;
