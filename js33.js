function calcularEdadMadreEnParto(fechaNacimientoMadre, fechaNacimientoHijo) {
    // Convertir las fechas de cadena a objetos Date
    const fechaMadre = new Date(fechaNacimientoMadre);
    const fechaHijo = new Date(fechaNacimientoHijo);

    // Calcular la diferencia en milisegundos entre las fechas
    const diferenciaTiempo = fechaHijo - fechaMadre;

    // Convertir la diferencia de milisegundos a años
    const edadMadreEnParto = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24 * 365));

    return edadMadreEnParto;
}

// Solicitar al usuario que ingrese las fechas de nacimiento de la madre y del hijo
const fechaNacimientoMadre = prompt("Ingrese la fecha de nacimiento de la madre (YYYY-MM-DD): ");
const fechaNacimientoHijo = prompt("Ingrese la fecha de nacimiento del hijo (YYYY-MM-DD): ");

// Calcular la edad de la madre en el momento del parto del hijo
const edadMadreEnParto = calcularEdadMadreEnParto(fechaNacimientoMadre, fechaNacimientoHijo);

// Mostrar la edad de la madre en el momento del parto del hijo
alert("La madre tenía " + edadMadreEnParto + " años en el momento del parto del hijo.");