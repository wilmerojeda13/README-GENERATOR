const inquirer = require('inquirer');
const fs = require ('fs') ;
const generateMarkdown = require('./generateMarkdown');
const { error } = require('console');

//Create Question for user input
inquirer.
prompt =([
  //Title of the project
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of the project?',
  },
  //Description of the project
  {
    type: 'input',
    name: 'description',
    message: 'Description of the project?',
  },
  //Installation instruction of the project
  {
      type: 'input',
      name: 'installation',
      message: 'How do you install the project?',
    },
    //Usage Information
  {
    type: 'input',
    name: 'usage',
    message: 'How do you used the project?',
  },
  //License available
  {
    type: 'input',
    name: 'licenses',
    message: 'Select a license for you project?',
    choices:['MIT' ,'Apache',  'GPL v3.0', 'None',],
  },
  //Contributors for the project
  {
    type: 'input',
    name: 'contribution',
    message: 'How to contribute to the project?',
  },
  //Test Instructions
  {
    type: 'input',
    name: 'Test',
    message: 'How to test the project?',
  },
  //Github Username
  {
    type: 'input',
    name: 'username',
    message: 'Enter your Github username?',
  },
  //Email adress
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email if you have any questions about the project?',
  },
  
  //Function to generated the README file
]).then((data) => {
  console.log(data);
  fs.writeFile('REAME.md' , generateMarkdown(data),
  error =>{
    if (error) {
      console.log('Input all data')
    }
    console.log('you README was generated')
  })
})
