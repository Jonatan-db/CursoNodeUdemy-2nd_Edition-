console.log('Iniciando notes.js...');

var addNote = (title, body) => {
    console.log("Agregando nota: ", title, body);
};

var getAll = () => {
    console.log("Listado de notas...");
};

var getNote = (title) => {
    console.log("Leyendo nota ", title);
};

var removeNote = (title) => {
    console.log("Borrando nota ", title);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};