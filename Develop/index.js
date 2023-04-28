// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js');
const { error } = require('console');

// The questions variable contains an array of questions for user input in order to create the values to be written to their README.
const questions = [ 
    
    {   type: "input",
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
    }
    
];

inquirer
    .prompt(questions)
    .then((data) => {
        const readTemplate = markdown ({
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
    if (error) {
        console.log('Error! Error! Error!');
    } else {
        console.log('alright, alright, alright');
    }
    });
// console.log(responses)

// TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt(questions)
//     .then((responses) => {
//         console.log("Question prompts firing off!");
//         writeToFile('./dist/README.md', generateMarkdown({...responses}));
//     });
// }


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     return fs.writeFileSync(markdown.join(process.cwd(), fileName), data);
// };



// Function call to initialize app
init();
