// lib/circle.test.js
const Circle= require('/Users/jonathancampos/Desktop/LogoMaker/lib/circle.js');

test('Circle class constructor sets points correctly', () => {
  const circle = new Circle("150,18 244,182 56,182");
  expect(circle.points).toEqual("150,18 244,182 56,182");
});

test('setColor method sets color correctly', () => {
  const circle = new Circle("150,18 244,182 56,182");
  circle.setColor('blue');
  expect(triangle.color).toEqual('blue');
});

test('render method returns SVG string with correct points and color', () => {
  const circle= new Circle("150,18 244,182 56,182");
  circle.setColor('green');
  expect(circle.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="green" />');
});
