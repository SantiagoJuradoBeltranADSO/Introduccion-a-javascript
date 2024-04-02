// Solicitar al usuario que ingrese el tipo de empleado (planta o administrativo)
const tipoEmpleado = prompt("Ingrese el tipo de empleado (planta o administrativo):").toLowerCase();

// Solicitar al usuario que ingrese el total de horas trabajadas
const totalHorasTrabajadas = parseFloat(prompt("Ingrese el total de horas trabajadas:"));

// Definir las tarifas por hora para cada tipo de empleado
let tarifaPorHora;

if (tipoEmpleado === "planta") {
    tarifaPorHora = 20000;
} else if (tipoEmpleado === "administrativo") {
    tarifaPorHora = 10000;
} else {
    console.log("Tipo de empleado no válido.");
}

// Calcular el pago total del empleado
if (tarifaPorHora) {
    const pagoTotal = tarifaPorHora * totalHorasTrabajadas;
    console.log("El pago total del empleado es: $" + pagoTotal.toFixed(2));
}