

// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
 const renderLicenseBadge = license =>  
 {' ![badge](https://img.shields.io/badge/license-${data.license})'}

renderLicenseBadge();

// // // TODO: Create a function that returns the license link
// // // If there is no license, return an empty string
 const renderLicenseLink = license => {
   return " ";
 }
 renderLicenseLink();

// // // TODO: Create a function that returns the license section of README
// // // If there is no license, return an empty string
 const renderLicenseSection = license => {
   return " "
 }
 renderLicenseSection();


// // TODO: Create a function to generate markdown for README
function generateMarkdown (data) {
  return `
# Your Project Title
${data.name}

## Description 

${data.description}

## Table of Contents (Optional)

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contribor)
* [GitHub](#github)


## Installation
${data.installation}

## Usage 

${data.usage}


## License
${renderLicenseBadge(data.license)}

----------------

🏆 

## Badges



![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)


## Contributing
 The [Contributor Covenant](https://www.contributor-covenant.org/) 

## GitHub Link
${data.github}[GitHub](http://github.com)`;
}

module.exports = generateMarkdown;