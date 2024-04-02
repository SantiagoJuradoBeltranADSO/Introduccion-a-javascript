// Definir la constante PI
const PI = 3.14159;

// Solicitar al usuario que elija la figura geométrica
const figura = prompt("¿Qué figura geométrica desea calcular? (Escriba T para Triángulo o C para Círculo)").toUpperCase();

// Función para calcular el área del triángulo
function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

// Función para calcular el área del círculo
function calcularAreaCirculo(radio) {
    return PI * radio * radio;
}

// Calcular el área según la figura elegida por el usuario
if (figura === "T") {
    const base = parseFloat(prompt("Ingrese la base del triángulo:"));
    const altura = parseFloat(prompt("Ingrese la altura del triángulo:"));
    const areaTriangulo = calcularAreaTriangulo(base, altura);
    console.log("El área del triángulo es: " + areaTriangulo);
} else if (figura === "C") {
    const radio = parseFloat(prompt("Ingrese el radio del círculo:"));
    const areaCirculo = calcularAreaCirculo(radio);
    console.log("El área del círculo es: " + areaCirculo);
} else {
    console.log("Opción no válida. Por favor, ingrese T para Triángulo o C para Círculo.");
}