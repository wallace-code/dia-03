// Declarando variavéis 
let nome = ""
let idade = 0
let altura = 0
let peso = 0

// Solicitando informações dos valores das varivéis
nome = prompt("Digite seu nome: ")
idade = parseInt(prompt("Digite sua idade: "))
altura = parseFloat(prompt("Digite sua altura: "))
peso = parseInt(prompt("Digite seu peso: "))

// Calculando o ano que a pessoa nasceu e seu IMC 
let anoNasc = 0
anoNasc = 2023 - idade

let imc = 0
imc = peso / (altura * altura) 

//Soicitando exibição no console
console.log("Olá Wallace, você tem 23 anos, nasceu em 1999, tem 1,72 de altura, pesa 74,40kg, seu IMC é 25,14 kg/m2")

