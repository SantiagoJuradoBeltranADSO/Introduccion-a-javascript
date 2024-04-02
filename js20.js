function encontrarRaices(a, b, c) {
    const discriminante = b * b - 4 * a * c;
    
    if (discriminante > 0) {
        const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        return [x1, x2];
    } else if (discriminante === 0) {
        const x = -b / (2 * a);
        return [x];
    } else {
        return [];
    }
}

function main() {
    const a = parseFloat(prompt("Ingrese el coeficiente a: "));
    const b = parseFloat(prompt("Ingrese el coeficiente b: "));
    const c = parseFloat(prompt("Ingrese el coeficiente c: "));
    
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        console.log("Error: Ingrese valores numéricos válidos para a, b y c.");
        return;
    }
    
    const raices = encontrarRaices(a, b, c);
    
    if (raices.length === 0) {
        console.log("La ecuación no tiene raíces reales.");
    } else if (raices.length === 1) {
        console.log("La ecuación tiene una raíz real:", raices[0]);
    } else {
        console.log("Las raíces reales de la ecuación son:", raices[0], "y", raices[1]);
    }
}

main();