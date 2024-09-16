function calcularMedia() {
    let continuar = true;

    while (continuar) {
        let nota1 = parseFloat(prompt("Digite a primeira nota:"));
        let nota2 = parseFloat(prompt("Digite a segunda nota:"));

        let media = (nota1 + nota2) / 2;


        alert("A média final é: " + media.toFixed(2));

        let resposta = parseInt(prompt("Calcular a média de outro aluno? 1. Sim 2. Não"));

        if (resposta !== 1) {
            continuar = false;
        }
    }
}

calcularMedia();
