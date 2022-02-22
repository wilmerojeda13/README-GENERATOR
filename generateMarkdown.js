//Function that creates a generateMarkdown for README file
function generateMarkdown(data) {
return `# ${data.title}
## License:
![Licenses](https://img.shields.io/badge/License-${data.licenses}-yellow.svg)c
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#testing)
- [Additonal Information](#additional-information)
- 
    
${data.description}
## Description:
${data.installation}
##Installation:
${data.usage}
## Usage:
${data.usage}
##License:
${data.licenses}
##Contribution:
${data.contribution}
## Testing:
${data.test}
## Contact Information:
- Github: [${data.username}](https://github.com/${data.username})
## Contact Information:
- Email: [${data.email}](ojedawilmerantonio@gmail.com) `;
}
module.exports = generateMarkdown