function mostrarNumeros() {
    let valor = parseInt(prompt("Digite um valor maior que ZERO:"));

    if (isNaN(valor) || valor <= 0) {
        alert("Por favor, insira um número inteiro maior que ZERO.");
        return; 
    }

    const resultadoDiv = document.getElementById("resultado");

    for (let i = 1; i <= valor; i++) {
        const p = document.createElement("p");
        p.textContent = i;
        resultadoDiv.appendChild(p);
    }
}

mostrarNumeros();