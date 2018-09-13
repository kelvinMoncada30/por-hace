//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const color = require('colors');
const { crear, getListado, actualizar, borrar } = require('./por-hacer/por-hacer');


let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = getListado();
        for (let tarea of listado) {
            console.log('====Por hacer======'.green);
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado);
            console.log('========='.green);
        }
        break;
    case 'actualizar':
        let actualiza = actualizar(argv.descripcion, argv.completado);
        console.log(actualiza);
        break;
    case 'borrar':
        let borrado = borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no es reconocido');
        break;


}