function verificarTributacion() {
    const edad = parseInt(prompt("Ingrese su edad:"));
    const ingresosMensuales = parseFloat(prompt("Ingrese sus ingresos mensuales en euros:"));

    if (isNaN(edad) || isNaN(ingresosMensuales)) {
      console.error("Por favor, ingrese valores numéricos válidos.");
      return;
    }

    if (edad > 16 && ingresosMensuales >= 1000) {
      console.log("Debe tributar.");
    } else {
      console.log("No debe tributar.");
    }
  }

  verificarTributacion();
