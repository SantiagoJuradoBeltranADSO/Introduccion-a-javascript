function calcularAreaRectangulo(longitud, anchura) {
    return longitud * anchura;
}

function main() {
    try {
        const longitud = parseFloat(prompt("Ingrese la longitud del rectángulo: "));
        const anchura = parseFloat(prompt("Ingrese la anchura del rectángulo: "));
        
        const area = calcularAreaRectangulo(longitud, anchura);
        console.log("El área del rectángulo es:", area);
    } catch (error) {
        console.log("Error: Por favor, ingrese valores válidos para la longitud y la anchura.");
    }
}

main();