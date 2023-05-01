// The two following variables enable access to the Inquirer npm as well as the File System module of node.js
const inquirer = require('inquirer');
const fs = require('fs');
// By declaring the reqMarkdown as such we are able to incorporate the exported generateMarkdown.js file within this index.js file.
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
        message: "What steps are necessary to install this application?",
        name: "install",
        default: "N/A"

    },
    {
        type: "input",
        message: "What are some instructions or examples for the usage of this application?",
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
        message: "What are some core features of this application?",
        name: "features",
        default: "N/A"

    },
    {
        type: "input",
        message: "Are there ways in which others can help contribute to this project?",
        name: "contributions",
        default: "N/A"

    },
    {

        type: "input",
        message: "What measures do you have in place to perform tests on your application?",
        name: "tests",
        default: "N/A"

    },
    {
        type: "checkbox",
        message: "What licensing applies to this project?",
        choices: ["Unlicensed", "Apache License 2.0", "GPL License/General Public License v3.0", "BSD License, 2-clause", "BSD License, 3-clause", "The MIT License"],
        name: "licensing"

    },
    {

        type: "input",
        message:"Please enter your GitHub username to continue.",
        name: "username",
        default: "N/A"
    
    },
    {
    
        type: "input",
        message: "Is there an email address or alternative method of contact you would like to associate with this project?",
        name: "contact",
        default: "N/A"
    },

];



// This function initializes the inquirer prompts, passing the questions array as an argument within the .prompt parameters.
// By declaring the readMeMarkdown variable and assigning it to reqMarkdown we are able to later access the data captured by our Inquirer prompts
// and access it when generating our README.md file within the generateMarkdown.js file.
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
            contribute: `${data.contributions}`,
            licensing: `${data.licensing}`,
            username: `${data.username}`,
            contact:`${data.contact}`,
            tests: `${data.tests}`
            
        })
        console.log("Generating README.md...");
   writeToFile('README.md', readmeMarkdown)
    });
}

// This function uses the File System module of node.js to write the README.md file. The README.md file will be overwritten if one currently exists.
function writeToFile(fileName, readmeMarkdown) {
    fs.writeFile('README.md', readmeMarkdown, (error) => {
        if (error) {
                        console.log('Error! Error! Error!');
                    } else {
                        console.log('Alright, alright, alright!');
                    }
    })
};
// By calling function init() here, we are able to initialize our Inquirer prompts by invoking 'node index.js' in the terminal.
init();