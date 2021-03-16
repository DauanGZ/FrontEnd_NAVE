// Desafio-objeto da aula 11

const user = {
    nome: 'Usuário',
    idade: 25,
    endereco: {
      rua: 'Rua central',
      numero: 1
    },
    projetos: ['Projeto 1', 'Projeto 2']
  };
  
  // 1.
  
  // a.
  console.log(user.nome);
  // b.
  console.log(user.endereco.rua);
  // c.
  console.log(user.projetos[1]);
  
  // 2.
  
  // a.
  console.log(user['nome']);
  // b.
  console.log(user.endereco['rua']);
  // c.
  console.log(user.projetos['1']);
  // d.
  let campo = "numero";
  console.log(user.endereco[campo]);