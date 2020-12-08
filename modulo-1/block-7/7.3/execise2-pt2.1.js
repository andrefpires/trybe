const assert = require('assert');

let wordLengths = (arr) => {
  let backArr = [];
  for(i in arr) {
    backArr.push(arr[i].length);
  }
  return backArr;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);
