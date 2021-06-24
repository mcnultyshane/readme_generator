// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
let outline = "";

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions 


// TODO: Create an array of questions for user input
const questions = [];
inquirer
    .prompt([{ // WHEN I enter my project title
                type: 'input',
                message: "What is the title of your project?",
                name: 'title',
            },
            { // WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
                type: 'input',
                message: 'Please type a description of the project:',
                name: 'description',
            },
            {
                type: 'input',
                message: 'Please type any installation instructions:',
                name: 'installation',
            },
            {
                type: 'input',
                message: 'Please type any usage information to list:',
                name: 'usage',
            },
            {
                type: 'input',
                message: 'Please type any contribution guidelines:',
                name: 'guidelines',
            },
            { // WHEN I choose a license for my application from a list of options
                type: 'list',
                message: 'Are you listing a license:',
                name: 'license',
                choices: ['Apache 2.0', 'MIT', 'GNU 3.0'],
            },
            // The follow inputs are for the links to the personal sites
            type: 'input',
            message: 'What is the name of your github account?',
            name: 'github',
        }, {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },

    ])
.then((response) => {
    console.log(response);
    let licenseLink = "";
    // if else statement for selecting license badges.
    if (licenseLink === 'MIT') {
        response.license = `Licensed Under the [MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n\n`;

    } else if (licenseLink === 'Apache 2.0') {
        response.license = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n\n`;
    } else {
        response.license = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)\n\n`
    };

    // This following code it the markup layout needed for the new generated page and the inputs fields using template literals.
    outline += `# ${response.title}\n\n## Description\n\n${response.description}\n\n### Table of Contents\n\n- [Installation](#installation)\n- [Usage](#usage)\n- [Credits](#credits)\n- [License](#license)\n\n## Installation\n\n${response.installation}\n\n## Usage\n\n${response.usage}\n\n## Guidelines\n\n${response.guidelines}\n\n## Credits\n\n## License\n\n${response.license}## Badges\n\n## Features\n\n## How to Contribute\n\n##### Please reach out via [email](mailto:${response.email}) if there is any questions or if you would be interested in contributing to this project.\n\n##### Github: [github.com/${response.github}](https://github.com/${response.github})\n\n## Tests\n\n`

    // TODO: Create a function to write README file  
    // fs.writeFile to launch the new file in the markdown format
    fs.writeFile("./newreadme/readme.md", outline, (error) =>
        error ? console.error(error) : console.log("Success!")
    );
});