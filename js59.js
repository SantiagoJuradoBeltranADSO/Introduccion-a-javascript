// Solicitar al usuario que ingrese la edad, estatura y peso del postulante
const edad = parseInt(prompt("Ingrese la edad del postulante:"));
const estatura = parseFloat(prompt("Ingrese la estatura del postulante en cm:"));
const peso = parseFloat(prompt("Ingrese el peso del postulante en kg:"));

// Verificar si el postulante cumple con los requisitos
if (edad <= 19 && estatura > 175 && peso >= 75 && peso <= 80) {
    console.log("El postulante cumple con los requisitos y puede ser seleccionado para el equipo de básquetbol.");
} else {
    console.log("El postulante no cumple con los requisitos para ser seleccionado para el equipo de básquetbol.");
}