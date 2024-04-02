// Solicitar al usuario que ingrese el nombre del mes
const nombreMes = prompt("Ingrese el nombre del mes:").toLowerCase();

// Inicializar la variable para almacenar el signo zodiacal
let signoZodiacal;

// Verificar el nombre del mes y asignar el signo zodiacal correspondiente
if (nombreMes === "enero") {
    signoZodiacal = "Capricornio";
} else if (nombreMes === "febrero") {
    signoZodiacal = "Acuario";
} else if (nombreMes === "marzo") {
    signoZodiacal = "Piscis";
} else if (nombreMes === "abril") {
    signoZodiacal = "Aries";
} else if (nombreMes === "mayo") {
    signoZodiacal = "Tauro";
} else if (nombreMes === "junio") {
    signoZodiacal = "Géminis";
} else if (nombreMes === "julio") {
    signoZodiacal = "Cáncer";
} else if (nombreMes === "agosto") {
    signoZodiacal = "Leo";
} else if (nombreMes === "septiembre") {
    signoZodiacal = "Virgo";
} else if (nombreMes === "octubre") {
    signoZodiacal = "Libra";
} else if (nombreMes === "noviembre") {
    signoZodiacal = "Escorpio";
} else if (nombreMes === "diciembre") {
    signoZodiacal = "Sagitario";
} else {
    console.log("Mes no válido.");
}

// Mostrar el signo zodiacal correspondiente
if (signoZodiacal) {
    console.log("El signo zodiacal para el mes de " + nombreMes + " es: " + signoZodiacal);
}