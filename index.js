// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
let outline ="";

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions 


// TODO: Create an array of questions for user input
const questions = [];
inquirer
    .prompt([{// WHEN I enter my project title
            type: 'input',
            message: "What is the title of your project's title?",
            name: 'title',
        },
        {// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
            type: 'input',
            message: 'Please type a description of the project?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Please type any installation instructions?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Please type any usage information to list?',
            name: 'usage',
        }, 
        {
            type: 'input',
            message: 'Please type any contribution guidelines?',
            name: 'guidelines',
        }, 
        {// WHEN I choose a license for my application from a list of options
            type: 'list',
            message: 'Are you listing a license?',
            name: 'license',
            choices: ['Apache 2.0','MIT','GNU 2.0'],
        }, 
        {
            type: 'input',
            message: 'What is the name of your github account',
            name: 'github',
          },
        {
            type: 'input',
            message: 'What is your email address',
            name: 'email',
          },
          
    ])
    .then((response) => {
        console.log(response);
        let licenseLink = "";
        if (licenseLink === 'MIT') {

        } else if (licenseLink === 'Apache 2.0') {

        } else {

        };
    outline += response.title;
    outline += response.description;
    outline += response.installation;
    outline += response.usage;
    outline += response.guidelines;
    outline += response.github;
    outline += response.email;
    outline += response.license

    fs.writeFile("./newreadme/readme.md", outline, (error, data) =>
    error ? console.error(error) : console.log(data)
);
}); 
// += "# <`${response.title}>\n\n"
// += "## Description\n`${response.description}`\n\n"
// += "## Table of Contents\n- [Installation](#installation)\n- [Usage](#usage)\n- [Credits](#credits)- [License](#license)\n\n"
// += "## Installation\n\n`${response.installation}`\n\n"
// += "## Usage\n\n`${response.usage}`\n\n"
// += "## Guidelines\n\n`${response.installation}`\n\n"

// ## Usage
// Provide instructions and examples for use. Include screenshots as needed.
// To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
//     ```md
//     ![alt text](assets/images/screenshot.png)
//     ```
// ## Credits
// List your collaborators, if any, with links to their GitHub profiles.
// If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
// If you followed tutorials, include links to those here as well.
// ## License
// The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
// ---
// 🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
// ## Badges
// ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
// Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
// ## Features
// If your project has a lot of features, list them here.
// ## How to Contribute
// If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
// ## Tests
// Go the extra mile and write tests for your application. Then provide examples on how to run them here.


// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
// 


