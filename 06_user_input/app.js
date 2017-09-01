console.log("Iniciando app.js...");

//console.log(process.argv);

var command = process.argv[2];

console.log('Comando: ' + command);

if (command === 'add') {
    console.log("Agregando nota...")
} else if (command === 'list') {
    console.log('Listando notas...');
} else if (command === 'remove') {
    console.log('Borrando nota...');
} else if (command === 'read') {
    console.log('Leyendo nota...');
} else {
    console.log('Comando no reconocido.');
}