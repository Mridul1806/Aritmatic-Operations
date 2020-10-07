const add = require('../src/add.js');
test('Add two positive numbers to get a positive number', () => {
  expect(add(2, 2)).toBe(4);
});
test('Add  positive and a negative numbers to get', () => {
  expect(add(2, -5)).toBe(-3);
  expect(add(6, -1)).toBe(5);
});
test('Add two negative numbers to get a negative number', () => {
  expect(add(-2, -2)).toBe(-4);
});
test('Add two strings to get', () => {
  expect(() => {
    add('Bob ', 'the builder');
  }).toThrow('Bad operand type');
});
//   expect(add("Bob ", "the builder")).toThrow("Bad operand type");
// });
test('Add one string and a number to get', () => {
  expect(() => {
    add('Dhoom ', 2);
  }).toThrow('Bad operand type');
});
//   expect(add("Dhoom ", 2)).toThrow("Bad operand type");
// });
test('If only one argument is passed then output will be NaN', () => {
  expect(add(3)).toBe(NaN);
});
test('If no argument is passsed then output will be null', () => {
  expect(add()).toBe(NaN);
});
