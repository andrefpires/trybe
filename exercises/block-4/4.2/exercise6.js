let numbers = [50, 10, 4, 18, 36, 28, 22];
let numerosImpares = [];
let contador = 0;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 !== 0) {
    numerosImpares.push(numbers[i]);
  }
  contador = contador += 1;
};

if (contador !== 0) {
  console.log('Não existem números ímpares');
} else {
  console.log(numerosImpares);
}
