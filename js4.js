function verificarParImpar() {
    const numero = parseInt(prompt("Ingrese un número entero:"));

    if (isNaN(numero)) {
      alert("Por favor, ingrese un número válido.");
    } else if (numero % 2 === 0) {
      alert("El número " + numero + " es par.");
    } else {
      alert("El número " + numero + " es impar.");
    }
  }

  verificarParImpar();