const assert = require('assert');

let addAllnumbers = (arr) => {
  let sum = 0;
  for(i in arr) sum += arr[i];
  return sum;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);
