const prompt = require('prompt-sync')(); 

let quantidadeAlunos = parseInt(prompt('Digite a quantidade de alunos: '), 10);

if (quantidadeAlunos <= 0) {
    console.log('Quantidade de alunos deve ser maior que zero.');
    process.exit();
}

let somaNotas = 0;

for (let i = 0; i < quantidadeAlunos; i++) {
    let nota = parseFloat(prompt(`Digite a nota do aluno ${i + 1}: `));
    somaNotas += nota;
}

let media = somaNotas / quantidadeAlunos;
console.log(`A média aritmética das notas é: ${media.toFixed(2)}`);
