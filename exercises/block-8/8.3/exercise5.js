const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou
// minúscula.

const containsA = () => {
  let letters = names.reduce((accumulation, currentElement) => `${accumulation}` + `${currentElement}`);

  return Object.values(letters).filter((element) => element === 'A' || element === 'a').length;
}

assert.deepEqual(containsA(), 20);
