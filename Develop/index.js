// TODO: Include packages needed for this application
//import fetch from 'node-fetch'
//const fetch = import('node-fetch');
//globalThis.fetch = fetch;

const inquirer = require('inquirer');
const  generateMarkdown  = require('./utils/generateMarkdown');
//const  renderLicenseBadge = require('./utils/renderLicenseBadge');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [{
type: 'input',
name: 'title',
message: 'what is the name of your project?',
},
{
type: 'input',
name: 'description',
message: 'what would you describe your project as?',
},
{
    type: 'input',
    name: 'installation',
    message: 'what are your installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How was your project designed to be used?',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'How can one contribute to your project?',
            },
            {
                type: 'input',
                name: 'license',
                message: 'Provide License information.',
                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'Enter your GitHub Username.',
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: 'Enter your email',
                        }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    
    inquirer.prompt(questions).then((data)=> {
      const markdown =   generateMarkdown(data);
     

      //fetch(`https://img.shields.io/github/license/Colehubert/${data.license}`).then(response => response.json()).then(data => console.log(data));
      //const badge =  renderLicenseBadge(data);
      //console.log(badge)
        fs.writeFile('README.MD',markdown, (err)=>{
            if(err){
                console.log(err)
            }
            console.log("README file generated");
        })
    });
}

// Function call to initialize app
init();

