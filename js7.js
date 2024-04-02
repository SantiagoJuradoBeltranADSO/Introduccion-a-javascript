let rentaAnual = parseFloat(prompt("Ingrese su renta anual en euros:"));

if (rentaAnual <= 10000) {
  console.log("Tipo de impositivo: 0%");
} else if (rentaAnual > 10000 && rentaAnual <= 20000) {
  console.log("Tipo de impositivo: 5%");
} else if (rentaAnual > 20000 && rentaAnual <= 35000) {
  console.log("Tipo de impositivo: 10%");
} else if (rentaAnual > 35000 && rentaAnual <= 60000) {
  console.log("Tipo de impositivo: 20%");
} else {
  console.log("Tipo de impositivo: 45%");
}