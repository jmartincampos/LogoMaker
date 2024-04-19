// test.circle.js

const Circle = require('./lib/circle');
  // Create a new Circle instance with sample parameters
test('Circle renders correctly with specified attributes', () => {
  // Sample center coordinates (50, 50) and radius 40
  const circle = new Circle(50, 50, 40); 
  // sets color
  circle.setColor('blue'); 


  // Define the expected SVG string for the circle
  const expectedSVG = '<circle cx="50" cy="50" r="40" fill="blue" />';

  // Expect the rendered SVG string to match the expected SVG string
  expect(circle.render()).toEqual(expectedSVG);
});
