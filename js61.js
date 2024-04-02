// Solicitar al usuario que ingrese la cantidad de notas de los alumnos
const cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas de los alumnos:"));

// Inicializar variables para la nota más alta, nota más baja y contadores para las calificaciones
let notaMasAlta = -Infinity;
let notaMasBaja = Infinity;
let cantidadMaximaNota = 0;
let cantidadCalificacionA = 0;
let cantidadCalificacionB = 0;
let cantidadCalificacionC = 0;
let cantidadCalificacionD = 0;

// Iterar para ingresar las notas de los alumnos y calcular las estadísticas
for (let i = 1; i <= cantidadNotas; i++) {
    const nota = parseFloat(prompt("Ingrese la nota del alumno " + i + ":"));

    // Actualizar la nota más alta y más baja
    if (nota > notaMasAlta) {
        notaMasAlta = nota;
    }
    if (nota < notaMasBaja) {
        notaMasBaja = nota;
    }

    // Contabilizar la cantidad de alumnos que obtuvieron la máxima nota de 100
    if (nota === 100) {
        cantidadMaximaNota++;
    }

    // Determinar la calificación del alumno y actualizar los contadores
    if (nota >= 90 && nota <= 100) {
        cantidadCalificacionA++;
    } else if (nota >= 80 && nota < 90) {
        cantidadCalificacionB++;
    } else if (nota >= 70 && nota < 80) {
        cantidadCalificacionC++;
    } else if (nota >= 60 && nota < 70) {
        cantidadCalificacionD++;
    }
}

// Mostrar los resultados
console.log("Nota más alta: " + notaMasAlta);
console.log("Nota más baja: " + notaMasBaja);
console.log("Cantidad de alumnos que obtuvieron la máxima nota de 100: " + cantidadMaximaNota);
console.log("Cantidad de alumnos con calificación 'a': " + cantidadCalificacionA);
console.log("Cantidad de alumnos con calificación 'b': " + cantidadCalificacionB);
console.log("Cantidad de alumnos con calificación 'c': " + cantidadCalificacionC);
console.log("Cantidad de alumnos con calificación 'd': " + cantidadCalificacionD);