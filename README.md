# Title

### README-Maker-2000


## Description
 The README-Maker-2000 is a simple way for developers to generate professional README.md documents for use within their applications using a series of command line prompts. After initiating the prompts and providing adequate input, a README.md file will be dynamically generated within the directory from which they have executed the prompts.

## Installation

In order to install this application, you must first clone the following GitHub repository to your local machine: https://github.com/claxCode/readme-maker-2000 . Once the necessary files have been imported to your machine, navigate to the directory containing the 'index.js' file, or initiate the terminal directly through a text editor such as Visual Studio Code. Once you have navigated to the correct directory, install the necessary NPM dependencies by running 'npm i' in the terminal. This will install both the Node.js JavaScript runtime-environment, as well as Inquirer NPM packages.

## Usage

In order to use this application, simply invoke the series of command line prompts by running 'node index.js' from within the directory containing the index.js file. The user will then be presented with a series of questions in their terminal. Answer the questions, and the user's input will be assembled into a professional README.md document which will be generated within the directory that you executed the code from.

## Features
The heart of this application is the Inquirer NPM which is used to generate the series of questions for the user within their terminal. Once the user's input has been collected, the data will be injected into a template for a README.md document which can be found within a separate JavaScript file. In addition to the user's text input, a badge for the license they have chosen to assign to their project will be generated within the 'Licensing' section of their generated README.md document. Additionally, clickable links for the user's GitHub profile and email address will be created and added to the README.md document. All of this is taking place with the Node.js JavaScript runtime-environment which enables us to execute JavaScript code outside of a browser's web API.

## Questions

For questions regarding this project, please feel free to contact me on LinkedIn at : <a href="https://www.linkedin.com/in/joshua-claxton-916a2a272/">this link</a>