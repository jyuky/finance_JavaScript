// Calculadora de juros simples

//valor inicial do  é 14.500
//quantidade de parcelas 48
//valor do juros 3.15
//valor da prestação 590

//Descobrir qual o valor do juros em cada parcela
//Descobrir o valor total do carro com juros 


const valorInicial = 14500
const taxaJuros = 3.15
const numParcelas = 48
const parcela = 590
var parcelas = [];

var juros = (taxaJuros/100) * valorInicial
var totalJuros =[];

var i = 0;

while(i < numParcelas){

      totalJuros.push(juros)
      parcelas.push(parcela + juros)
      //coloque no array parcela + juros
      i = i + 1;
}

var valorTotalPago = parcelas.reduce(function (total, numero) {
    return total + numero;
}, 0);

console.log(`O valor total b com juros é R$ ${valorTotalPago.toFixed(2)}`)

var valorTotalJuros = totalJuros.reduce(function (total, numero) {
    return total + numero;
}, 0);

console.log(`O valor total pago em juros é R$ ${valorTotalJuros.toFixed(2)}`)


 






