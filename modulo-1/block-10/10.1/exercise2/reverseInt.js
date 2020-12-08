// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

const reverseInt = (number) => {
  let reverseNumber = 'Parameter must be a number';

  if (typeof number === 'number') {
    number = number.toString();
    const arrNumber = number.split('');
    let counter = arrNumber.length - 1;
    const reverseArrNumber = [];

    if (arrNumber[0] === '-') {
      reverseArrNumber.push(arrNumber[0]);
      arrNumber.shift();
      counter -= 1;
    }
    
    for (i = counter; i >= 0; i -= 1) {
      reverseArrNumber.push(arrNumber[i]);
    };

    reverseNumber = reverseArrNumber.join('');
    reverseNumber = parseInt(reverseNumber);
  }

  return reverseNumber;
};

module.exports = reverseInt;
