// index.js

// Import required modules
const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/circle');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle');

// Define user input prompts
const prompts = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter text for the logo (up to three characters):',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter text color (keyword or hexadecimal number):',
  },
  // Add prompts for shape selection, shape colors, etc.
];

// Function to generate SVG string based on user input
function generateSVG(userInput) {
  // Create shape instances based on user input
  const circle = new Circle(/* circle parameters */);
  const square = new Square(/* square parameters */);
  const triangle = new Triangle(/* triangle parameters */);

  // Set attributes of shape instances based on user input
  circle.setColor(userInput.circleColor);
  square.setColor(userInput.squareColor);
  triangle.setColor(userInput.triangleColor);

  // Generate SVG strings for each shape
  const circleSVG = circle.render();
  const squareSVG = square.render();
  const triangleSVG = triangle.render();

  // Concatenate SVG strings into a single SVG representing the logo
  const logoSVG = `<svg width="300" height="200">
    ${circleSVG}
    ${squareSVG}
    ${triangleSVG}
    <!-- Add text SVG here based on userInput.text -->
  </svg>`;

  return logoSVG;
}

// Prompt the user for input
inquirer.prompt(prompts)
  .then((answers) => {
    // Generate SVG string based on user input
    const logoSVG = generateSVG(answers);

    // Write SVG string to file
    fs.writeFileSync('logo.svg', logoSVG);

    console.log('Generated logo.svg');
  })
  .catch((error) => {
    console.error('Error:', error);
  });

