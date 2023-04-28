// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const reqMarkdown = require('./utils/generateMarkdown.js');


// The questions variable contains an array of questions for user input in order to create the values to be written to their README.
const questions = [ 
    
    {   
        type: "input",
        message: "What is your project titled?",
        name: "title"
    
    },
    {
        type: "input",
        message: "Describe your project.",
        name: "description",
        default: "N/A"
    },
    {
        type: "input",
        message: "What steps are necessary to install this project?",
        name: "install",
        default: "N/A"

    },
    {
        type: "input",
        message: "What are some instructions and examples for use of this project?",
        name: "instructions",
        default: "N/A"

    },
    {
        type: "input",
        message: "Is there anyone you would like to credit for their involvement in this project?",
        name: "credit",
        default: "N/A"

    },
    {
        type: "input",
        message: "What are some core features of this project?",
        name: "features",
        default: "N/A"

    },
    {
        type: "input",
        message: "How, if at all, can others help contribute to this project?",
        name: "contribute",
        default: "N/A"

    },
    {
        type: "checkbox",
        message: "What licensing applies to this project?",
        choices: ["Unlicensed", "Apache License 2.0", "GPL License/General Public License v3.0", "BSD LIcense, 2-clause", "BSD LIcense, 3-clause", "BSD LIcense, 4-clause"],
        name: "licensing"

    },
    {

        type: "input",
        message:"Please enter your GitHub username to continue.",
        name: "username"
    
    },
    {
    
        type: "input",
        message: "Is there an email address you would like to associate with this project?",
        name: "email"
    },
    
];

// inquirer
//     .prompt(questions)
//     .then((data) => {
//         console.log("Hi " + questions.username);
//         const readTemplate = markdown ({
//             title: `${data.title}`,
//             description: `${data.description}`,
//             install: `${data.install}`,
//             instructions: `${data.instructions}`,
//             credit: `${data.credit}`,
//             features: `${data.features}`,
//             contribute: `${contribute}`,
//             licensing: `${licensing}`,
//             username: `${username}`,
//             email:`${email}`,
// //         })
//     fs.appendFile('README.md',readTemplate, (error) => {
//         if (error) {
//             console.log('Error! Error! Error!');
//         } else {
//             console.log('alright, alright, alright');
//         }
//     });
// console.log(responses)

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        const readmeMarkdown = generateMarkdown ({
            title: `${data.title}`,
            description: `${data.description}`,
            install: `${data.install}`,
            instructions: `${data.instructions}`,
            credit: `${data.credit}`,
            features: `${data.features}`,
            contribute: `${contribute}`,
            licensing: `${licensing}`,
            username: `${username}`,
            email:`${email}`,
            
        })
        console.log("Question prompts firing off!");
    fs.appendFile('./dist/README.md', generateMarkdown({...data}));
    });
}


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
    
init();