// Funcion Arrow

// Funcion clasica:
var suma = function(a, b) {
    return a + b;
}

console.log(suma(5, 5));


// Funcion arrow (forma 1)
var resta = (a, b) => a - b;

console.log(resta(10, 5));


// Funcion arrow (forma 2, con varias lineas)
var multi = (a, b) => {
    let lala = -2;
    return a * b * lala;
}

console.log(multi(10, 5));