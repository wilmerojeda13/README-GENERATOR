const inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project',
    },
    {
        type: 'input',
        name: 'about',
        message: 'What the project is about',
    },
    {
        type: 'input' ,
        name: 'license' ,
        message: 'what license does your project used' ,
        choices: ['Milt', 'GLPv3' , 'Glp'] ,
    },
    {
       type : 'input',
        name: 'general',
        message: 'General information about project', 

    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers)
  })