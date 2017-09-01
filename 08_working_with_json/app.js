//console.log("Iniciando app.js...");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleDefinition = {
    describe: 'Titutlo de la nota',
    demand: true,
    alias: 't'
}
const bodyDefinition = {
    describe: 'Cuerpo de la nota',
    demand: true,
    alias: 'b'
}
const argv = yargs
    .command('list', 'Muestra la lista de notas')
    .command('add', 'Agrega una nueva nota', {
        title: titleDefinition,
        body: bodyDefinition
    })
    .command('read', 'Muestra el contenido de una nota', {
        title: titleDefinition
    })
    .command('remove', 'Elimina una nota', {
        title: titleDefinition
    })
    .help()
    .argv;

const command = process.argv[2];
//console.log('\nComando: ' + command + '\n');
//console.log('Yargs', argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Nota creada:');
        notes.logNote(note);
    } else {
        console.log("Titulo de nota ya utilizado.");
    }

} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log('Listando ' + allNotes.length + ' nota(s)');
    // Forma clásica:
    // if (allNotes !== undefined && allNotes.length !== 0) {
    //     console.log('Listado de notas: (' + allNotes.length + ' en total)');
    //     console.log('-----------------\n');
    //     allNotes.forEach(function(note) {
    //         notes.logNote(note);
    //     }, this);
    // } else {
    //     console.log('No hay notas.');
    // }

    // Forma mejorada 1:
    // allNotes.forEach((note) => {
    //     notes.logNote(note);
    // });

    // Forma mejorada 2:
    allNotes.forEach((note) => notes.logNote(note));

} else if (command === 'remove') {
    if (notes.removeNote(argv.title)) {
        console.log('Nota eliminada.');
    } else {
        console.log('No se encontró la nota.');
    }

} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        console.log("Nota encontrada:");
        notes.logNote(note);
    } else {
        console.log("No se encontró la nota.");
    }
} else {
    console.log('Comando no reconocido.');
}