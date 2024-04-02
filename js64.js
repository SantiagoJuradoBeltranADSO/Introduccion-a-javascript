// Solicitar al usuario un número entero positivo
const numero = parseInt(prompt("Ingrese un número entero positivo:"));

// Validar que el número ingresado sea positivo
if (numero > 0) {
    let numerosImpares = '';

    // Iterar desde 1 hasta el número ingresado
    for (let i = 1; i <= numero; i++) {
        // Verificar si el número es impar
        if (i % 2 !== 0) {
            // Agregar el número impar a la cadena
            numerosImpares += i + ', ';
        }
    }

    // Eliminar la última coma y espacio en la cadena
    numerosImpares = numerosImpares.slice(0, -2);

    // Mostrar los números impares
    console.log("Números impares hasta " + numero + ": " + numerosImpares);
} else {
    console.log("El número ingresado no es válido. Por favor, ingrese un número entero positivo.");
}