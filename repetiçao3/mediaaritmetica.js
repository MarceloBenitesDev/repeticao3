const prompt = require('prompt-sync')();

let soma = 0;
let quantidade = 10;

for (let i = 0; i < quantidade; i++) {
    let valor = parseFloat(prompt(`Digite o valor ${i + 1}: `));
    soma += valor;
}

let media = soma / quantidade;
console.log(`A média aritmética dos valores é: ${media}`);
