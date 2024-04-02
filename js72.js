function mostrarLetrasInvertidas(palabra) {
    for (let i = palabra.length - 1; i >= 0; i--) {
        console.log(palabra[i]);
    }
}

function main() {
    let palabra = prompt("Introduce una palabra:");
    mostrarLetrasInvertidas(palabra);
}

main();