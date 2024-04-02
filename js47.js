// Leer los tres valores diferentes
let num1 = parseFloat(prompt("Ingrese el primer valor:"));
let num2 = parseFloat(prompt("Ingrese el segundo valor:"));
let num3 = parseFloat(prompt("Ingrese el tercer valor:"));

// Comparar los valores
if (num1 === num2 && num1 === num3) {
    console.log("Los tres números son iguales");
} else if (num1 >= num2 && num1 >= num3) {
    console.log("El mayor número es " + num1);
} else if (num2 >= num1 && num2 >= num3) {
    console.log("El mayor número es " + num2);
} else {
    console.log("El mayor número es " + num3);
}