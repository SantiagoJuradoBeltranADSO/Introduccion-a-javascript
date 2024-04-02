function calcularVolumenDeposito(radio, altura) {
    const volumen = Math.PI * Math.pow(radio, 2) * altura;
    return volumen;
}

function calcularTiempoLlenadoDeposito(volumen, caudal) {
    const tiempoSegundos = volumen / caudal;
    const tiempoMinutos = tiempoSegundos / 60; // Convertir segundos a minutos
    return tiempoMinutos;
}

// Solicitar al usuario que ingrese los datos del depósito y del caudal
const radio = parseFloat(prompt("Ingrese el radio del depósito en metros: "));
const altura = parseFloat(prompt("Ingrese la altura del depósito en metros: "));
const caudal = parseFloat(prompt("Ingrese el caudal en litros por segundo: "));

// Calcular el volumen del depósito
const volumenDeposito = calcularVolumenDeposito(radio, altura);

// Calcular el tiempo estimado para el llenado del depósito
const tiempoLlenado = calcularTiempoLlenadoDeposito(volumenDeposito, caudal);

// Mostrar el tiempo estimado para el llenado del depósito
alert("El tiempo estimado para el llenado del depósito es de aproximadamente " + tiempoLlenado.toFixed(2) + " minutos.");