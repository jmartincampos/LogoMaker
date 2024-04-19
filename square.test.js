// test.square.js

const Square = require('./lib/square');

test('Square renders correctly with specified attributes', () => {
  // Arrange
  const square = new Square(90, 10, 80); // Sample top-left corner coordinates (90, 10) and side length 80
  square.setColor('red'); // Set color to red

  // Act
  const renderedSVG = square.render();

  // Assert
  expect(renderedSVG).toEqual('<polygon points="90,10 170,10 170,90 90,90" fill="red" />');
});
