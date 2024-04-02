function convertirMonedas(pesos, valorDolar, valorEuro) {
    const dolares = pesos / valorDolar;
    const euros = pesos / valorEuro;
    return [dolares, euros];
}

// Definir el valor de una moneda en pesos colombianos
const valorMoneda = 4000; // Por ejemplo, 1 dólar = 4000 pesos colombianos, 1 euro = 4000 pesos colombianos

// Solicitar al usuario que ingrese la cantidad de pesos colombianos a convertir
const pesos = parseFloat(prompt("Ingrese la cantidad de pesos colombianos a convertir:"));

// Calcular la conversión a dólares y euros utilizando el valor de la moneda
const [dolares, euros] = convertirMonedas(pesos, valorMoneda, valorMoneda);

// Mostrar el resultado de la conversión
console.log(pesos + " pesos colombianos equivalen a aproximadamente " + dolares.toFixed(2) + " dólares estadounidenses.");
console.log(pesos + " pesos colombianos equivalen a aproximadamente " + euros.toFixed(2) + " euros.");