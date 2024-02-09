const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'location',
            message: 'Where are you from?'
        },
        {
            type: 'input',
            name: 'hobby',
            message: 'What is your favorite hobby?'
        },
        {
            type: 'input',
            name: 'food',
            message: 'What is your favorite food?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'linkedin',
            message: 'What is your LinkedIn username?'
        }
    ])
    .then(answers => {
        console.log(answers);
    });
