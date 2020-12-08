let n = 5;
let contador = '';

if (n > 1) {
  for (let c = 0; c < n; c += 1){
    contador += '*';
    console.log(contador);
  }
} else {
  console.log('Número insuficiente');
}
