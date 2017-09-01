// console.log('Convierto objeto a string:\n');
// var miObj = {
//     nombre: "Jonatandb"
// };
// var result = JSON.stringify(miObj);
// console.log('Origen: ', typeof miObj);
// console.log('Contenido: ', miObj);
// console.log('Destino: ', typeof result);
// console.log('Resultado: ', result);

// console.log('\nConvierto string a objeto:\n');
// var personaString = '{"nombre":"Jonatandb", "edad":35}';
// var objPersona = JSON.parse(personaString);
// console.log('Origen: ', typeof personaString);
// console.log('Contenido: ', personaString);
// console.log('Destino: ', typeof objPersona);
// console.log('Resultado: ', objPersona);

const fs = require('fs');

console.log('\n----------------------------------');

// Escritura: 

var miNota = {
    title: "Primera nota",
    body: "Esta es mi primera nota probando JSON"
};
var miNotaString = JSON.stringify(miNota);
fs.writeFileSync('notas.json', miNotaString);

console.log('\nObjeto miNota creado: \n', miNota);
console.log('\nObjeto en vesrión JSON, miNotaString: \n', miNotaString);
console.log('\nNota guardada en disco.\n');

// Lectura: 

var miNotaJSON = fs.readFileSync('notas.json');
var miNotaObj = JSON.parse(miNotaJSON);

console.log('\nNota leida desde disco, miNotaJSON: \n', miNotaJSON);
console.log('\nNota convertida a objeto, miNotaObj: \n', miNotaObj);