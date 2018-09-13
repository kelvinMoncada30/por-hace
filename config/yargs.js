const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Describe las tareas por hacer'

};

const completado = {
    default: true,
    alias: 'c'
}


const argv = require('yargs').
command('crear', 'crear un elemepor por hacer', { descripcion })
    .command('actualizar', 'actualizar el estado completo de una tarea', { descripcion, completado })
    .command('borrar', 'borra una tarea', { descripcion })
    .help().argv;


module.exports = {
    argv
}