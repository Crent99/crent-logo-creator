const inquirer = require('inquirer');
const fs = require("fs");

const questions = [
  {
    type: 'input',
    name: 'letters',
    message: 'Type any 3 letters you would like to choose.',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'What color would you like the text to be?',
  },
  {
    type: 'input',
    name: 'shapes',
    message: 'What shape would you like to choose from the following: circle, square, triangle?',
    choices: ["circle", "square", "triangle"]
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'What color would you like the shape to be?',
  }
];

function init() {
  inquirer.prompt(questions).then((theAnswers) => {

    //saving answers into finalSvgText 
    const finalSvgText = svg(theAnswers);

    //write this text to file
    fs.writeFile("./examples/logo.svg", finalSvgText, (err) =>
      err ? console.log(err) : console.log("Generated logo.svg!")
    );
  });
}
 
init();
