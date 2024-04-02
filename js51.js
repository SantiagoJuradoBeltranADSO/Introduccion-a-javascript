// Solicitar al usuario que ingrese el consumo en el restaurante
const consumo = parseFloat(prompt("Ingrese el monto total del consumo en el restaurante:"));

// Calcular el monto total a pagar
let totalPagar;

if (consumo > 130000) {
    // Aplicar descuento del 15% si el consumo es mayor a $130.000
    const descuento = consumo * 0.15;
    totalPagar = consumo - descuento;
} else {
    // No aplicar descuento si el consumo es igual o menor a $130.000
    totalPagar = consumo;
}

// Mostrar el monto total a pagar
console.log("El monto total a pagar es: $" + totalPagar.toFixed(2));