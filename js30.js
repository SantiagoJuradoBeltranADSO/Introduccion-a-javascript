function comprobarFortalezaContraseña(contraseña) {
    // Expresión regular para verificar la fortaleza de la contraseña
    const expresionRegular = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,12}$/;

    // Comprobar si la contraseña cumple con los requisitos
    if (expresionRegular.test(contraseña)) {
        return true;
    } else {
        return false;
    }
}

// Solicitar al usuario que ingrese la contraseña
const contraseña = prompt("Ingrese su contraseña: ");

// Comprobar la fortaleza de la contraseña
if (comprobarFortalezaContraseña(contraseña)) {
    alert("La contraseña es fuerte y cumple con los requisitos.");
} else {
    alert("La contraseña no cumple con los requisitos mínimos.");
}   

// En este código, la expresión regular ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,12}$ verifica los siguientes criterios:

// (?=.*[a-z]): Debe contener al menos una letra minúscula.
// (?=.*[A-Z]): Debe contener al menos una letra mayúscula.
// (?=.*\d): Debe contener al menos un dígito.
// .{8,12}: La longitud de la contraseña debe estar entre 8 y 12 caracteres.
// La función test() de la expresión regular se utiliza para verificar si la contraseña cumple con estos criterios. Si la contraseña cumple con los requisitos, se devuelve true, de lo contrario se devuelve false.

// Este código solicita al usuario que ingrese su contraseña y luego verifica su fortaleza utilizando la función comprobarFortalezaContraseña(). Dependiendo del resultado, se muestra un mensaje indicando si la contraseña cumple o no con los requisitos mínimos.