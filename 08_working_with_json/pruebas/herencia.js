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

class PerroVolador extends Perro {
    constructor(nombre, color, edad) {
        super(nombre, color);
        this.edad = edad;
        console.log("Acaba de nacer un Perro Volador llamado " + this.nombre + " de " + this.edad + " años de edad.");
    }

    volar() {
        console.log("Fiú! (El perro ya voló).");
    }
}

var pv = new PerroVolador("Firulai", "Gris", 45);
pv.ladrar();
pv.volar();