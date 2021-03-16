// Desafio-array da aula 11

const students = [
    {id: 1, name: 'John Doe', age: 23, scholarship: false},
    {id: 2, name: 'Margoe Rose', age: 19, scholarship: true},
    {id: 3, name: 'Kayle', age: 21, scholarship: true}
];

// 1.

students.forEach((estudante) => {
  console.log(estudante.name);
});

// 2.

students.forEach((estudante) => {
  if(estudante.age > 20){
    console.log(estudante.name); 
  }
});

// 3.

var bolsistas = [];

students.forEach((estudante, posicao) => {
  if (estudante.scholarship) {
    bolsistas.push(students.slice(posicao, posicao + 1));
  }
});

console.log(bolsistas);