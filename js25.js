function calcularPrecioFinal(costo) {
    const descuento = costo * 0.10;
    const precioFinal = costo - descuento;
    return { descuento, precioFinal };
}

function main() {
    try {
        const costoMedicamentos = parseFloat(prompt("Ingrese el costo de los medicamentos: "));
        
        if (isNaN(costoMedicamentos) || costoMedicamentos <= 0) {
            throw new Error("Error: Por favor, ingrese un costo de medicamentos válido y mayor que cero.");
        }
        
        const { descuento, precioFinal } = calcularPrecioFinal(costoMedicamentos);
        const precioSinDescuento = costoMedicamentos + descuento;
        
        console.log("El precio original de los medicamentos es de:", precioSinDescuento.toFixed(2), "pesos.");
        console.log("El descuento aplicado es de:", descuento.toFixed(2), "pesos.");
        console.log("El precio final de los medicamentos es de:", precioFinal.toFixed(2), "pesos.");
    } catch (error) {
        console.log(error.message);
    }
}

main();