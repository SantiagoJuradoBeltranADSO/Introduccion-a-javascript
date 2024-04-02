// Solicitar al usuario la cantidad a invertir, el interés anual y el número de años
const cantidadInvertir = parseFloat(prompt("Ingrese la cantidad a invertir:"));
const interesAnual = parseFloat(prompt("Ingrese el interés anual en porcentaje (%):"));
const numeroAnios = parseInt(prompt("Ingrese el número de años de la inversión:"));

// Calcular el interés anual en valor decimal
const interesDecimal = interesAnual / 100;
