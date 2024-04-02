function evaluarExpresion(a, b, c) {
    return (a + 7 * c) / (b + 2 - a) + 2 * b;
}

function main() {
    try {
        const a = parseFloat(prompt("Ingrese el valor de a: "));
        const b = parseFloat(prompt("Ingrese el valor de b: "));
        const c = parseFloat(prompt("Ingrese el valor de c: "));
        
        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            throw new Error("Error: Por favor, ingrese valores numéricos válidos para a, b y c.");
        }
        
        const resultado = evaluarExpresion(a, b, c);
        console.log("El resultado de la expresión es:", resultado);
    } catch (error) {
        console.log(error.message);
    }
}

main();