// Corrija o código para que o i declarado na instrução if seja uma variável separada
// daquela declarada na primeira linha da função. Certifique-se de não usar a palavra var 
// em nenhum lugar do código.

function checkScope() {
  'use strict';
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

checkScope();