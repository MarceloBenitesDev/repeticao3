const prompt = require('prompt-sync')();

while (true) {
    let valor = parseInt(prompt('Digite um valor inteiro (ou um número zero/negativo para sair): '), 10);

    if (valor <= 0) {
        console.log('Encerrando o programa...');
        break;
    }

    if (valor % 2 === 0) {
        console.log(`O valor ${valor} é PAR.`);
    } else {
        console.log(`O valor ${valor} é ÍMPAR.`);
    }
}
