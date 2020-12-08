const assert = require('assert');

let addOne = (arr) => {
  let backArr = [];
  for(i in arr) {
    backArr.push(arr[i] + 1);
  }
  return backArr;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepEqual(output, expected);
assert.deepEqual(myArray, unchanged);
