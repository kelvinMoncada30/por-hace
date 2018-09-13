const fs = require('fs');
const colors = require('colors/safe');

let listadoPorHacer = [];

const guardaDB = () => {

    let data = JSON.stringify(listadoPorHacer); //conveirte un objeto a un Json valido
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('no se pudo grabar', err);
    });
}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }


}


const crear = (descripcion) => {

    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardaDB();
    return porHacer;

}

const getListado = () => {

    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardaDB();
        return true;
    } else return false;


}

const borrar = (descripcion) => {
    cargarDB();
    // let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    // if (index >= 0) {
    //     listadoPorHacer[index] = '';
    //     guardaDB();
    //     return true;
    // } else return false;

    let listadoNuevo = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    if (listadoNuevo.length === listadoPorHacer.length) {
        return false;
    }
    listadoPorHacer = listadoNuevo;
    guardaDB();
    return true;
}
module.exports = {

    crear,
    getListado,
    actualizar,
    borrar
}