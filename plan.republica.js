let salario = 1300
let moradores = 3
let mes = "abril"


// Esta função vai calcular o valor da conta em questão dividida pela quantidade de moradores da casa ( 3 moradores)


function dividirPorPessoa(valortotal) {

    let valorDividido = parseFloat((valortotal / moradores).toFixed(2))
    return valorDividido;

}




var aluguel = dividirPorPessoa(900);
var condominio = dividirPorPessoa(414);
var gas = dividirPorPessoa(108.56);
var internet = dividirPorPessoa(248);
var energia = dividirPorPessoa(81.77);



console.log(`O valor do aluguel por pessoa é R$ ${aluguel}`)
console.log(`O valor do condominio por pessoa é R$${condominio}`)
console.log(`O valor do gas por pessoa é R$ ${gas}`)
console.log(`O valor da internet por pessoa é R$ ${internet}`)
console.log(`O valor da energia por pessoa é R$ ${energia}`)



// Esta função vai calcular o total de todas as contas

function somarContas(aluguel, condominio, gas, internet, energia) {

    let total = aluguel + condominio + gas + internet + energia;
    return total;
}

var somaMes = somarContas(aluguel, condominio, gas, internet, energia);


console.log(`O total de gastos em ${mes} por pessoa foi de R$ ${somaMes}`);



// Esta função vai calcular o saldo final do mes
function calcularSaldo(salario, somaMes) {
    let saldo = salario - somaMes;

    if (saldo > 0) {
        console.log("O saldo final mensal foi positivo ")
    } else {
        console.log("O saldo saldo final mensal foi negativo ")
    }

    return saldo;

}

var saldofinal = calcularSaldo(salario, somaMes);
console.log(` O valor do saldo final foi R$ ${saldofinal} `)


