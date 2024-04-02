// Solicitar al usuario que ingrese dos números
const num1 = parseFloat(prompt("Ingrese el primer número:"));
const num2 = parseFloat(prompt("Ingrese el segundo número:"));

// Verificar si el primer número es mayor que el segundo
if (num1 > num2) {
    // Restar el segundo número al primero
    const resultado = num1 - num2;
    console.log("El resultado de restar " + num2 + " al " + num1 + " es: " + resultado);
} else {
    // Mostrar un mensaje si la operación no es posible
    console.log("La operación no es posible realizarla porque el primer número no es mayor que el segundo.");
}