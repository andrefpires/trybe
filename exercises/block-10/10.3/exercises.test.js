describe('Exercícios', () => {
  const exercises = require('./exercises');
  jest.mock('./exercises');

  it('Exercício 1: função generateNumbersUpToTen', () => {
    // 1. Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para
    // essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual
    // seu retorno e quantas vezes foi chamada.
    exercises.generateNumbersUpToTen();
    expect(exercises.generateNumbersUpToTen).toHaveBeenCalled();
    exercises.generateNumbersUpToTen.mockReturnValueOnce(10);
    expect(exercises.generateNumbersUpToTen()).toBe(10);
    expect(exercises.generateNumbersUpToTen).toHaveBeenCalledTimes(2);
  });

  it('Exercício 2: Função divisionOfRandomNumbers', () => {
    // 2. Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que
    // deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve
    // ocorrer uma única vez. Faça os testes necessários.
    const number1 = exercises.generateNumbersUpToTen();
    const number2 = exercises.generateNumbersUpToTen();
    exercises.divisionOfRandomNumbers.mockReturnValue(10);
    expect(typeof exercises.divisionOfRandomNumbers(number1, number2)).toBe('number');
    expect(exercises.divisionOfRandomNumbers(number1, number2)).toBe(10);
    exercises.divisionOfRandomNumbers(number1, number2);
    expect(exercises.divisionOfRandomNumbers).toHaveBeenCalled();
    expect(exercises.divisionOfRandomNumbers).toHaveBeenCalledTimes(3);
  });

  // it('', () => {
  //   // 3. Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que
  //   // receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua
  //   // implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.


  // });
});
