// Cantidad de cacao deseada
const cacaoDeseado = 20; // gramos

// Proporción de cacao en la receta original (por cada 100 gramos de harina)
const proporcionCacao = 10; // gramos
const proporcionHarina = 100; // gramos

// Calcular la cantidad de harina necesaria utilizando regla de tres simple
const cantidadHarina = (cacaoDeseado * proporcionHarina) / proporcionCacao;

// Mostrar la cantidad de harina necesaria
console.log("La cantidad de harina para hacer el bizcocho es: " + cantidadHarina + " gramos.");