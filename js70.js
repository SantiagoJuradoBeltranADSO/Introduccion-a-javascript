
// Definir la contraseña
const contraseña = "contraseña";

// Solicitar al usuario que ingrese la contraseña
let intentoContraseña = prompt("Ingrese la contraseña:");

// Solicitar la contraseña hasta que sea correcta
while (intentoContraseña !== contraseña) {
    // Mostrar un mensaje de error y solicitar la contraseña nuevamente
    console.log("Contraseña incorrecta. Por favor, inténtelo de nuevo.");
    intentoContraseña = prompt("Ingrese la contraseña:");
}

// Mostrar un mensaje de éxito cuando se ingresa la contraseña correcta
console.log("¡Contraseña correcta! Bienvenido.");