function calcularVelocidad(distanciaMetros, tiempoSegundos) {
    return distanciaMetros / tiempoSegundos;
}

function main() {
    try {
        const distanciaKilometros = 2;
        const tiempoMinutos = 5;
        
        // Convertir la distancia de kilómetros a metros
        const distanciaMetros = distanciaKilometros * 1000;

        // Convertir el tiempo de minutos a segundos
        const tiempoSegundos = tiempoMinutos * 60;

        const velocidad = calcularVelocidad(distanciaMetros, tiempoSegundos);
        
        console.log("La velocidad del proyectil es:", velocidad, "metros/segundo");
    } catch (error) {
        console.log("Error:", error.message);
    }
}

main();