'use strict';

/**
 * @function fileExtension
 * @description gets the file extension from the given filename
 * @param {String} name - The name of the file
 * @return {String|Boolean} The extension (without the period) or false if no
 * extension
 */
module.exports = function fileExtension(name) {
  //Get's the "index" of the last period in a string. This is the number of characters preceding the final period.
  var period = name.lastIndexOf('.');
  //Checks to make sure there is at least one period in the string.
  if(period === -1) {return false;}
  //Returns a substring that begins 1 position after the position of "period".
  return name.substr(period + 1);
};
