const fs = require('fs');
const inquirer = require('inquirer');
const {Square, Triangle, Circle} = require('./lib/shapes.js');

// Prompt user for input
async function promptUser() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter text for the logo:'
        },
        {
            type: 'list',
            name: 'textColor',
            message: 'Select text color:',
            choices: ['black', 'white', 'red', 'green', 'blue', 'yellow']
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select shape:',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'list',
            name: 'shapeColor',
            message: 'Select shape color:',
            choices: ['black', 'white', 'red', 'green', 'blue', 'yellow']
        }
    ]);
    return answers;
}

// Generate SVG content based on user input
function generateSVG(text, textColor, shape, shapeColor) {
    let svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">`;

    // Draw the shape
    switch (shape) {
        case 'circle':
            svgContent += `<circle cx="150" cy="100" r="50" fill="${shapeColor}" />`;
            break;
        case 'triangle':
            svgContent += `<polygon points="150,50 100,150 200,150" fill="${shapeColor}" />`;
            break;
        case 'square':
            svgContent += `<rect x="100" y="50" width="100" height="100" fill="${shapeColor}" />`;
            break;
    }

    // Add text
    svgContent += `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="24">${text}</text>`;
    svgContent += `</svg>`;

    return svgContent;
}

// Main function
async function main() {
    try {
        // Prompt user for input
        const { text, textColor, shape, shapeColor } = await promptUser();

        // Generate SVG content based on user input
        const svgContent = generateSVG(text, textColor, shape, shapeColor);

        // Save SVG content to file
        fs.writeFileSync('./examples/logo.svg', svgContent);

        console.log('Logo generated successfully! Saved as logo.svg');
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

// Run the main function
main();