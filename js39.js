function calcularCostoPintura(costoPorMetroCuadrado, areaPintada) {
    const costoTotal = costoPorMetroCuadrado * areaPintada;
    return costoTotal;
}

// Solicitar al usuario que ingrese el costo por metro cuadrado y el área a ser pintada
const costoPorMetroCuadrado = parseFloat(prompt("Ingrese el costo por metro cuadrado de la pintura: "));
const areaPintada = parseFloat(prompt("Ingrese el área a ser pintada en metros cuadrados: "));

// Calcular el costo total del trabajo de pintura
const costoTotal = calcularCostoPintura(costoPorMetroCuadrado, areaPintada);

// Mostrar el presupuesto al cliente
console.log("El presupuesto para el cliente es: $" + costoTotal.toFixed(2));