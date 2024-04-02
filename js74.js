function main() {
    let entrada = "";
    while (entrada !== "salir") {
        entrada = prompt("Introduce algo (escribe 'salir' para terminar):");
        console.log(entrada);
    }
    console.log("¡Hasta luego!");
}

main();