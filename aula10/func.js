const subtrai = function (x, y) {
    return x - y;
}

const testaZero = (z) => {

    if (z == 0) {
      teste = "É zero";
    } else {
      teste = "Não é zero";
    }

    return console.log(teste);

  }
  
  function testaSinal(a, b) {

    if (subtrai(a,b) == 0) {
        teste = "É zero"; // números iguais
    }
    else if (a*b<0 || a==0 && b<0 || a<0 && b==0) {
        teste = "Subtração entre números de sinais diferentes";
    }
    else if (a*b>=0) {
        teste = "Subtração entre números de mesmo sinal";
    }

    console.log(teste);
  
  }