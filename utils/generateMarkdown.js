//Function that creates a generateMarkdown for README file
function generateMarkdown(data) {
return `# ${data.title}
## License:
![Licenses](https://img.shields.io/badge/License-${data.licenses}-yellow.svg)


## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#testing)
- [Screenshot](#screenshot)

## Description:
${data.description}


## Installation:
${data.installation}


## Usage:
${data.usage}


## License:
This license is public used you can find it on:
https://opensource.org/licenses/MIT


## Contribution:
${data.contribution}


## Testing:
${data.test}


## Screenshot:
![alt text](assets/video1.gif)
#### [Demo Video](https://drive.google.com/file/d/1pqAaFEcFeUqbj6lukgVRkuNpk4kJtp-k/view)


## Contact Information:
- Github: ${data.username}
- Email: ${data.email} `;
}
module.exports = generateMarkdown