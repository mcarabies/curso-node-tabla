const { number } = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const color = require('colors');


console.clear();


const tabla = argv.base;
const listar = argv.listar;
const hasta = argv.hasta;
crearArchivo(tabla, listar, hasta)
    .then(nombreArchivo => console.log(nombreArchivo, 'Creado'.green))
    .catch(err => console.log(err));




