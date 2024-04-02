function calcularPromedio(calificaciones) {
    const totalCalificaciones = calificaciones.reduce((total, calificacion) => total + calificacion, 0);
    const promedio = totalCalificaciones / calificaciones.length;
    return promedio;
}

// Solicitar al usuario que ingrese las calificaciones de los exámenes
const calificaciones = [];
for (let i = 1; i <= 4; i++) {
    const calificacion = parseFloat(prompt("Ingrese la calificación del Examen " + i + ": "));
    // Verificar si la calificación está dentro del rango válido (1 a 5 puntos)
    if (calificacion >= 1 && calificacion <= 5) {
        calificaciones.push(calificacion);
    } else {
        alert("Error: Ingrese una calificación válida (entre 1 y 5 puntos).");
        break;
    }
}

// Calcular el promedio de las calificaciones
const promedioCalificaciones = calcularPromedio(calificaciones);

// Mostrar el promedio de las calificaciones
alert("El promedio de las calificaciones obtenidas es: " + promedioCalificaciones.toFixed(2));