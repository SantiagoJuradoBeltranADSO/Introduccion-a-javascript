// Función para calcular el mayor de tres números
function calcularMayor(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}

// Solicitar al usuario que ingrese tres números diferentes
const num1 = parseFloat(prompt("Ingrese el primer número:"));
const num2 = parseFloat(prompt("Ingrese el segundo número:"));
const num3 = parseFloat(prompt("Ingrese el tercer número:"));

// Calcular el mayor de los tres números
const mayor = calcularMayor(num1, num2, num3);

// Mostrar el resultado
console.log("El mayor de los tres números es: " + mayor);