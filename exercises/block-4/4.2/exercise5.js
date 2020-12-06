let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = 0;

for (let i = 0; i < numbers.length; i += 1) {
  let numeroAtual = numbers[i];
  for (let c = 0; c < numbers.length; c += 1) {
    let numeroComparado = numbers[c];
    if (numeroAtual > numeroComparado) {
      maiorNumero = numeroAtual;
    } else {
      maiorNumero = numeroComparado;
      numeroAtual = maiorNumero;
    }
  }
}

console.log(maiorNumero);
