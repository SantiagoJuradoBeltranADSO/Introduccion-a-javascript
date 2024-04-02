function calcularVolumenElipsoide(a, b, c) {
    return (4/3) * Math.PI * a * b * c;
}

function main() {
    try {
        const a = parseFloat(prompt("Ingrese la longitud del semieje 'a' del elipsoide: "));
        const b = parseFloat(prompt("Ingrese la longitud del semieje 'b' del elipsoide: "));
        const c = parseFloat(prompt("Ingrese la longitud del semieje 'c' del elipsoide: "));
        
        if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
            throw new Error("Error: Por favor, ingrese valores numéricos válidos y mayores que cero para los semiejes.");
        }
        
        const volumen = calcularVolumenElipsoide(a, b, c);
        console.log("El volumen del elipsoide es:", volumen.toFixed(2));
    } catch (error) {
        console.log(error.message);
    }
}

main();