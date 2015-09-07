'use strict';

/**
 * @function isEven
 * @description checks if a number is even
 * @param {Number} num - The number to check even-ness
 * @return {Boolean} True if even, false if odd
 */
module.exports = function isEven(num) {
  //Checks to see if the remainder of num is equal to 0. If so, num == true.
  if (num % 2 === 0 ) { return true } else { return false };

};
