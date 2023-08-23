// Variables
const inquirer = require('inquirer')

const fs = require('fs')

const { Triangle, Circle, Square } = require('./lib/shapes.js')

// Function to write answers to file along with svg
function writeToFIle(file, answers) {
    let addSvg = "";

    addSvg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';

    if (answers.shape === 'circle') {
        const circle = new Circle(answers.bgColor);
        addSvg += `<circle cx="153" cy="120" r="80" fill="${answers.bgColor}" />`
    } else if (answers.shape === 'triangle') {
        const triangle = new Triangle(answers.bgColor);
        addSvg += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.bgColor}" />`
    } else if (answers.shape === 'square') {
        const square = new Square(answers.bgColor);
        addSvg += `<rect x="72" y="39" width="160" height="160" fill="${answers.bgColor}" />`
    }

    addSvg += `<text x="152" y="140" text-anchor="middle" font-size="45" fill="${answers.txtColor}">${answers.text}</text>`;

    addSvg += "</svg>";

    fs.writeFile(file, addSvg, () =>
        console.log('Generated logo.svg'))
}


// Array for questions prompt
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter UP TO three characters for logo name',
        validate: (input) => {
            if (input.length > 3) {
                return 'Too many characters';
            }

            return true;
        }
    },
    {
        type: 'input',
        name: 'txtColor',
        message: 'Enter color keyword or hexidecimal number for text color',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for the logo',
        choices: ['triangle', 'circle', 'square']
    },
    {
        type: 'input',
        name: 'bgColor',
        message: 'Enter color keyword or hexidecimal number for shape color',
    },
]
// Function for questions in command-line
function promptQuestions() {
    inquirer.prompt(questions)
        .then(answers => {
            writeToFIle('logo.svg', answers);
        })
}
promptQuestions()

