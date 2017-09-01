//console.log('Iniciando notes.js...');

const fs = require('fs');

var fetchNotes = () => {
    try {
        var notes = fs.readFileSync('notes-data.json');
        return JSON.parse(notes);
    } catch (e) {
        return [];
    }
}

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var logNote = (note) => {
    console.log('-------');
    console.log('Titulo:   ', note.title);
    console.log(note.body ? `Contenido: ${note.body}` : 'Contenido:');
}

var addNote = (title, body) => {
    //console.log("Agregando nota: ", title, body);
    var notes = fetchNotes();
    var note = {
        title,
        body
    }
    var duplicadas = notes.filter((note) => note.title === title);
    if (duplicadas.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    return fetchNotes();
};

var getNote = (title) => {
    var notes = fetchNotes();
    var nota = notes.filter((note) => note.title === title);
    return nota[0];
};

var removeNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};