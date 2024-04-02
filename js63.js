// Solicitar al usuario que ingrese su edad
const edad = parseInt(prompt("Ingrese su edad:"));

// Mostrar todos los años que ha cumplido
for (let i = 1; i <= edad; i++) {
    console.log("Año cumplido: " + i);
}