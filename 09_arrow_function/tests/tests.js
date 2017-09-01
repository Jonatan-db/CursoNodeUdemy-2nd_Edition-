var user = {
    name: 'Jony',
    arrow1: () => {
        //console.log(`(arrow1)Hola ` + name);      // Error:  name is not defined.
        console.log(`(arrow1)Hola ` + this.name); // Hola undefined
    },
    arrow2: (a, b) => {
        console.log("(arrow2)Parametros recibidos: ", arguments); //Devuelve el objeto process
    },
    normal1() {
        console.log(`(normal1)Hola ${this.name}!`);
    },
    normal2(a, b) {
        console.log("(normal2)Parametros recibidos: ", arguments);
    }
};
user.arrow1();
user.arrow2("lala", "lele");
user.normal1();
user.normal2("lala", "lele");