const fetch = require('node-fetch');
const url = 'https://api.github.com/users/tryber/repos';

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}

const teste = getRepos(url);
console.log(teste)