const { expect, it } = require("@jest/globals");

describe('Exercise 1', () => {
// Escreva um teste que verifique a chamada do callback de uma função uppercase, que transforma as
// letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falsos positivos em testes
// assíncronos.

  it('lowercase letters should be converted to uppercase', (done) => {
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

describe('Exercise 2', () => {
// Utilizando a sintaxe de Promise, faça um teste que verifique o resultado da função getUserName para o
// caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.
// Dica: Veja os dados falsos utilizados no banco de dados, disponíveis na variável users, para saber quais
// IDs existem.

  const users = {
    4: { name: 'Mark' },
    5: { name: 'Paul' }
  };

  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        }
      
        return reject({ error: 'User with ' + id + ' not found.' });
    });
  }
      
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  }

  it('the function returns the expected name by passing the id', async () => {
    expect.assertions(1);
    await getUserName(4).then(userName => expect(userName).toBe('Mark'));
  })

  it('the function returns the expected error', async () => {
    expect.assertions(1);
    await getUserName(6).catch(error => expect(error).toEqual({ error: 'User with 6 not found.' }));
  })
})

describe('Exercise 3', () => {
// Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await.
// Dica: Utilize o try/catch para o caso de erro.
  
  const users = {
    4: { name: 'Mark' },
    5: { name: 'Paul' }
  };
  
  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      }
  
      return reject({ error: 'User with ' + id + ' not found.' });
    });
  }
        
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  }
  
  it('the function returns the expected name by passing the id', async () => {
    expect.assertions(1);
    await expect(getUserName(4)).resolves.toBe('Mark');
  })
  
  it('the function returns the expected error', async () => {
    expect.assertions(1);
    try {
      await getUserName(7);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 7 not found.' });
    }
  })

  it('the function returns the unexpected error', async () => {
    expect.assertions(1);
    await expect(getUserName(7)).rejects.not.toEqual({ error: 'User with 8 not found.' });
  })
})
  