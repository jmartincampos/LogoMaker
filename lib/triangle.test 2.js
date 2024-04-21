// test.triangle.js

const Triangle = require('./triangle');

test('Triangle renders correctly with specified attributes', () => {
  // Arrange
  const triangle = new Triangle("160,10 230,90 90,90"); // Sample vertices coordinates
  triangle.setColor('green'); // Set color to green

  // Act
  const renderedSVG = triangle.render();

  // Assert
  expect(renderedSVG).toEqual('<polygon points="160,10 230,90 90,90" fill="green" />');
});
