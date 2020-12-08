// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

const palindrome = (str) => {
  let response = 'Parameter must be a string';

  if (typeof str === 'string') {
    const arrStr = str.split('');
    const counter = arrStr.length - 1;
    let reverseArrStr = [];

    for (i = counter; i >= 0; i -= 1) {
      reverseArrStr.push(arrStr[i]);
    };

    if (arrStr.join('') === reverseArrStr.join('')) {
      response = true;
    } else {
      response = false;
    }
  }

  return response;
}

module.exports = palindrome;
