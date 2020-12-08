// Um array é declarado como const s = [5, 7, 2]. Altere o array para [2, 5, 7] usando
// várias reatribuições de elemento.

const s = [5, 7, 2];

function editInPlace() {
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;

  return s;
}

console.log(editInPlace());
