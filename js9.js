let edad = parseInt(prompt("Ingrese la edad del cliente:"));

    let precioEntrada;

    if (edad < 4) {
      precioEntrada = 0;
    } else if (edad >= 4 && edad <= 18) {
      precioEntrada = 5;
    } else {
      precioEntrada = 10;
    }

    console.log("El precio de la entrada es:", precioEntrada, "euros");