// 1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
const tagBody = document.querySelector('body');
const tagH1 = document.createElement('h1');
tagH1.innerText = 'Exercício 5.2 - JavaScript DOM';
tagBody.appendChild(tagH1);

// 2. dicione a tag div com a classe main-content como filho da tag body;
const tagDivMainContent = document.createElement('div');
tagDivMainContent.className = 'main-content';
tagBody.appendChild(tagDivMainContent);

// 3. Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
const tagDivCenterContent = document.createElement('div');
tagDivCenterContent.className = 'center-content';
tagDivMainContent.appendChild(tagDivCenterContent);
