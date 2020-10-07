/**
 * Addition of two numbers
 * 
 * @param {number} num1 First Number
 * @param {number} num2 Second Number
 * @returns {number} Sum of numbers(num1+num2)<br><br>
 *Eg: add(2.3) => 2 + 3 = -5<br>
 *  add(2.-3) => 2 + (-3) = -1<br>
 * add(-2.-3) => (-2) + (-3) = -5<br>
 * add("Dhoom".3) => It will throw an TypeError :"Bad operand type" // Expected number found string <br>
 * add(2) or add() => It will print "NaN" <br>
 */
const add = (num1, num2) => {
  try {
    if (typeof num1 === 'string' || typeof num2 === 'string') {
      throw new TypeError('Bad operand type');
    }
  } catch (err) {
    throw new Error(err.message);
  }
  return num1 + num2;
};

module.exports = add;
