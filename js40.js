function calcularEdad(añoNacimiento) {
    // Obtener el año actual
    const añoActual = new Date().getFullYear();

    // Calcular la edad restando el año actual menos el año de nacimiento
    const edad = añoActual - añoNacimiento;

    return edad;
}

// Solicitar al usuario que ingrese el año de nacimiento
const añoNacimiento = parseInt(prompt("Ingrese el año de nacimiento: "));

// Calcular la edad
const edad = calcularEdad(añoNacimiento);

// Mostrar la edad calculada
console.log("La edad aproximada es: " + edad + " años.");