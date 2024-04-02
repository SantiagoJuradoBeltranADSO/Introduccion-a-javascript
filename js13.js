function calcularMedia(numeros) {
    const suma = numeros.reduce((acc, curr) => acc + curr, 0);
    return suma / numeros.length;
}

function main() {
    try {
        const entrada = prompt("Ingrese cuatro números separados por espacios: ");
        const numeros = entrada.split(" ").map(parseFloat);
        
        if (numeros.length !== 4 || numeros.some(isNaN)) {
            throw new Error("Error: Ingrese exactamente cuatro números válidos separados por espacios.");
        }
        
        const media = calcularMedia(numeros);
        alert("La media de los números ingresados es: " + media);
    } catch (error) {
        alert(error.message);
    }
}

main();