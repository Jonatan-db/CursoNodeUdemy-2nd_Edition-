console.log('Iniciando testmodulo.js...');

module.exports.edad = 35; // Exporto un número estático.

module.exports.devolvermensaje = () => { // Exporto un método que devuelve un string.
    return 'Saludos desde ' + module.filename;
}

module.exports.suma = (a, b) => { return a + b };