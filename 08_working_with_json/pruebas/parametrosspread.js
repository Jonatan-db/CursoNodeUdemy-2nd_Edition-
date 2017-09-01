function device(type, name, brand) {
    console.log(`El ${type} ${name} es de la marca ${brand}.`);
}

var datos = new Array("Celular", "S4", "Samsung");

// Pasaje de datos habitual:
//device(datos[0], datos[1], datos[2]);

// Pasaje de parametros Spread:
device(...datos);
// Si tiene de valores de menos el método obtiene undefined
// Si tiene valores de mas, son ignorados

// Test con Set: OK
var miSet = new Set();
miSet.add("Joni");
miSet.add("Pablo");
//miSet.add("Luis");    
//miSet.add("Graciela");

device(...miSet); // Si faltan, el metodo obtiene undefined


// Test con Map:
var miMap = new Map();
miMap.set("Nombre", "Jonatandb");
miMap.set("Apellido", "Raul");
miMap.set("Direccion", "Antonio");
miMap.set("Nombre", "Hector");

device(miMap); // No es capas de leer y utilizar los datos de un map.