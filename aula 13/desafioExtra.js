// Desafio extra - aula 13

const installments = [
    {
      installment_number: 1,
      value: 123.45,
      status: 'Pago'
    },
    {
      installment_number: 2,
      value: 139.88,
      status: 'Pago'
    },
    {
      installment_number: 3,
      value: 123.45,
      status: 'Pago'
    },
    {
      installment_number: 4,
      value: 182.37,
      status: 'Aberto'
    },
    {
      installment_number: 5,
      value: 133.93,
      status: 'Aberto'
    }
  ]

// 1.

// a.
const totalParcelas = installments.reduce((soma, parcela) => {
  return soma + parcela.value;
}, 0);
console.log(totalParcelas);

// b.
const balancoParcelas = installments.reduce((acc, parcela) => {
  if (parcela.status == "Pago"){
    return {
      total_paid: acc.total_paid + parcela.value,
      total_open: acc.total_open
    }
  }
  return{
    total_paid: acc.total_paid,
    total_open: acc.total_open + parcela.value,
  }
}, {
      total_paid: 0,
      total_open: 0,
});

console.log(balancoParcelas);

// c.
const parcelasDecrescente = installments.slice().sort((parcela1, parcela2) => {
    return parcela2.value - parcela1.value;
});  
console.log(parcelasDecrescente);

// d.
const parcelasCrescente = installments.slice().sort((parcela1, parcela2) => {
  if (parcela1.value == parcela2.value){
    return parcela2.installment_number - parcela1.installment_number;
  }
  return parcela1.value - parcela2.value;
});  
console.log(parcelasCrescente);