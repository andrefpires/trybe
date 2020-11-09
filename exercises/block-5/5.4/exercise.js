const tagBody = document.querySelector('body');
const classText = document.querySelector('.text');
let buttonBackgroundColor = document.querySelector('.button-backgroundColor');
let buttonFontColor = document.querySelector('.button-fontColor');
let buttonFontSize = document.querySelector('.button-fontSize');

function changeBackgroundColor() {
  const inputBackgroundColor = document.querySelector('.input-backgroundColor');
  tagBody.style.backgroundColor = inputBackgroundColor.value;
}
// fazer validação dos dados do input para changeBackgroundColor

buttonBackgroundColor.addEventListener('click', changeBackgroundColor);

function changeFontColor() {
  const inputFontColor = document.querySelector('.input-fontColor');
  classText.style.color = inputFontColor.value;
}
// fazer validação dos dados do input para changeFontColor

buttonFontColor.addEventListener('click', changeFontColor);

function changeFontSize() {
  const inputFontSize = document.querySelector('.input-fontSize');
  classText.style.fontSize = `${inputFontSize.value}px`;
}
// fazer validação dos dados do input para changeFontSize

buttonFontSize.addEventListener('click', changeFontSize);