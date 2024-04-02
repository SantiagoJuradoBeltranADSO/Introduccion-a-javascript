function validarEdad() {
  return new Promise((resolve, reject) => {
    const edad = parseInt(prompt("Ingrese su edad:"));

    if (isNaN(edad) || edad < 0) {
      reject("Por favor, ingrese un número positivo válido.");
    } else {
      resolve(edad);
    }
  });
}

function main() {
  validarEdad()
    .then(edad => {
      if (edad >= 18) {
        alert("Eres mayor de edad.");
      } else {
        alert("Eres menor de edad.");
      }
    })
    .catch(error => {
      alert(error);
      main(); // Llamada recursiva para volver a solicitar la edad
    });
}

main();