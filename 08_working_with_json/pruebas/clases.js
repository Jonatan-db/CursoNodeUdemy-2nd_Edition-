class Perro {
    constructor(nombre, color) {
        this.nombre = nombre;
        this.color = color;
    }

    ladrar() {
        console.log("Guau!");
    }

    static tipo() {
        console.log("Mamifero");
    }
}

// var bobby = new Perro("Bobby", "Negro");
// console.log(bobby.nombre);
// bobby.ladrar();
Perro.tipo(); // Ejecución de método static.