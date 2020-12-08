/* eslint-disable max-len*/
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    let returned = typeof productDetails('param1', 'param2');
    let expected = 'object';
    assert.deepStrictEqual(returned, expected);
    // Teste que o retorno da função é um array.
    returned = Object.entries(productDetails('param1', 'param2')).length;
    expected = 2;
    assert.strictEqual(returned, expected);
    // Teste que o array retornado pela função contém dois itens dentro.
    returned = [typeof productDetails('param1', 'param2')[0], typeof productDetails('param1', 'param2')[1]];
    expected = ['object', 'object']
    assert.deepStrictEqual(returned, expected);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    returned = productDetails('param1', 'param2')[0];
    expected = productDetails('param1', 'param2')[1];
    assert.notDeepStrictEqual(returned, expected);
    // Teste que os dois objetos são diferentes entre si.
    let funcaor = () => {
      let count = productDetails('param1', 'param2');
      let backArr = [];
    
      for (let i = 0; i < count.length; i += 1) {
        let funcao = Object.values(count[i].details.productId);
        let contador = funcao.length - 3;
        for (let i = 0; i < contador; i += 1) {    
          funcao.shift();
        }
    
        backArr.push(funcao[0] + funcao[1] + funcao[2]);
      }
    
      return backArr;
    
    };
    returned = funcaor();
    expected = ['123', '123'];
    assert.deepStrictEqual(returned, expected);
    // (Difícil) Teste que os dois productIds terminam com 123.
  });
});
