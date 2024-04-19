// lib/square.test.js
const Square = require('/Users/jonathancampos/Desktop/LogoMaker/lib/square.js');

test('Triangle class constructor sets points correctly', () => {
  const square = new Square("150,18 244,182 56,182");
  expect(square.points).toEqual("150,18 244,182 56,182");
});

test('setColor method sets color correctly', () => {
  const square = new Square("150,18 244,182 56,182");
  square.setColor('blue');
  expect(square.color).toEqual('blue');
});

test('render method returns SVG string with correct points and color', () => {
  const square = new Square("150,18 244,182 56,182");
  square.setColor('green');
  expect(square.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="green" />');
});
