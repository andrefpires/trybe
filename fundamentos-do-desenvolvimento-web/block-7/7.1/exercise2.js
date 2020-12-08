// Altere o código para que todas as variáveis ​​sejam declaradas usando let ou const. Use
// let quando quiser que a variável possa ser reatribuída e const quando quiser que a
// variável permaneça constante. Além disso, renomeie as variáveis ​​declaradas com const
// para estar em conformidade com as boas práticas, o que significa que as constantes devem
// estar em maiúsculas.

function printManyTimes(str) {

  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

}

printManyTimes("freeCodeCamp");
