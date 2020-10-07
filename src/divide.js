/**
 * Dividion of two numbers
 * 
 * @param {number} num1 First Number
 * @param {number} num2 Second Number
 * @returns {number} Division of numbers(num1/num2)<br>
 * <br>
 *Eg: divide(3.2) => 3/2 =1.5<br>
 *  divide(4.-2) => 4/(-2) = -2<br>
 * divide(2.0) => It will throw an Error:"divide by 0 error"  // Arithmatic error<br>
 * divide("Dhoom".3) => It will throw an TypeError :"Bad operand type" // Expected number found string <br>
 * divide(2) or divide() => It will print "NaN" <br>
 */
const divide = (num1, num2) => {
  try {
    if (typeof num1 === 'string' || typeof num2 === 'string') {
      throw new TypeError('Bad operand type');
    }
    if (num2 == 0) {
      throw new Error('divide by 0 error');
    }
  } catch (err) {
    throw new Error(err.message);
  }

  return num1 / num2;
};
module.exports = divide;
