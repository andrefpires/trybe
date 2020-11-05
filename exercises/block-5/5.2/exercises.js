// 1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
const tagBody = document.querySelector('body');
const tagH1 = document.createElement('h1');
tagH1.innerText = 'Exercício 5.2 - JavaScript DOM';
tagBody.appendChild(tagH1);
