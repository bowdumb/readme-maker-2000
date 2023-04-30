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
        message: "What are some instructions and examples for the use of this project?",
        name: "instructions",
        default: "N/A"

    },
    {
        type: "input",
        message: "Is there anyone else's contribution to this project that you would like to give credit to?",
        name: "credit",
        default: "N/A"

    },
    {
        type: "input",
        message: "How, if at all, can others help contribute to this project?",
        name: "contribute",
        default: "N/A"

    },
    {

        type:"input",
        message: "What measures for conducting tests on your codebase exist, and how can they be run?",
        name: "test",
        default: "N/A"

    },
    {
        type: "checkbox",
        message: "What licensing applies to this project?",
        choices: ["Unlicensed", "Apache License 2.0", "GPL License/General Public License v3.0", "BSD LIcense, 2-clause", "BSD LIcense, 3-clause", "BSD LIcense, 4-clause"],
        name: "licensing",
        default: "No license selected: all rights reserved by the owner."

    },
    {

        type: "input",
        message:"Please enter your GitHub username to continue.",
        name: "username"
    
    },
    {
    
        type: "input",
        message: "Is there an email address you would like to have questions regarding this project directed to?",
        name: "questions"
    },
    
];



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        const readmeMarkdown = reqMarkdown ({
            title: `${data.title}`,
            description: `${data.description}`,
            install: `${data.install}`,
            instructions: `${data.instructions}`,
            credit: `${data.credit}`,
            features: `${data.features}`,
            contribute: `${data.contribute}`,
            licensing: `${data.licensing}`,
            username: `${data.username}`,
            questions:`${data.questions}`,
            test:`${data.test}`,
            
        })
        console.log("Generating README.md...");

        // writeToFile();
    fs.appendFile('README.md', readmeMarkdown, (error) => {
        if (error) {
                        console.log('Error! Error! Error!');
                    } else {
                        console.log('Alright, alright, alright!');
                    }
    })
});



// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.appendFile('README.md', readmeMarkdown, (error) => {
//         if (error) {
//                         console.log('Error! Error! Error!');
//                     } else {
//                         console.log('Alright, alright, alright!');
//                     }
//     })
// }
init();