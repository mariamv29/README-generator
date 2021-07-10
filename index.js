// // TODO: Include packages needed for this application
const generateMarkdown = require("./assets/utils/generateMarkdown");
const inquirer = require("inquirer");
const writeToFile = require ('./assets/src/generate-site');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is the name of your project?",
        validate: (value) =>  {
            if(value){
                return true;
            } else{
                console.log('please enter the name of your project')
                return false;
             }
            },
        },
    {
        type: "input",
        name: "description",
        message: "Provide a description of the project",
    },

    {
        type: "input",
        name: "motivation",
        message: "What was the motivation to build this project?",
      },

      {
        type: "input",
        name: "installation",
        message: "What are the steps to intall your project?",
      },
      {
        type: "input",
        name: "usage",
        message: "Instruct the use for this project",
      },

      {
        type: "checkbox",
        name: "license",
        message: "Please select the applicable license for this project",
        choices: [
            "Apache 2.0",
            "Boost Software 2.0",
            "MIT",
            "Mozilla 2.0",
        ]
      },

      {
        type: "input",
        name: "contributor",
        message: "Where there any contributors? If so, who?",
    },
    {
        type: "input",
        name: "github",
        message: "Enter GitHub Username/s",
    },

];


// // TODO: Create a function to initialize app
function init() 
{
    inquirer.prompt(questions).then(inquirerData => {
        console.log("README.md created")
        writeToFile("README.md", generateMarkdown( inquirerData))
    })
    .catch(err => {
        console.log(err)
    })
}

// // Function call to initialize app
init();
