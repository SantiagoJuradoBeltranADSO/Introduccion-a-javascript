function calcularSueldo(nombre, horasTrabajo, pagoHora) {
    const sueldo = horasTrabajo * pagoHora;
    return sueldo;
}

// Solicitar al usuario que ingrese los datos del empleado
const nombreEmpleado = prompt("Ingrese el nombre del empleado: ");
const horasTrabajo = parseFloat(prompt("Ingrese las horas de trabajo del empleado: "));
const pagoHora = parseFloat(prompt("Ingrese el pago por hora del empleado: "));

// Calcular el sueldo del empleado
const sueldoEmpleado = calcularSueldo(nombreEmpleado, horasTrabajo, pagoHora);

// Mostrar el sueldo del empleado
alert("El sueldo de " + nombreEmpleado + " es: " + sueldoEmpleado.toFixed(2));