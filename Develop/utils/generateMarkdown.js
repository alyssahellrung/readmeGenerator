function generateMarkdown(data) {
  
  return `
# ${data.title}
[![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)]  
[![GitHub version](https://img.shields.io/badge/version-${data.version}-orange.svg]  

## GitHub: (https://github.com/${data.name})


## Description
${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Version](#version)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

${data.installation}

## Usage

${data.usage}

## Version

This is Version #${data.version}.

## License

This project has a ${data.license} license.
  
## Contributing

${data.contributing}

## Tests

${data.tests || "No tests"}

## Questions

If you have any questions about the repo, open an issue or contact [${data.name}](undefined) directly at ${data.email}.

`;
}

module.exports = generateMarkdown;
