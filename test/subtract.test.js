const subtract = require('../src/subtract.js');
test('Subtract two positive numbers to get ', () => {
  expect(subtract(3, 2)).toBe(1);
});
test('Add two negative numbers to get ', () => {
  expect(subtract(-2, -3)).toBe(1);
});
test('Subtract one positive and one negative number to get ', () => {
  expect(subtract(3, -2)).toBe(5);
  expect(subtract(-3, 2)).toBe(-5);
});
test('Subtract two strings to get', () => {
  expect(() => {
    subtract('Bob ', 'the builder');
  }).toThrow('Bad operand type');
});
//   expect(subtract("Bob ", "the builder")).toThrow("Bad operand type");
// });
test('Subtract one string and a number to get', () => {
  expect(() => {
    subtract('Dhoom ', 2);
  }).toThrow('Bad operand type');
});
//   expect(subtract("Dhoom ", 2)).toThrow("Bad operand type");
// });
test('If only one argument is passed then output will be NaN', () => {
  expect(subtract(3)).toBe(NaN);
});
test('If no argument is passsed then output will be null', () => {
  expect(subtract()).toBe(NaN);
});
