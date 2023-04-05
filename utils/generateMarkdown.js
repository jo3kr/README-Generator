function renderLicenseSection(license) {
  if (license === "None") {
    return "This project is not licensed.";
  } else {
    return `This project is licensed under the ${license} license.`;
  }
}

function generateMarkdown(data) {
  return `# ${data.title}
  
  ![github license](http://img.shields.io/badge/license-${
    data.license
  }-informational.svg)


  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## License
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  
  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  For any questions, feel free to contact me on GitHub or by email:

  - [GitHub: ${data.github}](https://github.com/${data.github})
  - Email: ${data.email}
  `;
}

module.exports = generateMarkdown;
