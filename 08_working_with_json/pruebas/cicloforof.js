// Es el ciclo indicado para recorrer cualquier tipo de coleccion: mapas, arrays o sets (conjuntos)

// Recorriendo un array:
var frameworks = new Array("Nodejs", "Rails");

console.log("Recorro el array frameworks:");
for (let framework of frameworks) {
    console.log(framework);
};

// Recorriendo un set: (es un array con elementos únicos)
var miset = new Set();
miset.add("Jonatandb");
miset.add("Fiesta");
miset.add("Jonatandb"); // No lo agrega porque ya existe.
console.log("Recorro el set miset:");
for (let valor of miset) {
    console.log(valor);
};

// Recorriendo un mapa:
var paises = new Map();
paises.set("Pais1", "Argentina");
paises.set("Pais2", "Brasil");
paises.set("Pais3", "Colombia");
paises.set("Pais4", "Argentina"); // No hay error en caso de repetir datos.
paises.set("Pais4", "Perú"); // Pisa el valor 'Argentina', por utilizarse la misma key para 'Perú'.
console.log("Recorro el mapa paises:");
for (let pais of paises) {
    console.log(pais);
};