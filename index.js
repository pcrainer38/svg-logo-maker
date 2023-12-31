const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle} = require('./lib/shapes');

// function writes the svg file using the input from inquirer prompts
function writeToFile(fileName, response) {
    var optionsString = '';

    // sets the height and width of the container that holds the shape
    optionsString = '<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">';
    optionsString += '<g>';
    optionsString += `${response.shape}`;

   // determines the shape to be written based on user input
    var userShape;
    if (response.shape === 'circle') {
        userShape = new Circle();
        optionsString += `<circle cx="150" cy="115" r="80" fill="${response.shapeColor}" />`
    } else if (response.shape === 'square') {
        userShape = new Square();
        optionsString += `<rect x="73" y="40" width="160" height="160" fill="${response.shapeColor}" />`;
    } else {
        userShape = new Triangle();
        optionsString += `<polygon points="150, 18 244, 182 56, 182" fill="${response.shapeColor}" />`
    }

    // determines placement and color of text based on user responses to inquirer prompt
    optionsString += `<text x="150" y="130" text-anchor="middle" font-size="50" fill="${response.textColor}">${response.text}</text>`;
    optionsString += '</g>';
    optionsString += '</svg>';

    fs.writeFile(fileName, optionsString, (err) => {
        err ? console.log(err) : console.log('Generated logo.svg');
    });
};    

// Questions for user to determine the shape, color and text of the logo
function questions() {
    inquirer.prompt([
    {
        type: 'input',
        message: 'What letters would you like in your logo (up to three characters)?',
        name: 'text'
    },
    {
        type: 'input',
        message: 'What color would you like for the text?',
        name: 'textColor'
    },
    {
        type: 'list',
        message: 'What shape would you like for your logo?',
        name: 'shape',
        choices: [
            'circle',
            'square',
            'triangle'
        ]
    },
    {
        type: 'input',
        message: 'What color would you like your logo?',
        name: 'shapeColor'
    }
])
// Logs message if user enters more than three characters else calls function to write logo
.then((response) => {
    if (response.text.length > 3) {
        console.log('Value entered must be no more than 3 characters.');
        questions();
    } else {
        writeToFile('logo.svg', response);
    }
    });
}

questions();