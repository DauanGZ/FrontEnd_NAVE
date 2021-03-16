// Desafio 2 - aula 16

// 1.
const imprime = (parametros) => {
    console.log(...parametros)
  };
  
  imprime( [1,2,3] );
  
  // 2.
  const usuario = {
      nome: 'Usuário 1',
      idade: 11,
  };
  
  const nome = ({nome: nomeObjeto}) => {
    console.log(nomeObjeto);
  };
  
  nome(usuario);
  
  // 3.
  const  endereco = {
      rua: 'Rua Torta',
      numero: 22,
  };
  
  const combina = (obj1, obj2) => {
    return novoObj = {
      ...obj1,
      ...obj2
    };
  };
  
  novoObjeto = combina(usuario, endereco);
  
  // 4.
  const students1 = ['John Doe', 'Margoe Rose'];
  const students2 = ['Kayle'];
  
  const concatena = (arr1, arr2) => {
    return novoArr = [...arr1, ...arr2];
  };
  
  novoArray = concatena (students1, students2);