// Iterar sobre los números del 1 al 10
for (let i = 1; i <= 10; i++) {
    // Mostrar el encabezado de la tabla para el número actual
    console.log("Tabla de multiplicar del " + i + ":");

    // Iterar sobre los números del 1 al 10 para multiplicarlos por el número actual
    for (let j = 1; j <= 10; j++) {
        // Calcular el resultado de la multiplicación
        const resultado = i * j;

        // Mostrar la multiplicación y su resultado en la consola
        console.log(i + " x " + j + " = " + resultado);
    }

    // Mostrar un espacio en blanco entre cada tabla de multiplicar
    console.log();
}
