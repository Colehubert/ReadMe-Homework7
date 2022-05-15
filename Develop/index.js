// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const  generateMarkdown  = require('./utils/generateMarkdown');
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
    name: 'instructions',
    message: 'what are your installation instructions?',
    },
    {
        type: 'input',
        name: 'design',
        message: 'How was your project designed to be used?',
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'How can one contribute to your project?',
            },
            {
                type: 'input',
                name: 'license',
                message: 'Provide License information.',
                },
                {
                    type: 'input',
                    name: 'username',
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

