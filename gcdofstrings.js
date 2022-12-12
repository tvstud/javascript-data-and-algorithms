/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

var gcdOfStrings =function largestDivisor(str1, str2) {
    // Iterate over substrings of str1 in reverse order
    for (let i = str1.length; i >= 0; i--) {
      let sub = str1.substring(0, i);
  
      // Check if the substring divides str1 and str2
      if (str1.split(sub).join("") === "" && str2.split(sub).join("") === "") {
        return sub;
      }
    }
  
    // If no common divisor is found, return an empty string
    return "";
  }
  