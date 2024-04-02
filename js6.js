let nombre = prompt("Ingrese su nombre:");
let sexo = prompt("Ingrese su sexo (M/F):");

let nombreMinusculas = nombre.toLowerCase();

let mensaje;
if ((sexo.toUpperCase() === 'M' && nombreMinusculas < 'm') || (sexo.toUpperCase() === 'H' && nombreMinusculas > 'n')) {
  mensaje = "%cUsted pertenece al grupo A.";
  console.log(mensaje, "color: blue; font-weight: bold;");
} else {
  mensaje = "%cUsted pertenece al grupo B.";
  console.log(mensaje, "color: green; font-weight: bold;");
}