// Solicitar al usuario un número entero
const altura = parseInt(prompt("Ingrese un número entero:"));

// Verificar que el número ingresado sea válido
if (altura > 0) {
    // Iterar desde 1 hasta la altura para construir el triángulo rectángulo
    for (let i = 1; i <= altura; i++) {
        let fila = '';

        // Agregar espacios en blanco para alinear el triángulo a la derecha
        for (let j = 1; j <= altura - i; j++) {
            fila += ' ';
        }

        // Agregar asteriscos para construir la fila del triángulo
        for (let k = 1; k <= i; k++) {
            fila += '*';
        }

        // Mostrar la fila del triángulo en la consola
        console.log(fila);
    }
} else {
    console.log("El número ingresado no es válido. Por favor, ingrese un número entero positivo.");
}