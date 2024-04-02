// Función para calcular el pago de la llamada
function calcularPagoLlamada(duracionMinutos) {
    const costoMinuto = 355;
    const iva = 0.20;
    
    const costoSinIVA = duracionMinutos * costoMinuto;
    const ivaAplicado = costoSinIVA * iva;
    const costoTotal = costoSinIVA + ivaAplicado;
    
    return [costoSinIVA, costoTotal];
}

// Función para solicitar la duración de la llamada y mostrar el precio
function mostrarPrecio() {
    const tiempoMinutos = parseFloat(prompt("Ingrese la duración de la llamada en minutos: "));
    
    if (isNaN(tiempoMinutos) || tiempoMinutos <= 0) {
        console.log("Error: Por favor, ingrese un valor numérico válido y mayor que cero para la duración de la llamada.");
        return;
    }
    
    const [precioSinIVA, precioConIVA] = calcularPagoLlamada(tiempoMinutos);
    console.log("El precio sin IVA es:", precioSinIVA.toFixed(2), "pesos.");
    console.log("El precio con IVA es:", precioConIVA.toFixed(2), "pesos.");
}

// Ejecutar la función mostrarPrecio al cargar el script
mostrarPrecio();