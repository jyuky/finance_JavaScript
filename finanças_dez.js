// 1) Calcular os valores de renda

let salario = 1300.00
let comissão = 255.00
let rendaExtra = 500.00
let InvestMesAnterior = 400


var renda = []
renda.push(salario, comissão, rendaExtra)
console.log(renda);



var rendaTotal = renda.reduce(function (total, numero) {
    return total + numero;
}, 0);

console.log(`A renda total recebida  foi R$${rendaTotal}`)

// 2) Planejamento 

var planGastEsc = 50
var planPriFin = 15
var planEstVid = 35


let planGastosEssenciais = (planGastEsc / 100) * rendaTotal
let planPrioridadesFinanceiras = (planPriFin / 100) * rendaTotal
let planEstiloDeVida = (planEstVid / 100) * rendaTotal


var Planejamento = []
Planejamento.push(planGastosEssenciais, planPrioridadesFinanceiras, planEstiloDeVida)
console.log(Planejamento)

console.log(`Valor planejado para gastos essenciais: R$${planGastosEssenciais}, para prioridades financeiras R$${planPrioridadesFinanceiras} e para estilo de vida R$${planEstiloDeVida}`)



// 3) identificar as saidas e segmenta-las


//gastos essenciais
let aluguel = 800
let mercado = 420
let transporte = 18.90
let impostos = 2.62
let saude = 28.26

let gastGastosEssenciais = [];

gastGastosEssenciais.push(aluguel, mercado, transporte, impostos, saude)
console.log(gastGastosEssenciais)



var gastGastosEssenciaisTotal = gastGastosEssenciais.reduce(function (total, numero) {
    return total + numero;
}, 0);

console.log(`O total de gastos essenciais  foi R$${gastGastosEssenciaisTotal}`)



// estilo de vida
let compras = 289.80
let restaurantes = 278.57
let tvNetFone = 20
let outros = 21

let gastEstiloDeVida = [];

gastEstiloDeVida.push(compras, restaurantes, tvNetFone, outros)
console.log(gastEstiloDeVida)



var gastEstiloDeVidaTotal = gastEstiloDeVida.reduce(function (total, numero) {
    return total + numero;
}, 0);

console.log(`O total gasto com gastos estilo de vida foi R$ ${gastEstiloDeVidaTotal}`)

// prioridades financeiras

let dividas = 70.60
let investimento = 200

let gastPrioridadesFinanceiras = [];

gastPrioridadesFinanceiras.push(dividas, investimento)
console.log(gastPrioridadesFinanceiras)



var gastPrioridadesFinanceirasTotal = gastPrioridadesFinanceiras.reduce(function (total, numero) {
    return total + numero;
}, 0);

console.log(`O total gasto com prioridades financeiras foi R$${gastPrioridadesFinanceirasTotal}`)


//4) calcular o valor total gasto 

let totalGasto = gastGastosEssenciaisTotal + gastEstiloDeVidaTotal + gastPrioridadesFinanceirasTotal

console.log(`O total gasto no mês foi R$${totalGasto}`)


var difGastosEssenciais = (planGastosEssenciais - gastGastosEssenciaisTotal).toFixed(2)
var difEstiloDeVida = (planEstiloDeVida - gastEstiloDeVidaTotal).toFixed(2)
var difPrioridadesFinanceiras = (planPrioridadesFinanceiras - gastPrioridadesFinanceirasTotal).toFixed(2)

console.log(difGastosEssenciais, difEstiloDeVida, difPrioridadesFinanceiras)

function diferencaPlaneGast(x) {



    if (x > 0) {
        console.log("Parabéns, você conseguiu gastar menos que o valor planejado!")

    } else {
        console.log("você gastou além do que foi planejado, precisa se organizar melhor!")
    }


}
var diferencaPlaneGastV;
diferencaPlaneGastV = diferencaPlaneGast(difGastosEssenciais);
diferencaPlaneGastV = diferencaPlaneGast(difEstiloDeVida);
diferencaPlaneGastV = diferencaPlaneGast(difPrioridadesFinanceiras);



// 6) calcular o valor da poupança anterior mais atual e calcular o rendimento que terá no mes atual 

var totalInvestido = InvestMesAnterior + investimento

console.log(`O valor total investido é de R$${totalInvestido}`)
 
