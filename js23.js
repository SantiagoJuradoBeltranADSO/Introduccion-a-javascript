function convertirVelocidad(kmh) {
    const mps = kmh * (1000 / 3600);
    return mps;
}

function main() {
    try {
        const velocidadKmh = parseFloat(prompt("Ingrese la velocidad del automóvil en kilómetros por hora (km/h): "));
        
        if (isNaN(velocidadKmh) || velocidadKmh < 0) {
            throw new Error("Error: Por favor, ingrese una velocidad válida y mayor o igual que cero.");
        }
        
        const velocidadMps = convertirVelocidad(velocidadKmh);
        console.log(velocidadKmh + " km/h equivale a " + velocidadMps.toFixed(2) + " m/s.");
    } catch (error) {
        console.log(error.message);
    }
}

main();