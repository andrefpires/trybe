# Bloco 8.1

Estes exercícios praticam os conceitos de Higher Order Functions associados a outros já vistos, como arrow functions , template literals , objetos e temas dos fundamentos. Essa mistura de conceitos é muito importante para seu aprendizado, então use tudo o que sabe para resolver os exercícios!

O array books será usado em todos os exercícios:
```javascript
const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];
```
1. Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

- Dica: use a função `find`.

2. Retorne o nome do livro de menor nome.

- Dica: use a função `forEach`.

3. Encontre o primeiro livro cujo nome possui 26 caracteres.

4. Ordene os livros por data de lançamento em ordem decrescente.

5. Faça uma função que retorne `true`, se todas as pessoas autoras nasceram no século XX, ou `false` , caso contrário.

6. Faça uma função que retorne `true`, se algum livro foi lançado na década de 80, e `false`, caso contrário.

7. Faça uma função que retorne `true`, caso nenhum author tenha nascido no mesmo ano, e `false`, caso contrário.