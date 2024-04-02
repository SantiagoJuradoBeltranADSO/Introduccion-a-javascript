function verificarCadena(cadena) {
    // Expresión regular para reconocer cadenas de texto delimitadas por comillas dobles
    const regex = /"([^"\\]|\\.)*"/;

    // Verificar si la cadena cumple con el patrón
    if (regex.test(cadena)) {
        return "La cadena cumple con el patrón de tener comillas dobles correctamente emparejadas.";
    } else {
        return "La cadena no cumple con el patrón de tener comillas dobles correctamente emparejadas.";
    }
}

// Cadena de texto para verificar
const cadena = prompt("Ingrese una cadena de texto para verificar si cumple con el patrón:");

// Verificar la cadena de texto
const resultado = verificarCadena(cadena);

// Mostrar el resultado
console.log(resultado);