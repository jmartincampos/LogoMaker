// lib/triangle.test.js
const Triangle = require('/Users/jonathancampos/Desktop/LogoMaker/lib/triangle.js');

test('Triangle class constructor sets points correctly', () => {
  const triangle = new Triangle("150,18 244,182 56,182");
  expect(triangle.points).toEqual("150,18 244,182 56,182");
});

test('setColor method sets color correctly', () => {
  const triangle = new Triangle("150,18 244,182 56,182");
  triangle.setColor('blue');
  expect(triangle.color).toEqual('blue');
});

test('render method returns SVG string with correct points and color', () => {
  const triangle = new Triangle("150,18 244,182 56,182");
  triangle.setColor('green');
  expect(triangle.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="green" />');
});
