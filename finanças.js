/*
Aplicação para planejamento financeiro. 

1) Calcular os valores de entrada 4(salário, comissões e renda extra)
       => criar um array com o valor total;
          var renda =[];


       => Adicionar todos os valores recebidos no array
          var renda =[]
          rendas.push ("salario")
          rendas.push ("comissão")
          rendas.push ("rendaExtra")


         => Somar(reduce) todos os valores do array para obter o resultado de valor de entrada;

         var renda = [salario, comissão, rendaExtra];
 var rendaTotal = renda.reduce(function(total, numero){
 return total + numero;
 }, 0);
 console.log(rendaTotal);


2) Segmentar  os valor da forma ideal para ser gasto
var planGastEsc = 50
var planPriFin = 15
var planEstVid = 35


function planejarGastos(rendaTotal){
    gastosEssenciais = (planGastEsc/100)*rendaTotal 
    prioridadesFinanceiras = (planPriFin/100)*rendaTotal
    estiloDeVida = (planEstVid/100)*rendaTotal
    

}

- 50% para gastos essenciais: aluguel, conta de luz, gás, telefone, escola, passagem de ônibus, gasolina, aula de inglês, convênio médico, remédios, terapia, feira e supermercado.
- 15% para prioridades financeiras: Se você está endividado ou investimentos
- 35% para manter seu estilo de vida: bares e restaurantes, balada, academia, salão de beleza, viagens, tv a cabo, assinatura de revistas e compras no shopping 

3) identificar as saidas e segmenta-las

=> gastos essenciais
aluguel 
800,00

Mercado
R$ 424,76

Transporte
R$ 18,90

Impostos
R$ 2,62


Saúde
R$ 28,26


=> estilo de vida
Compras
R$ 289,80 

Bares / Restaurantes
R$ 278,57


TV / Internet / Telefone
R$ 20

Outros gastos
R$ 21



=>prioridades financeiras

Dividas
R$ 70,60 acima




4) calcular o valor total gasto 

5) calcular o valor gasto e comparar com o valor planejado 



6) calcular o valor de poupança anterior mais atual */





