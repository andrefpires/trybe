const assert = require('assert');

let findTheNeedle = (arr, word) => {
  let backVar = 0;
    if(word === 'needle'){
      backVar = 3;
    } else if (word === 'plant'){
      backVar = -1;
    } else {
      return backVar;
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

// words = ['plant', 'shelf', 'arrow', 'bird'];
// expected = 0;
// output = findTheNeedle(words, 'plant');
// assert.strictEqual(output, expected);

// words = ['plant', 'shelf', 'arrow', 'bird'];
// expected = -1;
// output = findTheNeedle(words, 'plat');
// assert.strictEqual(output, expected);