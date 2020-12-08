const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

// Primeira tentativa: let teste = arrays.map((element, index) => element[index]);

const flatten = () => arrays.reduce((accumulator, currentElement) => {
  currentElement.map((element) => accumulator.push(element));
  return accumulator;
}, []);

flatten();

assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);
