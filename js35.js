// Costo de cada juego de llaves hexagonales
const costoLlaves = 11500;

// Costo de la bomba
const costoBomba = 1168000;

// Costo de cada caja de pernos
const costoPernos = 87000;

// Cantidad de juegos de llaves hexagonales
const cantidadLlaves = 5;

// Cantidad de cajas de pernos
const cantidadPernos = 3;

// Dinero restante después de pagar
const dineroRestante = 91000;

// Calcular el costo total de las compras
const costoTotal = (costoLlaves * cantidadLlaves) + costoBomba + (costoPernos * cantidadPernos);

// Calcular el dinero inicial del jefe de obra
const dineroInicial = costoTotal + dineroRestante;

// Mostrar el dinero inicial del jefe de obra
console.log("El jefe de obra tenía inicialmente $" + dineroInicial);