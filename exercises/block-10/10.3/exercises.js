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

const fetchAPI = (url) => {
  return new Promise((resolve, reject) => {
    if (url === 'https://dog.ceo/api/breeds/image/random') {
      fetch(url)
        .then(response => response.json())
        .then(data => resolve(data));
    } else {
      reject(new Error('request failed'));
    }
  });
};

const dogPictures = async () => {
  await fetchAPI('https://dog.ceo/api/breeds/image/random')
    .then(data => data)
    .catch(err => err);
  // A requisição foi feita com base no exemplo da requisição ensinada no conteúdo do dia 9.2
};

module.exports = {
  generateNumbersUpToTen,
  divisionOfRandomNumbers,
  multiplicationOfRandomNumbers,
  upperCaseLetters,
  firstLetter,
  stringConcatenation,
  dogPictures,
};
