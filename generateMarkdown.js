//Function that creates a generateMarkdown for README file
function generateMarkdown(data) {
    return `# ${data.title}

    ## License:
    [![license]((https://img.shields.io/badge/license-${data.license}-blue.svg)]
    ## Table of Contents
    -[Description](#description)
    -[Installation](#installation)
    -[Usage](#usage)
    -[Contribution](#description)
    -[Testing](#description)
    -[Additonal Information](#additional-information)
    
    ## Description
    ${data.description}
    ##Installation
    ${data.installation}
    ## Usage:
    ${data.usage}
    ##License:
    ${data.license}
    ##Contribution
    ${data.contribution}
    ## Testing
    ${data.test}
    ## Contact Information:
    - Github: [${data.github}](https://github.com/wilmerojeda13)${data.github})
    - Email: [${data.email}](ojedawilmerantonio@gmail.com) `;
}

module.exports = generateMarkdown