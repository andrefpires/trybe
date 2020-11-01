const { sum, myRemove, myRemoveWithoutCopy, myFizzBuzz, objs } = require('./exercise1')

describe('Testa se a função sum:', () => {
  it('retorna a resposta esperada quando passado os parâmetros 5 e 4', () => {
    expect(sum(5, 4)).toBe(9);
  });

  it('retorna a resposta esperada quando passado os parâmetros 0 e 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('retorna uma mensagem de erro', () => {
    expect(() => sum('5', 4)).toThrow();
  });

  it('retorna a mensagem de erro: Parameters must be numbers ', () => {
    expect(() => sum('5', '4')).toThrow('Parameters must be numbers');
  });
});

describe('Testa se a função myRemove:', () => {
  const arrTest = [1, 2, 3, 4];

  it('retorna o array esperado quando passado um item existente', () => {
    expect(myRemove(arrTest, 3)).toEqual([1, 2, 4]);
  });

  it('não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove(arrTest, 4)).not.toEqual([1, 2, 3, 4]);
  });

  it('altera o array passado como parâmetro', () => {
    myRemove(arrTest, 4);
    expect(arrTest).toEqual([1, 2, 3, 4]);
  });

  it('retorna o array esperado quando passado um item inexistente', () => {
    expect(myRemove(arrTest, 5)).toEqual([1, 2, 3, 4]);
  });
});

describe('Testa se a função myRemoveWithoutCopy:', () => {
  let arrTest = [1, 2, 3, 4];

  beforeEach(() => {
    arrTest = [1, 2, 3, 4];
  });
      
  it('retorna o array esperado quando passado um item existente', () => {
    expect(myRemoveWithoutCopy(arrTest, 4)).toEqual([1, 2, 3]);
  });

  it('não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy(arrTest, 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('altera o array passado como parâmetro', () => {
    myRemoveWithoutCopy(arrTest, 2);
    expect(arrTest).not.toEqual([1, 2, 3, 4]);
  });

  it('retorna o array esperado quando passado um item inexistente', () => {
    expect(myRemoveWithoutCopy(arrTest, 5)).toEqual([1, 2, 3, 4]);
  });
});

describe('Testa se a função myFizzBuzz', () => {
  let expected = /^fizzbuzz$/;

  test('retorna a resposta esperada quando passado um número divisível por 3 e 5', () => {
    expect(myFizzBuzz(15)).toEqual(expect.stringMatching(expected));
  });

  test('retorna a resposta esperada quando passado um número divisível somente por 3', () => {
    expected = /^fizz$/;
    expect(myFizzBuzz(6)).toEqual(expect.stringMatching(expected));
  });

  test('retorna a resposta esperada quando passado um número divisível somente por 5', () => {
    expected = /^buzz$/;
    expect(myFizzBuzz(5)).toEqual(expect.stringMatching(expected));
  });

  test('retorna a resposta esperada quando o número não é divísivel por 3 e 5', () => {
    expect(myFizzBuzz(11)).toBe(11);
  });

  test('retorna a resposta esperada quando o parâmetro passado não é um numeral', () => {
    expect(myFizzBuzz('5')).toBeFalsy();
  });
});

describe('Testa se:', () => {
  test('objeto 1 e objeto 2 são iguais', () => {
    expect(objs.obj1).toEqual(objs.obj2);
  });

  test('objeto 1 e objeto 3 são diferentes', () => {
    expect(objs.obj1).not.toEqual(objs.obj3);
  });
});
