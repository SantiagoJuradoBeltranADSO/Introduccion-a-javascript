function division() {
    try {
      const dividendo = parseFloat(prompt("Ingrese el dividendo:"));
      const divisor = parseFloat(prompt("Ingrese el divisor:"));

      if (divisor === 0 || isNaN(dividendo) || isNaN(divisor)) {
        throw "Error: El divisor no puede ser cero y ambos números deben ser válidos.";
      }

      const resultado = dividendo / divisor;
      console.log("El resultado de la división es:", resultado);
    } catch (error) {
      console.error(error);
    }
  }

  division();