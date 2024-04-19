// test.circle.js

const Circle = require('./lib/circle');

test('Circle renders correctly with specified attributes', () => {
  // Arrange
  const circle = new Circle(50, 50, 40); // Sample center coordinates (50, 50) and radius 40
  circle.setColor('blue'); // Set color to blue

  // Act
  const renderedSVG = circle.render();

  // Assert
  expect(renderedSVG).toEqual('<circle cx="50" cy="50" r="40" fill="blue" />');
});
