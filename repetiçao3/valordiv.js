const prompt = require('prompt-sync')();

let valor1 = parseFloat(prompt('Digite o primeiro valor: '));

let valor2;
while (true) {
    valor2 = parseFloat(prompt('Digite o segundo valor (não pode ser zero): '));
    if (valor2 === 0) {
        console.log('VALOR INVÁLIDO. O segundo valor não pode ser zero.');
    } else {
        break;
    }
}

let resultado = valor1 / valor2;
console.log(`O resultado da divisão é: ${resultado}`);
