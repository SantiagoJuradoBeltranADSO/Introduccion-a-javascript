function esPositivoMenorQue100(numero) {
    return numero > 0 && numero < 100;
}

// Solicitar al usuario que ingrese un número
const numero = parseFloat(prompt("Ingrese un número:"));

// Determinar si el número es positivo y menor que 100
if (esPositivoMenorQue100(numero)) {
    console.log("El número " + numero + " es positivo y menor que 100.");
} else {
    console.log("El número " + numero + " no cumple con las condiciones de ser positivo y menor que 100.");
}