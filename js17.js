function calcularVolumenEsfera(radio) {
    return (4/3) * Math.PI * Math.pow(radio, 3);
}

function main() {
    try {
        const radio = parseFloat(prompt("Ingrese el radio de la esfera: "));
        
        if (isNaN(radio) || radio <= 0) {
            throw new Error("Error: Por favor, ingrese un valor numérico válido y mayor que cero para el radio.");
        }
        
        const volumen = calcularVolumenEsfera(radio);
        console.log("El volumen de la esfera es:", volumen.toFixed(2));
    } catch (error) {
        console.log(error.message);
    }
}

main();