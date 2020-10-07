/**
 * Subtraction of two numbers
 * 
 * @param {number} num1 First Number
 * @param {number} num2 Second Number
 * @returns {number} Difference of numbers(num1-num2)<br><br>
 *Eg: subtract(2.3) => 2 - 3 = -1<br>
 *  subtract(2.-3) => 2 - (-3) = -6<br>
 *  subtract(-2.-3) => (-2) - (-3) = 1<br>
 * subtract("Dhoom".3) => It will throw an TypeError :"Bad operand type" // Expected number found string <br>
 * subtract(2) or subtract() => It will print "NaN" <br>
 */
const subtract = (num1, num2) => {
  try {
    if (typeof num1 === 'string' || typeof num2 === 'string') {
      throw new TypeError('Bad operand type');
    }
  } catch (err) {
    throw new Error(err.message);
  }
  return num1 - num2;
};
module.exports = subtract;
