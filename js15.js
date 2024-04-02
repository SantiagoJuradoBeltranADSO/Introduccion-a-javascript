function calcularLongitudCircunferencia(radio) {
    return 2 * Math.PI * radio;
}

function calcularAreaCircunferencia(radio) {
    return Math.PI * Math.pow(radio, 2);
}

function main() {
    try {
        const radio = parseFloat(prompt("Ingrese el radio de la circunferencia: "));
        
        if (isNaN(radio) || radio <= 0) {
            throw new Error("Error: Por favor, ingrese un valor numérico válido y mayor que cero para el radio.");
        }
        
        const longitud = calcularLongitudCircunferencia(radio);
        const area = calcularAreaCircunferencia(radio);
        
        console.log("La longitud de la circunferencia es:", longitud);
        console.log("El área de la circunferencia es:", area);
    } catch (error) {
        console.log(error.message);
    }
}

main();