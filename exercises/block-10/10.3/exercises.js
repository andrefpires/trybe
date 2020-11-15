const generateNumbersUpToTen = () => {
  const number = Math.random() * 10;
  return Math.round(number);
};

const divisionOfRandomNumbers = (number1, number2) => {
  return number1 / number2;
};

const multiplicationOfRandomNumbers = (number1, number2, number3) => {
  return number1 * number2 * number3;
};

const upperCaseLetters = (string) => {
  return string.toUpperCase();
};

const firstLetter = (string) => {
  const arrString = string.split('');

  return arrString[0];
};

const stringConcatenation = (string1, string2) => {
  return `${string1}${string2}`;
};

module.exports = {
  generateNumbersUpToTen,
  divisionOfRandomNumbers,
  multiplicationOfRandomNumbers,
  upperCaseLetters,
  firstLetter,
  stringConcatenation,
};
