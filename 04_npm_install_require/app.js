console.log('Starting app.js...');

const _ = require('lodash');

console.log(_.isString(true));

console.log(_.isString('Jonatandb'));

console.log(_.isString(23.4));

var miarray = ['1', '1', '2', '2', '3', '4', 'z', 'a', 'a'];

console.log('Mi array original: ' + miarray);

console.log('Mi array sin duplicados: ' + _.uniq(miarray));