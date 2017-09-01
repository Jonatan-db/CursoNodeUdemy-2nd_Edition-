// Destructing assigment (Asignacion de desestructuración):
// Es una opción que nos brinda javascript para asignar una estructura completa en una sola sentencia.

var animales = new Array("Perro", "Gato", "Loro");

// Asignacion sin destructuring:
// var perro = animales[0];
// var gato = animales[1];
// var loro = animales[2];

//console.log(perro, gato, loro);

// Asignacion con destructuring:

var [loro, gato, perro] = animales;

console.log(loro, gato, perro);