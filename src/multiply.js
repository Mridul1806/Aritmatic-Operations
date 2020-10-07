/**
 * Multiplication of two numbers
 * 
 * @param {number} num1 First Number
 * @param {number} num2 Second Number
 * @returns {number} Product of numbers(num1*num2)<br><br>
 * Eg: multiply(2.3) => 2*3 =6<br>
 *  multiply(2.-3) => 2*(-3) = -6<br>
 * multiply(2.0) => 2*0 =0 //any number multiplied by 0 is 0 <br>
 * multiply("Dhoom".3) => It will throw an TypeError :"Bad operand type" // Expected number found string <br>
 * multiply(2) or multiply() => It will print "NaN"   <br>
 */
const multiply = (num1, num2) => {
  try {
    if (typeof num1 === 'string' || typeof num2 === 'string') {
      throw new TypeError('Bad operand type');
    }
  } catch (err) {
    throw new Error(err.message);
  }
  if (num1 == 0 || num2 == 0) {
    return 0;
  }
  return num1 * num2;
};
module.exports = multiply;
