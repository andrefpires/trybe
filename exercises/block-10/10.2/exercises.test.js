// 1. Escreva um teste que verifique a chamada do callback de uma função uppercase, que transforma as
// letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falsos positivos em testes
// assíncronos.

describe('Exercise 1', () => {
  test('if lowercase letters should be converted to uppercase', (done) => {
    let strTest = 'test';
    const uppercase = (str, callback) => {
    callback(str.toUpperCase());
    }

    uppercase(strTest, (str) => {
      expect(str).toEqual('TEST');
      done();
    })
  })
})