let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let dividendo = 0;
let divisor = numbers.length;

for (let i = 0; i < divisor; i += 1) {
  dividendo = dividendo + numbers[i];
}

let mediaAritmetica = dividendo / divisor;
console.log(mediaAritmetica);
