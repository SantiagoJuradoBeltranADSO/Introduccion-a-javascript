// Solicitar al usuario que ingrese la calificación numérica
const calificacionNumerica = parseFloat(prompt("Ingrese la calificación numérica:"));

// Definir las asignaciones de calificación literal según el rango de calificaciones numéricas
let calificacionLiteral;

if (calificacionNumerica >= 9.1 && calificacionNumerica <= 10) {
    calificacionLiteral = "A (Excelente)";
} else if (calificacionNumerica >= 8.1 && calificacionNumerica < 9) {
    calificacionLiteral = "A (Muy bien)";
} else if (calificacionNumerica >= 7.5 && calificacionNumerica < 8) {
    calificacionLiteral = "A (Bien)";
} else {
    calificacionLiteral = "NA (No Aprobado)";
}

// Mostrar la calificación literal asignada
console.log("Calificación literal asignada: " + calificacionLiteral);