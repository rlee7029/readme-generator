// TODO: Include packages needed for this application
const inquier = require("inquirer")
const fs = require('fs')
const util = require('util')

const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'

    },
    {
        type: 'input',
        name: 'description',
        message: 'what is the description of your project?:'

    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation Process?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is your software used?'
    },
    {
        type: 'list',
        name: 'license',
        message: "What kind of license does your project have? Please choose from the following...",
        choices: ['MIT', 'Apache', 'GPL']
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'What is the contricbution of this project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Test of your project?'
    },
    {
        type:'input',
        name:'question',
        message:'Do you have any questions?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub user name?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },

];
// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(fileName, data, error => {
    if (error) {
      return console.log(error);
    }
  
    console.log("Success! Your README.md file has been generated")
});
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        writeToFile(answers)

    })

}