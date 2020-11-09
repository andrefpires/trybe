const tagBody = document.querySelector('body');
const classText = document.querySelector('.text');
let buttonBackgroundColor = document.querySelector('.button-backgroundColor');
let buttonFontColor = document.querySelector('.button-fontColor');
let buttonFontSize = document.querySelector('.button-fontSize');
let buttonlineHeight = document.querySelector('.button-lineHeight');
let buttonfontFamily = document.querySelector('.button-fontFamily');

function changeBackgroundColor() {
  const inputBackgroundColor = document.querySelector('.input-backgroundColor');
  tagBody.style.backgroundColor = inputBackgroundColor.value;
  localStorage.setItem('background-color', inputBackgroundColor.value);
}
// fazer validação dos dados do input para changeBackgroundColor

buttonBackgroundColor.addEventListener('click', changeBackgroundColor);

function changeFontColor() {
  const inputFontColor = document.querySelector('.input-fontColor');
  classText.style.color = inputFontColor.value;
  localStorage.setItem('font-color', inputFontColor.value);
}
// fazer validação dos dados do input para changeFontColor

buttonFontColor.addEventListener('click', changeFontColor);

function changeFontSize() {
  const inputFontSize = document.querySelector('.input-fontSize');
  classText.style.fontSize = `${inputFontSize.value}px`;
  localStorage.setItem('font-size', `${inputFontSize.value}px`);
}
// fazer validação dos dados do input para changeFontSize

buttonFontSize.addEventListener('click', changeFontSize);

function changeLineHeight() {
  const inputlineHeight = document.querySelector('.input-lineHeight');
  classText.style.lineHeight = `${inputlineHeight.value}px`;
  localStorage.setItem('line-height', `${inputlineHeight.value}px`);
}
// fazer validação dos dados do input para changeLineHeight

buttonlineHeight.addEventListener('click', changeLineHeight);

function changeFontFamily() {
  const inputFontFamily = document.querySelector('.input-fontFamily');
  classText.style.fontFamily = inputFontFamily.value;
  localStorage.setItem('font-Family', `${inputFontFamily.value}`);
}
// fazer validação dos dados do input para changeFontFamily

buttonfontFamily.addEventListener('click', changeFontFamily);

function getItemsLocalStorage(){
  const fontFamily = localStorage.getItem('font-Family');
  classText.style.fontFamily = fontFamily;
  const lineHeight = localStorage.getItem('line-height');
  classText.style.lineHeight = lineHeight;
  const fontSize = localStorage.getItem('font-size');
  classText.style.fontSize = fontSize;
  const fontColor = localStorage.getItem('font-color');
  classText.style.color = fontColor;
  const backgroundColor = localStorage.getItem('background-color');
  tagBody.style.backgroundColor = backgroundColor;
}

getItemsLocalStorage();