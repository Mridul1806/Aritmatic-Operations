const divide = require('../src/divide.js');
test('Divides two positive numbers to get a positive number', () => {
  expect(divide(2, 2)).toBe(1);
});
test('Divide two negative numbers to get a positive number', () => {
  expect(divide(-2, -2)).toBe(1);
});
test('Divide one positive and one negative number to get a negative number', () => {
  expect(divide(4, -2)).toBe(-2);
});
test('if second number is 0 then output will be an error', () => {
  expect(() => {
    divide(2, 0);
  }).toThrow('divide by 0 error');
});
//   expect(divide(2, 0)).toThrow('divide by 0 error');
// });
test('Divide two strings to get', () => {
  expect(() => {
    divide('Bob ', 'the builder');
  }).toThrow('Bad operand type');
});
//   expect(divide("Bob ", "the builder")).toThrow("Bad operand type");
// });
test('Divide one string and a number to get', () => {
  expect(() => {
    divide('Dhoom ', 2);
  }).toThrow('Bad operand type');
});
//   expect(divide("Dhoom ", 2)).toThrow("Bad operand type");
// });
test('If only one argument is passed then output will be NaN', () => {
  expect(divide(3)).toBe(NaN);
});

test('If no argument is passsed then output will be null', () => {
  expect(divide()).toBe(NaN);
});
