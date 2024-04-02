function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function main() {
    try {
        const base = parseFloat(prompt("Ingrese la longitud de la base del triángulo: "));
        const altura = parseFloat(prompt("Ingrese la altura del triángulo: "));
        
        if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
            throw new Error("Error: Por favor, ingrese valores numéricos válidos para la base y la altura del triángulo.");
        }
        
        const area = calcularAreaTriangulo(base, altura);
        console.log("El área del triángulo es:", area);
    } catch (error) {
        console.log(error.message);
    }
}

main();