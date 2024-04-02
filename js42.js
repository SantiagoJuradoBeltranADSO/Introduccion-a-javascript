// Precios de los artículos
const precioLibro = 10000; // $10.000
const precioCuaderno = 7550; // $7.550
const precioLapicero = 5550; // $5.550

// Cantidad de artículos vendidos
const cantidadLibros = parseInt(prompt("Ingrese la cantidad de libros vendidos: "));
const cantidadCuadernos = parseInt(prompt("Ingrese la cantidad de cuadernos vendidos: "));
const cantidadLapiceros = parseInt(prompt("Ingrese la cantidad de lapiceros vendidos: "));

// Calcular el monto total de la venta
const montoTotalVenta = (precioLibro * cantidadLibros) + (precioCuaderno * cantidadCuadernos) + (precioLapicero * cantidadLapiceros);

// Mostrar el monto total de la venta
console.log("El monto total de la venta es: $" + montoTotalVenta);