// Variables de bloque

// La primer diferencia entre una variable de bloque y una normal es como se pueden declarar.

// Las variables de bloque estan limitadas a su alcance, solo existiran en el bloque donde fueron declaradas.
// Las variables normales son globales.

// Una variable de bloque se declara con let
let mivar;

// Una variable normal se declara con var
var miotravar;

// Verificación del alcance
function suma() {
    let resultado = 5 + 5;
    return resultado;
}

console.log("El resultado es: " + suma());

//console.log(resultado); // Error, la variable no existe fuera de la funcion suma()

for (var i = 0; i < 3; i++) { console.log(`i vale = ${i}`) };
console.log('Al finalizar el for, i vale = ', i); // Se puede acceder a i porque es global, sigue existiendo.

for (let j = 0; j < 3; j++) { console.log(`j vale = ${j}`) };
// console.log('Al finalizar el for, j vale = ', j); // ReferenceError: j is not defined, j es local, no existe fuera del for.