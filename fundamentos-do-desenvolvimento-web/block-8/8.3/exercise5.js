const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou
// minúscula.

const containsA = () => {
  let stringWords = names.reduce((accumulation, currentElement) => `${accumulation}` + `${currentElement}`)
  let letters = stringWords.split('').filter((element) => element.toLowerCase() === 'a');
  
  return letters.length;
};

assert.deepEqual(containsA(), 20);
