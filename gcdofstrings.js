/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

var gcdOfStrings =function largestDivisor(str1, str2) {
  // Find the length of the smaller string
  let n = Math.min(str1.length, str2.length);

  // Loop from n to 1 and find the largest string x that divides both str1 and str2
  for (let i = n; i >= 1; i--) {
    // Check if the substrings of length i at the beginning and end of str1 are equal
    if (str1.substring(0, i) === str1.substring(str1.length - i)) {
      // Check if the substrings of length i at the beginning and end of str2 are equal
      if (str2.substring(0, i) === str2.substring(str2.length - i)) {
        // If both conditions are met, return the substring of length i
        return str1.substring(0, i);
      }
    }
  }

  // If no string x is found, return the empty string
  return "";
}