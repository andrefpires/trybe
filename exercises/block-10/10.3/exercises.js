const generateNumbersUpToTen = () => {
  const number = Math.random() * 10;
  return Math.round(number);
};

const divisionOfRandomNumbers = (number1, number2) => {
  return number1 / number2;
};

const multiplicationOfRandomNumbers = (number1, number2, number3) => {
  return number1 * number2 * number3;
}

const doubleReturns = (number) => {
  return number * 2;
}

module.exports = {
  generateNumbersUpToTen,
  divisionOfRandomNumbers,
  multiplicationOfRandomNumbers,
  doubleReturns,
};
