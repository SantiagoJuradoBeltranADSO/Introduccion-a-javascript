// Definir los descuentos por tipo de membresía
const descuentoTipoA = 0.1; // 10%
const descuentoTipoB = 0.15; // 15%
const descuentoTipoC = 0.2; // 20%

// Solicitar al usuario que ingrese su tipo de membresía
const tipoMembresia = prompt("Ingrese su tipo de membresía (A, B o C):").toUpperCase();

// Solicitar al usuario que ingrese el monto total de la compra
const montoCompra = parseFloat(prompt("Ingrese el monto total de la compra:"));

// Calcular el descuento según el tipo de membresía
let descuento;

switch (tipoMembresia) {
    case "A":
        descuento = montoCompra * descuentoTipoA;
        break;
    case "B":
        descuento = montoCompra * descuentoTipoB;
        break;
    case "C":
        descuento = montoCompra * descuentoTipoC;
        break;
    default:
        console.log("Tipo de membresía no válido.");
}

// Mostrar el descuento
if (descuento !== undefined) {
    console.log("El descuento aplicado es de: $" + descuento.toFixed(2));
}