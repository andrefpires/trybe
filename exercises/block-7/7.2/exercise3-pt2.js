const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const tamanhoObjeto = objeto => {
  let entradas = Object.entries(objeto);
  let resposta = `O Objeto possui ${entradas.length} entradas`
  return resposta;
}

console.log(tamanhoObjeto(lesson3));
