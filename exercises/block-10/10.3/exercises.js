const generateNumbersUpToTen = () => {
  const number = Math.random() * 10;
  return Math.round(number);
};

const divisionOfRandomNumbers = (number1, number2) => {
  return number1 / number2;
};

// const multiplicationOfRandomNumbers = () => {

// }

module.exports = {
  generateNumbersUpToTen,
  divisionOfRandomNumbers,
};