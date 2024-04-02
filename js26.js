function celsiusToFahrenheit(gradosCelsius) {
    return (gradosCelsius * 9/5) + 32;
}

// Solicitar temperatura al usuario
const temperaturaCelsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius: "));

// Verificar si la entrada es válida
if (!isNaN(temperaturaCelsius)) {
    const temperaturaFahrenheit = celsiusToFahrenheit(temperaturaCelsius);
    const mensaje = temperaturaCelsius + " grados Celsius equivalen a " + temperaturaFahrenheit.toFixed(2) + " grados Fahrenheit.";
    alert(mensaje);
} else {
    alert("Error: Ingrese una temperatura válida.");
}