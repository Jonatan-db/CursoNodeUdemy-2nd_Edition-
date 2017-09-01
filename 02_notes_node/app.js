console.log('Iniciando aplicación...');

const fs = require('fs'); // Modulo FS: https://nodejs.org/api/fs.html

const os = require('os'); // Modulo OS: https://nodejs.org/api/os.html

var user = os.userInfo();

//console.log(user);

fs.appendFileSync('saludos.txt', 'Bienvenido ' + user.username + '!');

// Versión usando EC6
fs.appendFileSync('saludos.txt', `Bienvenido ${user.username}!`);

var mensaje = fs.readFileSync('saludos.txt', 'utf8');

console.log(mensaje);