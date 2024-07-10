const prompt = require('prompt-sync')({});
let soma = require('./soma');
let subtracao = require('./subtracao');

let operacao = prompt("Escolha uma operação (+, -): ");
let num1 = +prompt("Digite o primeiro número: ");
let num2 = +prompt("Insira o segundo número: ");

if(operacao == "+") {
    console.log(soma(num1, num2));
} else if (operacao == "-") {
    console.log(subtracao(num1, num2));
} else {
    console.log("Dados inválidos, tente novamente. ")
}