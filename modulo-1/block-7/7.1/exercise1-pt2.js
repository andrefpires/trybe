let numeroFatorial = (n) => {
  let contador = '';
  let conversorArray = [];
  let fatorial = 1;
  let resposta = 0;

if (n > 0) {
  for(let i = 0; i < n; i += 1) {
    contador += '*';
    conversorArray.push(contador.length);
  }

  for(let i = 1; i <= n; i += 1) {
    fatorial = fatorial * conversorArray[0];
    conversorArray.shift();
  }

  return resposta = `O fatorial de ${n} é igual a ${fatorial}`;
} else {
  return resposta = `O número precisa ser positivo`;
  }
}

console.log(numeroFatorial(6));
