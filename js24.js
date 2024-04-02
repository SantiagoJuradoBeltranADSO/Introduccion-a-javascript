function reconocerNumeros(texto) {
    const regex = /[-+]?\d+(\.\d+)?([eE][-+]?\d+)?/g;
    const numerosEncontrados = texto.match(regex);
    return numerosEncontrados || [];
}

function main() {
    try {
        const texto = prompt("Ingrese un texto que contenga números en punto flotante:");
        
        if (!texto) {
            throw new Error("Error: No se proporcionó ningún texto.");
        }
        
        const numeros = reconocerNumeros(texto);
        
        if (numeros.length === 0) {
            console.log("No se encontraron números en punto flotante en el texto proporcionado.");
        } else {
            console.log("Números en punto flotante encontrados:");
            numeros.forEach(numero => console.log(numero));
        }
    } catch (error) {
        console.log(error.message);
    }
}

main();