const argv =require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base de la tabla de multiplicar'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)){
            throw 'La base tiene que ser un Número'
        }
        return true;
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'mostar la tabla por consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'total de multiplicador'
    })
    .argv;

    module.exports = argv;