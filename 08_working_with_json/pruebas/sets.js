// Los sets (o conjunto) son una colección de valores iterables.
// Importante: Cada valor es único.

var perros = new Set();

perros.add("Pequinés");
perros.add("Bulldog");
perros.add("Chiguagua");

console.log(perros);

console.log(perros.has("Chiguagua"));

console.log("Cantidad de entradas: " + perros.size);

perros.add("Bulldog"); // Se ignora porque ya existe un dato con ese valor.

console.log(perros);

perros.delete("Bulldog"); // Elimino un valor

console.log(perros);