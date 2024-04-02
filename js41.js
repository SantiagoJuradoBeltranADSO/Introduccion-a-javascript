// Solicitar al usuario que ingrese la frase
const frase = prompt("Ingrese una frase que lo identifique como programador de software:");

// Función para invertir la frase
function invertirFrase(frase) {
    return frase.split('').reverse().join('');
}

// Invertir la frase ingresada por el usuario
const fraseInvertida = invertirFrase(frase);

// Mostrar la frase invertida
console.log("La frase invertida es: " + fraseInvertida);