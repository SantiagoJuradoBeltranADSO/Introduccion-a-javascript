function calcularAreaRectangulo(base, altura) {
    // Verificar si los lados son positivos
    if (base > 0 && altura > 0) {
        // Calcular el área del rectángulo
        return base * altura;
    } else {
        // Si alguno de los lados es negativo, el área no puede ser calculada
        return "Los lados deben ser positivos para calcular el área.";
    }
}

// Solicitar al usuario que ingrese la longitud de la base y la altura del rectángulo
const base = parseFloat(prompt("Ingrese la longitud de la base del rectángulo:"));
const altura = parseFloat(prompt("Ingrese la altura del rectángulo:"));

// Calcular el área del rectángulo
const areaRectangulo = calcularAreaRectangulo(base, altura);

// Mostrar el resultado
console.log("El área del rectángulo es: " + areaRectangulo);