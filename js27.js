function calcularPromedioFinal(calificacionesParciales, calificacionExamenFinal, calificacionTrabajoFinal) {
    // Calcular el promedio de las calificaciones de los parciales
    const promedioParciales = calificacionesParciales.reduce((total, calificacion) => total + calificacion, 0) / calificacionesParciales.length;
    
    // Calcular el promedio final considerando los porcentajes
    const promedioFinal = (promedioParciales * 0.55) + (calificacionExamenFinal * 0.30) + (calificacionTrabajoFinal * 0.15);
    
    return promedioFinal;
}

// Solicitar al usuario que ingrese las calificaciones
const calificacionesParciales = [];
for (let i = 1; i <= 3; i++) {
    const calificacionParcial = parseFloat(prompt("Ingrese la calificación del Parcial " + i + ": "));
    calificacionesParciales.push(calificacionParcial);
}
const calificacionExamenFinal = parseFloat(prompt("Ingrese la calificación del Examen Final: "));
const calificacionTrabajoFinal = parseFloat(prompt("Ingrese la calificación del Trabajo Final: "));

// Calcular el promedio final
const promedioFinal = calcularPromedioFinal(calificacionesParciales, calificacionExamenFinal, calificacionTrabajoFinal);

// Mostrar el promedio final
alert("El promedio final de la materia de algoritmos es: " + promedioFinal.toFixed(2));