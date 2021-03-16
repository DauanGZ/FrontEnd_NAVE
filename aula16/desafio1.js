// Desafio 1 - aula 16

// 1.

const user = {
    nome: 'Usuário',
    idade: 25,
    endereco: {
      rua: 'Rua central',
      numero: 1
    },
    projetos: ['Projeto 1', 'Projeto 2']
  };
  
  // a.
  let {nome: nomeUser} = user;
  console.log(nomeUser);
  
  // b.
  let {endereco: { rua } } = user;
  console.log(rua);
  
  // c.
  let {projetos} = user;
  console.log(projetos);
  
  // d
  let {projetos: [ , projDois]} = user;
  console.log(projDois);
  
  // 2.
  
  const students = [
      {id: 1, name: 'John Doe', age: 23, scholarship: false},
      {id: 2, name: 'Margoe Rose', age: 19, scholarship: true},
      {id: 3, name: 'Kayle', age: 22, scholarship: true}
  ];
  
  // a.
  let [studant1] = students;
  console.log(studant1);
  
  // b
  let [ , , studant3] = students;
  console.log(studant3);
  
  // c.
  let [ ,{name: nameStudant2}] = students;
  console.log(nameStudant2);