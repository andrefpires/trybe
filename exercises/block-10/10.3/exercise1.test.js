// 1. Crie uma função que gere um número aleatório entre 0 e 100. Você
// irá criar também os testes para essa função. Utilizando o mock,
// defina o retorno padrão como 10. Teste se a função foi chamada, qual
// seu retorno e quantas vezes foi chamada.

describe('Exercício 1', () => {
  let generateNumbersUpToTen = () => {
    const number = Math.random() * 10;
    return Math.round(number);
  };

  test('Função generateNumbersUpToTen', () => {
    generateNumbersUpToTen = jest.fn().mockReturnValue(10);
    generateNumbersUpToTen();
    expect(generateNumbersUpToTen).toHaveBeenCalled();
    expect(generateNumbersUpToTen()).toBe(10);
    expect(generateNumbersUpToTen).toHaveBeenCalledTimes(2);
  });
});
