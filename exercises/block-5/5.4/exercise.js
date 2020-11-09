const tagBody = document.querySelector('body');
let buttonBackgroundColor = document.querySelector('.button-backgroundColor');
let buttonFontColor = document.querySelector('.button-fontColor');

function changeBackgroundColor() {
  const inputBackgroundColor = document.querySelector('.input-backgroundColor');
  tagBody.style.backgroundColor = inputBackgroundColor.value;
}
// fazer validação dos dados do input para changeBackgroundColor

buttonBackgroundColor.addEventListener('click', changeBackgroundColor);

function changeFontColor() {
  const inputFontColor = document.querySelector('.input-fontColor');
  tagBody.style.color = inputFontColor.value;
}
// fazer validação dos dados do input para changeFontColor

buttonFontColor.addEventListener('click', changeFontColor);
