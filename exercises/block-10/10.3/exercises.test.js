describe('Exercícios', () => {
  let generateNumbersUpToTen = () => {
    const number = Math.random() * 10;
    return Math.round(number);
  };

  it('Exercício 1: função generateNumbersUpToTen', () => {
    // 1. Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para
    // essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual
    // seu retorno e quantas vezes foi chamada.

    generateNumbersUpToTen = jest.fn().mockReturnValue(10);
    generateNumbersUpToTen();
    expect(generateNumbersUpToTen).toHaveBeenCalled();
    expect(generateNumbersUpToTen()).toBe(10);
    expect(generateNumbersUpToTen).toHaveBeenCalledTimes(2);
    generateNumbersUpToTen.mockRestore();
  });

  it('Exercício 2: Função divisionOfRandomNumbers', () => {
    // 2. Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que
    // deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve
    // ocorrer uma única vez. Faça os testes necessários.

    let divisionOfRandomNumbers = () => {
      const number1 = generateNumbersUpToTen();
      const number2 = generateNumbersUpToTen();

      return number1 / number2;
    };

    divisionOfRandomNumbers = jest.fn().mockReturnValue(101);
    expect(typeof divisionOfRandomNumbers()).toBe('number');
    expect(divisionOfRandomNumbers()).toBe(101);
    divisionOfRandomNumbers();
    expect(divisionOfRandomNumbers).toHaveBeenCalled();
    expect(divisionOfRandomNumbers).toHaveBeenCalledTimes(3);
    division.mockRestore();
  })
});
