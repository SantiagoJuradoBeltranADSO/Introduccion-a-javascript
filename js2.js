function validarContraseña() {
    const contraseñaGuardada = "contraseña"; // La contraseña almacenada en una variable
    const contraseñaIngresada = prompt("Ingrese la contraseña:");

    const formato = /^[a-zA-Z0-9]+$/;
    if (!formato.test(contraseñaIngresada)) {
      console.log("La contraseña solo puede contener caracteres alfanuméricos.");
      return;
    }

    const contraseñaVerificar = prompt("Ingrese nuevamente la contraseña para verificar:");

    if (contraseñaGuardada.toLowerCase() === contraseñaVerificar.toLowerCase()) {
      console.log("¡La contraseña es correcta!");
    } else {
      console.log("La contraseña es incorrecta.");
    }
  }

  validarContraseña(); // Se llama a la función para iniciar la validación