let n = 5;
let asteriscos = '';
let contadorEspacos = n;
let espacos;

if (n > 1) {
  for (let i = 0; i < n; i += 1) {
    espacos = '';
    asteriscos += '*';
    contadorEspacos -= 1;
    for (let c = 0; c < contadorEspacos; c += 1) {
      espacos += ' ';
    }
    console.log(espacos + asteriscos);
  }
} else {
  console.log('Número insuficiente');
}
