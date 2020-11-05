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

// 4. Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
const tagP = document.createElement('p');
tagDivCenterContent.appendChild(tagP);

// 5. Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
const tagDivLeftContent = document.createElement('div');
tagDivLeftContent.className = 'left-content';
tagDivMainContent.appendChild(tagDivLeftContent);

// 6. Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
const tagDivRigthContent = document.createElement('div');
tagDivRigthContent.className = 'rigth-content';
tagDivMainContent.appendChild(tagDivRigthContent);

// 7. Adicione uma imagem com src configurado para o valor https://picsum.photos/200
// e classe small-image. Esse elemento deve ser filho do div criado no passo 5;
const tagImg = document.createElement('img');
tagImg.src = 'https://picsum.photos/200';
tagImg.className = 'small-image';
tagDivLeftContent.appendChild(tagImg);

// 8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista.
// Essa lista deve ser filha do div criado no passo 6;
let tagUl = document.createElement('ul');
tagDivRigthContent.appendChild(tagUl);
for (let i = 1; i <= 10; i += 1) {
  let tagLi = document.createElement('li');
  tagLi.innerText = i;
  tagUl.appendChild(tagLi); 
}

// 9. Adicione 3 tags h3, todas sendo filhas do div criado no passo 2.
for (let i = 0; i < 3; i += 1) {
  tagDivMainContent.appendChild(document.createElement('h3'));
}

// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:

// 1. Adicione a classe title na tag h1 criada;
tagH1.className = 'title';

// 2. Adicione a classe description nas 3 tags h3 criadas;
let tagsH3 = document.querySelectorAll('h3');
for (let i = 0; i <= 2; i += 1) {
  tagsH3[i].className = 'description';
}

// 3. Remova o div criado no passo 5 (aquele que possui a
// classe left-content). Utilize a função .removeChild();
tagDivMainContent.removeChild(tagDivLeftContent);

// 4. Centralize o div criado no passo 6 (aquele que possui a classe right-content).
// Dica: para centralizar, basta configurar o margin-right: auto do div;
tagDivRigthContent.style.marginRight = 'auto';

// 5. Troque a cor de fundo do elemento pai da div criada no passo 3
// (aquela que possui a classe center-content) para a cor verde;
tagDivMainContent.style.backgroundColor = 'green';
