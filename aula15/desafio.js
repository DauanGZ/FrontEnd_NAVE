// Desafio - aula 15

// 1.
const p1 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("p1 executada com sucesso");
      }, 1000);
    })
  };
    
  //p1
  //  .then(resultp1 => {
  //  console.log(resultp1);
  //})
  //  .catch(resultp1 => {
  //  console.log(resultp1);
  //})
  //  .finally(() => {
  //  console.log("Promisse 1 finalizada!");
  //})
  
  const p2 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("p2 executada com sucesso");
      }, 5000);
    })
  };
  
  //p2
  //  .then(resultp2 => {
  //  console.log(resultp2);
  //})
  //  .catch(resultp2 => {
  //  console.log(resultp2);
  //})
  //  .finally(() => {
  //  console.log("Promisse 2 finalizada!");
  //})
  
  const p3 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          reject("p3 executada com erro");
      }, 3000);
    })
  };
  
  //p3
  // .then(resultp3 => {
  //  console.log(resultp3);
  //})
  //  .catch(resultp3 => {
  //  console.log(resultp3);
  //})
  //  .finally(() => {
  //  console.log("Promisse 3 finalizada!");
  //})
  
  // 2.
  
  async function func2() {
    try{
      const result = await Promise.all( [p1(), p2(), p3()] );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  
  //func2();
  
  // 3.
  
  async function func3() {
    try{
      const result = await Promise.all( [p1(), p2()] );
      console.log(result);
    } catch (error) {
      console.log(error);
    } finally{
      console.log("Final da execução");
    }
  };
  
  func3();