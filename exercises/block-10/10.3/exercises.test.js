describe('Exercícios', () => {
  const exercises = require('./exercises');
  jest.mock('./exercises');

  let number1 = 0;
  let number2 = 0;
  let number3 = 0;

  beforeEach( () => {
    number1 = exercises.generateNumbersUpToTen();
    number2 = exercises.generateNumbersUpToTen();
    number3 = exercises.generateNumbersUpToTen();
  });

  describe('Exercício 1', () => {
    it('Função generateNumbersUpToTen', () => {
      // 1. Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para
      // essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual
      // seu retorno e quantas vezes foi chamada.
      expect(exercises.generateNumbersUpToTen).toHaveBeenCalled();
      exercises.generateNumbersUpToTen.mockReturnValueOnce(10);
      expect(exercises.generateNumbersUpToTen()).toBe(10);
      expect(exercises.generateNumbersUpToTen).toHaveBeenCalledTimes(4);
    });
  });

  describe('Exercício 2', () => {
    it('Função divisionOfRandomNumbers', () => {
      // 2. Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que
      // deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve
      // ocorrer uma única vez. Faça os testes necessários.
      exercises.divisionOfRandomNumbers.mockReturnValue(10);
      expect(typeof exercises.divisionOfRandomNumbers(number1, number2)).toBe('number');
      expect(exercises.divisionOfRandomNumbers(number1, number2)).toBe(10);
      expect(exercises.divisionOfRandomNumbers).toHaveBeenCalled();
      expect(exercises.divisionOfRandomNumbers).toHaveBeenCalledTimes(2);
    });
  });

  describe('Exercício 3', () => {
    it('Função multiplicationOfRandomNumbers', () => {
    // 3. Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que
    // receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua
    // implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.
    exercises.multiplicationOfRandomNumbers();
    expect(exercises.multiplicationOfRandomNumbers).toHaveBeenCalled();
    exercises.multiplicationOfRandomNumbers.mockReturnValueOnce(20).mockReturnValueOnce(10);
    expect(exercises.multiplicationOfRandomNumbers(number1, number2, number3)).toBe(20);
    expect(typeof exercises.multiplicationOfRandomNumbers(number1, number2, number3)).toBe('number');
    expect(exercises.multiplicationOfRandomNumbers).toHaveBeenCalledTimes(3);
    exercises.multiplicationOfRandomNumbers.mockReset();
    exercises.multiplicationOfRandomNumbers.mockImplementation((number) => {
      return number * 2;
    });
    expect(exercises.multiplicationOfRandomNumbers(60)).toBe(120);
    expect(typeof exercises.multiplicationOfRandomNumbers(number1)).toBe('number');
    expect(exercises.multiplicationOfRandomNumbers).toHaveBeenCalled();
    expect(exercises.multiplicationOfRandomNumbers).toHaveBeenCalledTimes(2);
    });
  });

  // describe('Exercício 4', () => {
  //   it('Funções upperCaseLetters, firstLeter e stringConcatenation', () => {
  //     // 4. Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la
  //     // em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira
  //     // deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para
  //     // a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma
  //     // nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings
  //     // e concatená-las.
  //     exercises.upperCaseLetters.mockImplementation((string) => {
  //       return string.toLowerCase();
  //     });
  //     expect(exercises.upperCaseLetters('STROGONOFF')).toBe('strogonoff');
  //   })
  // });
});
