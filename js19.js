function calcularAreaCilindro(radio, altura) {
    const areaBase = Math.PI * Math.pow(radio, 2);
    const areaLateral = 2 * Math.PI * radio * altura;
    return 2 * areaBase + areaLateral;
}

function calcularVolumenCilindro(radio, altura) {
    return Math.PI * Math.pow(radio, 2) * altura;
}

function main() {
    try {
        const radio = parseFloat(prompt("Ingrese el radio del cilindro: "));
        const altura = parseFloat(prompt("Ingrese la altura del cilindro: "));
        
        if (isNaN(radio) || isNaN(altura) || radio <= 0 || altura <= 0) {
            throw new Error("Error: Por favor, ingrese valores numéricos válidos y mayores que cero para el radio y la altura.");
        }
        
        const area = calcularAreaCilindro(radio, altura);
        const volumen = calcularVolumenCilindro(radio, altura);
        
        console.log("El área del cilindro es:", area.toFixed(2));
        console.log("El volumen del cilindro es:", volumen.toFixed(2));
    } catch (error) {
        console.log(error.message);
    }
}

main();