// Solicitar al usuario que ingrese la cantidad de cursos
const cantidadCursos = parseInt(prompt("Ingrese la cantidad de cursos que lleva el alumno:"));

// Definir el costo por curso
let costoPorCurso;

if (cantidadCursos <= 6) {
    costoPorCurso = 2000000; // $2.000.000 por curso
} else {
    costoPorCurso = 1200000; // $1.200.000 por curso
}

// Calcular el pago total de los cursos
const pagoTotal = cantidadCursos * costoPorCurso;

// Mostrar el pago total
console.log("El pago total por los cursos es: $" + pagoTotal);