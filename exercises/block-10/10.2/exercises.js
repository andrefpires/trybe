describe('Exercese 1', () => {
  test('', () => {
    const uppercase = (str, callback) => {
    callback(str.toUpperCase());
    }

    expect(uppercase('test', () => {
      console.log(str);
    })).toBe('TEST');
  })
})