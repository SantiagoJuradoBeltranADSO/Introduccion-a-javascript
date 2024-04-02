// Definir la tasa de IVA (en porcentaje)
const tasaIVA = 0.19; // 19%

// Arreglo para almacenar los precios de los 5 productos
const preciosProductos = [];

// Solicitar al usuario que ingrese los precios de los 5 productos
for (let i = 1; i <= 5; i++) {
    const precioProducto = parseFloat(prompt("Ingrese el precio del producto " + i + ":"));
    preciosProductos.push(precioProducto);
}

// Calcular el subtotal
const subtotal = preciosProductos.reduce((acc, precio) => acc + precio, 0);

// Calcular el IVA
const iva = subtotal * tasaIVA;

// Calcular el total
const total = subtotal + iva;

// Mostrar los resultados
console.log("Subtotal: $" + subtotal.toFixed(2));
console.log("IVA: $" + iva.toFixed(2));
console.log("Total: $" + total.toFixed(2));