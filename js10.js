
let tipoPizza = prompt("¿Desea una pizza vegetariana? (Sí/No)").toLowerCase();
let ingredientesDisponibles;

if (tipoPizza === 'sí' || tipoPizza === 'si') {
  ingredientesDisponibles = ["Pimiento", "Tofu"];
  console.log("Ingredientes vegetarianos disponibles: Pimiento y Tofu");
} else if (tipoPizza === 'no') {
  ingredientesDisponibles = ["Pepperoni", "Jamón", "Salmón"];
  console.log("Ingredientes no vegetarianos disponibles: Pepperoni, Jamón y Salmón");
} else {
  console.log("Respuesta no válida. Por favor, responda 'Sí' o 'No'.");
}

let ingredienteElegido = prompt("Elige un ingrediente para tu pizza: " + ingredientesDisponibles.join(", "));

console.log("Tu pizza es " + (tipoPizza === 'sí' || tipoPizza === 'si' ? "vegetariana" : "no vegetariana") + ".");
console.log("Ingredientes de tu pizza: Mozzarella, Tomate, " + ingredienteElegido);
