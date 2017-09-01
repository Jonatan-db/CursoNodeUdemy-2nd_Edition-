console.log('Iniciando app.js...');

const fs = require('fs');
const os = require('os');

var username = os.userInfo().username;

fs.appendFileSync('saludos.txt', `Bienvenido ${username}!`);

const testmodulo = require('./testmodulo.js'); // Importo mi módulo

//console.log(testmodulo.devolvermensaje()); // Ejecuto un método de mi módulo

fs.appendFileSync('saludos.txt', '\nMensaje desde el modulo: \n' + testmodulo.devolvermensaje());

console.log('Suma desde el modulo "10 + (-3)" = ' + testmodulo.suma(10, -3));