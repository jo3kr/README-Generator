function generateMarkdown(data) {
  return `# ${data.title}
  
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
  
  ## Contributing
  
  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  For any questions, feel free to contact me on GitHub or by email:

  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}
    
  ## License
  
  ${renderLicenseSection(data.license)}

  ![github license](http://img.shields.io/badge/license-${
    data.license
  }-informational.svg)
`;
}
function renderLicenseSection(license) {
  if (license === "None") {
    return "This project is not licensed.";
  } else {
    return `This project is licensed under the ${license} license.`;
  }
}


module.exports = generateMarkdown;
