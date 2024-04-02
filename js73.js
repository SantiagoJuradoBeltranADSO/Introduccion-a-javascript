function contarLetraEnFrase(frase, letra) {
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === letra) {
            contador++;
        }
    }
    return contador;
}

function main() {
    let frase = prompt("Introduce una frase:");
    let letra = prompt("Introduce una letra:");
    let veces = contarLetraEnFrase(frase, letra);
    console.log(`La letra '${letra}' aparece ${veces} veces en la frase.`);
}

main();