// Solicitar al usuario un número entero
const altura = parseInt(prompt("Ingrese un número entero:"));

// Verificar que el número ingresado sea válido
if (!isNaN(altura) && altura > 0) {
    // Iterar para construir el triángulo
    for (let i = 1; i <= altura; i++) {
        let fila = '';

        // Agregar asteriscos a la fila
        for (let j = 1; j <= i; j++) {
            fila += '*';
        }

        // Mostrar la fila en la consola
        console.log(fila);
    }
} else {
    console.log("Por favor, ingrese un número entero válido y mayor que cero.");
}