function main() {
    let contAlcool = 0;
    let contGasolina = 0;
    let contDiesel = 0;

    while (true) {
        let codigo = parseInt(prompt("Digite o código do combustível (1. Álcool, 2. Gasolina, 3. Diesel, 4. Fim):"));

        switch (codigo) {
            case 1:
                contAlcool++;
                alert("Álcool");
                break;
            case 2:
                contGasolina++;
                alert("Gasolina");
                break;
            case 3:
                contDiesel++;
                alert("Diesel");
                break;
            case 4:
                alert("MUITO OBRIGADO");
                alert(`Quantidade de clientes que abasteceram:\nÁlcool: ${contAlcool}\nGasolina: ${contGasolina}\nDiesel: ${contDiesel}`);
                return;
            default:
                alert("Código inválido. Por favor, insira um código válido (1 a 4).");
        }
    }
}

main();
