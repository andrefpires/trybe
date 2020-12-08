// Refaça os exercícios de 1 a 5 do conteúdo de Testes unitários em JavaScript, dessa vez
// utilizando Jest.

// 1
const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw ('Parameters must be numbers');
  }

  return a + b;
};

// 2
const myRemove = (arr, item) => {
  let newArr = [];
  arr.forEach((element) => {
    if (item !== element) {
      newArr.push(element);
    }
  });

  return newArr;
};

// 3
function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// 4
function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// 5
const objs = {
  obj1: {
    title: 'My Title',
    description: 'My Description',
  },

  obj2: {
    description: 'My Description',
    title: 'My Title',
  },

  obj3: {
    title: 'My Different Title',
    description: 'My Description',
  },
};

module.exports = {
  sum,
  myRemove,
  myRemoveWithoutCopy,
  myFizzBuzz,
  objs,
};