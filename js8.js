let puntuacion = parseFloat(prompt("Ingrese su puntuación en la evaluación:"));

let dineroConseguido;

if (puntuacion === 0.0) {
  dineroConseguido = 0;
} else if (puntuacion === 0.4) {
  dineroConseguido = 2400 * puntuacion;
} else if (puntuacion === 0.6) {
  dineroConseguido = 2400 * puntuacion;
} else if (puntuacion > 0.6) {
  dineroConseguido = 2400 * puntuacion;
} else {
  console.log("Puntuación no válida.");
}

console.log("La cantidad de dinero conseguida es:", dineroConseguido.toFixed(2), "euros");