import inquirer from 'inquirer';
import fs from 'fs';
import { Circle, Square, Triangle } from './lib/shapes.js';

const promptUser = async () => {
    const questions = [
        {
            type: 'input',
            name: 'text',
            message: 'Enter the text (up to three characters):',
            validate: input => {
                if (input.length <= 3) return true;
                return "Text should be up to three characters.";
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color (keyword or hexadecimal):',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter shape color (keyword or hexadecimal):',
        }
    ];

    const answers = await inquirer.prompt(questions);
    return answers;
};

const generateSvg = (answers) => {
    let shapeInstance;
    switch (answers.shape) {
        case 'circle':
            shapeInstance = new Circle(answers.shapeColor, answers.text, answers.textColor);
            break;
        case 'triangle':
            shapeInstance = new Triangle(answers.shapeColor, answers.text, answers.textColor);
            break;
        case 'square':
            shapeInstance = new Square(answers.shapeColor, answers.text, answers.textColor);
            break;
    }

    return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shapeInstance.render()}
        </svg>
    ` ;
};




promptUser().then(answers => {
    const svgContent = generateSvg(answers);
    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
});