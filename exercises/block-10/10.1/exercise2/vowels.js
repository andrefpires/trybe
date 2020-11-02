// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

const vowels = (str) => {
  let numberOfVowels = 0;

  if (typeof str === 'string') {
    let arrVowels = str.match(/[aeiouáéíóúâêîôûàèìòùãẽĩõũ]/gi);
    if (arrVowels !== null) {
      numberOfVowels = arrVowels.length;
    } else {
      numberOfVowels= 0;
    }
  }

  return numberOfVowels;
};

module.exports = vowels;
