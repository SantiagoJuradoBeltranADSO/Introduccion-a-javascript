function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "No se puede dividir entre cero";
    }
}

// Función principal
function main() {
    try {
        const num1 = parseFloat(prompt("Ingrese el primer número: "));
        const num2 = parseFloat(prompt("Ingrese el segundo número: "));
        
        console.log("Suma:", suma(num1, num2));
        console.log("Resta:", resta(num1, num2));
        console.log("Multiplicación:", multiplicacion(num1, num2));
        console.log("División:", division(num1, num2));
    } catch (error) {
        console.log("Error: Por favor, ingrese números válidos.");
    }
}

main();