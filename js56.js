// Solicitar al usuario que ingrese el saldo inicial del depósito
const saldoInicial = parseFloat(prompt("Ingrese el saldo inicial del depósito:"));

// Definir las tasas de interés
const tasaInteresMenor100k = 0.03; // 3%
const tasaInteresMayor100k = 0.04; // 4%

// Calcular el interés anual y el saldo final según el saldo inicial
let interesPagado;
let saldoFinal;

if (saldoInicial < 100000) {
    interesPagado = saldoInicial * tasaInteresMenor100k;
} else {
    interesPagado = saldoInicial * tasaInteresMayor100k;
}

saldoFinal = saldoInicial + interesPagado;

// Mostrar el saldo final y el interés pagado
console.log("Saldo final: $" + saldoFinal.toFixed(2));
console.log("Interés pagado: $" + interesPagado.toFixed(2));