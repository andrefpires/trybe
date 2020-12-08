const lesson1 = {
  objectName: 'lesson1',
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  objectName: 'lesson2',
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  objectName: 'lesson3',
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const tamanhoObjeto = objeto => {
  let entradas = Object.entries(objeto);
  let resposta = `O Objeto ${objeto.objectName} possui ${entradas.length} entradas`
  return resposta;
}

console.log(tamanhoObjeto(lesson2));

// As propriedades 'objectName' presentes em todos objetos utilizados no exercício não existe no esxercício original
// proposto pela Trybe. Eu as coloquei para retornar seu nome utilizando template literals na resposta.
