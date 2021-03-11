// Desafio 2 - Reduce e Sort

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
]

console.log(colaboradores);

// 1.

// a.
const somaIdadeColaboradores = colaboradores.reduce((soma, colaborador) => {
  return soma + colaborador.idade
}, 0);
console.log(somaIdadeColaboradores);

// b.1
const colaboradoresPorCargo = colaboradores.reduce((acc, colaborador) => {
  if (colaborador.cargo === "front-end"){
    return {
      frontEnd: acc.frontEnd + 1,
      backEnd: acc.backEnd,
      designer: acc.designer,
      estagiario: acc.estagiario
    }
  }
  
  if (colaborador.cargo === "back-end"){
    return {
      frontEnd: acc.frontEnd,
      backEnd: acc.backEnd + 1,
      designer: acc.designer,
      estagiario: acc.estagiario
    }
  }
  
  if (colaborador.cargo === "designer"){
    return {
      frontEnd: acc.frontEnd,
      backEnd: acc.backEnd,
      designer: acc.designer + 1,
      estagiario: acc.estagiario
    }
  }
  
    if (colaborador.cargo === "estagiario"){
    return {
      frontEnd: acc.frontEnd,
      backEnd: acc.backEnd,
      designer: acc.designer,
      estagiario: acc.estagiario + 1
    }
  }
  
}, {
      frontEnd: 0,
      backEnd: 0,
      designer: 0,
      estagiario: 0
});

console.log(colaboradoresPorCargo);

// b.2 by mestre Erico
const colaboradoresPorCargo2 = colaboradores.reduce(
  (acc, colaborador) =>
    Object.assign(acc, {[colaborador.cargo]: acc[colaborador.cargo] ? acc[colaborador.cargo] + 1: 1}),
  {}
);
console.log(colaboradoresPorCargo2);

// 2.

// a.
const colaboradoresCrescente = colaboradores.slice().sort((colab1, colab2) => {
    return colab1.idade - colab2.idade;
});  
console.log(colaboradoresCrescente);
  
// b.
const colaboradoresDecrescente = colaboradores.slice().sort((colab1, colab2) => {
    return colab2.idade - colab1.idade;
});
console.log(colaboradoresDecrescente);
  
// c.
const colaboradoresOrdemCargo = colaboradores.slice().sort((colab1, colab2) => {
    if (colab1.cargo === 'back-end' && colab2.cargo === 'designer'){
        return -1;
    }
    return colab2.cargo.length - colab1.cargo.length;
});

console.log(colaboradoresOrdemCargo);
  
// d.
const colaboradoresOrdenadosIdade = colaboradores.slice().sort((colab1, colab2) => {
    if (colab1.idade == colab2.idade){
        //lógica do exercício c.
        if (colab1.cargo === 'back-end' && colab2.cargo === 'designer'){
            return -1;
        }
        return colab2.cargo.length - colab1.cargo.length;
    }
    return colab1.idade - colab2.idade; 
});

console.log(colaboradoresOrdenadosIdade);