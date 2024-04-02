function calcularDistanciaEntrePuntos(x1, y1, x2, y2) {
    const distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distancia;
}

// Solicitar al usuario que ingrese las coordenadas de los dos puntos
const x1 = parseFloat(prompt("Ingrese la coordenada x del primer punto: "));
const y1 = parseFloat(prompt("Ingrese la coordenada y del primer punto: "));
const x2 = parseFloat(prompt("Ingrese la coordenada x del segundo punto: "));
const y2 = parseFloat(prompt("Ingrese la coordenada y del segundo punto: "));

// Calcular la distancia entre los dos puntos
const distancia = calcularDistanciaEntrePuntos(x1, y1, x2, y2);

// Mostrar la distancia calculada
alert("La distancia entre los dos puntos es: " + distancia.toFixed(2));