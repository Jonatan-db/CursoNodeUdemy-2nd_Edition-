// Map es una estructura de datos compuesta de una clave y un valor.

// Creación 
var auto = new Map();

// Agregado de entradas al mapa
auto.set("Velocidad maxima", 100);
auto.set("Marca", "Fiat");
auto.set("Color", "Rojo");

console.log('Contenido del mapa:');
console.log(auto);

// Consulta de entradas en el mapa
console.log(`Obtengo la entrada con clave Marca (auto.get("Marca")): ${auto.get("Marca")}`);

// Verificar si existe una entrada en el mapa
console.log(`Busco una entrada con clave 'Color': ${auto.has("Color")}`); // Busca solo entre las claves y es Case sensitive.
console.log(`Busco una entrada con clave 'color': ${auto.has("color")}`); // No lo encuentra
console.log(`Tamaño del mapa: ${auto.size}`);

console.log("\nClaves: ");
var mapIter = auto.keys();
var temp = mapIter.next().value;
while (temp !== undefined) {
    console.log(temp);
    temp = mapIter.next().value;
}

console.log("\nValores: ");
var mapIter2 = auto.values();
var temp2 = mapIter2.next().value;
while (temp2 !== undefined) {
    console.log(temp2);
    temp2 = mapIter2.next().value;
}


console.log("\nEntradas: ");
var mapIter3 = auto.entries();
var temp3 = mapIter3.next().value;
while (temp3 !== undefined) {
    console.log(temp3);
    temp3 = mapIter3.next().value;
}