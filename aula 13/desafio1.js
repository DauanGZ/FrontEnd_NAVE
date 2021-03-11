// Desafio 1 - Métodos Específicos

const colaboradores = [
    {
        name: 'Juca',
        idade: 25,
        cargo: 'front-end'
    },
    {
        name: 'Márcia',
        idade: 23,
        cargo: 'back-end'
    },
    {
        name: 'Vitória',
        idade: 28,
        cargo: 'designer'
    },
    {
        name: 'Fernando',
        idade: 19,
        cargo: 'estagiario'
    },
    {
        name: 'Fabiane',
        idade: 25,
        cargo: 'back-end'
    },
    {
        name: 'Jéssica',
        idade: 23,
        cargo: 'front-end'
    },
];

console.log(colaboradores);

// 1.

const nomeColabradores = colaboradores.map(colaborador => {
  return colaborador.name;
});
console.log(nomeColabradores);

// 2.

const colaboradoresFront = colaboradores.filter(colaborador => {
  return colaborador.cargo == 'front-end';
});
console.log(colaboradoresFront);

// 3.

const primeiroColaboradorMaior23 = colaboradores.find(colaborador => {
  return colaborador.idade > 23;
});
console.log(primeiroColaboradorMaior23);

// 4.

const colaboradoresSaoMaioridade = colaboradores.every(colaborador => {
  return colaborador.idade > 18;
});
console.log(colaboradoresSaoMaioridade);

// 5.

const existeColaboradorEstagiario = colaboradores.some(colaborador => {
  return colaborador.cargo == 'estagiario';
});
console.log(existeColaboradorEstagiario);