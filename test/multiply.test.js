const multiply = require('../src/multiply.js');
test('Multiply two positive numbers to get a positive number', () => {
  expect(multiply(2, 2)).toBe(4);
});
test('Multiply two negative numbers to get a positive number', () => {
  expect(multiply(-2, -2)).toBe(4);
});
test('Multiply one positive and one negative number to get a negative number', () => {
  expect(multiply(3, -2)).toBe(-6);
});
test('Multiply 0 with any number to get 0', () => {
  expect(multiply(0, -2)).toBe(0);
});
test('If no argument is passsed then output will be null', () => {
  expect(multiply()).toBe(NaN);
});
test('If only one argument is passed then output will be NaN', () => {
  expect(multiply(3)).toBe(NaN);
});
test('Multiply two strings to get', () => {
  expect(() => {
    multiply('Bob ', 'the builder');
  }).toThrow('Bad operand type');
});
//   expect(multiply("Bob ", "the builder")).toThrow("Bad operand type");
// });
test('Multiply one string and a number to get', () => {
  expect(() => {
    multiply('Dhoom ', 2);
  }).toThrow('Bad operand type');
});
//   expect(multiply("Dhoom ", 2)).toThrow("Bad operand type");
// });
