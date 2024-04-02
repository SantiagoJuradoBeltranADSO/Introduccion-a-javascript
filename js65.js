// Solicitar al usuario un número entero positivo
const numero = parseInt(prompt("Ingrese un número entero positivo:"));

// Validar que el número ingresado sea positivo
if (numero > 0) {
    let cuentaAtras = '';

    // Iterar desde el número ingresado hasta 0
    for (let i = numero; i >= 0; i--) {
        // Agregar el número a la cuenta atrás a la cadena
        cuentaAtras += i + ', ';
    }

    // Eliminar la última coma y espacio en la cadena
    cuentaAtras = cuentaAtras.slice(0, -2);

    // Mostrar la cuenta atrás
    console.log("Cuenta atrás desde " + numero + " hasta 0: " + cuentaAtras);
} else {
    console.log("El número ingresado no es válido. Por favor, ingrese un número entero positivo.");
}