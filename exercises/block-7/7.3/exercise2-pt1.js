const assert = require('assert');

let arrayTest = [1, 2, 3, 4];

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

assert.deepStrictEqual(myRemove(arrayTest, 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemove(arrayTest, 3), [1, 2, 3, 4]);
assert.notDeepStrictEqual(arrayTest, [1, 2, 3, 4], 'arrayTest não foi alterado');
assert.deepStrictEqual(myRemove(arrayTest, 5), [1, 2, 3, 4]);
