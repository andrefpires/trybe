let generateNumbersUpToTen = () => {
  const number = Math.random() * 10;
  return Math.round(number);
};

let divisionOfRandomNumbers = () => {
  const number1 = generateNumbersUpToTen();
  const number2 = generateNumbersUpToTen();

  return number1 / number2;
};

module.exports = {
  generateNumbersUpToTen,
  divisionOfRandomNumbers,
};