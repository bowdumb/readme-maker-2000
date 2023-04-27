// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
inquirer
 .prompt([ 
    {

        type: "input",
        message:"Please enter your GitHub username to continue.",
        name: "username",
    
    },  
    {   type: "input",
        message: "What is your project titled?",
        name: "title",
    
    },
    {
        type: "input",
        message: "Describe your project.",
        name: "description",
        default: "N/A",
    },
    {
        type: "input",
        message: "What steps are necessary to install this project?",
        name: "install",
        default: "N/A",

    },
    {
        type: "input",
        message: "What are some instructions and examples for use of this project?",
        name: "instructions",
        default: "N/A",

    },
    {
        type: "input",
        message: "Is there anyone you would like to credit for their involvement in this project?",
        name: "credit",
        default: "N/A",

    },
    {
        type: "input",
        message: "What are some core features of this project?",
        name: "features",
        default: "N/A",

    },
    {
        type: "input",
        message: "How, if at all, can others help contribute to this project?",
        name: "contribute",
        default: "N/A",

    },
    {
        type: "checkbox",
        message: "What licensing applies to this project?",
        name: "licensing"

    },
    
])
.then((responses) =>

console.log(responses)
)
// TODO: Create a function to initialize app
// function init() {
//     // inquirer.prompt(questions).then(responses),  {
//     //     console.log("Question prompts firing off!");
//     }
// }


// TODO: Create a function to write README file
function writeToFile(fileName, data) {

};



// Function call to initialize app
init();
