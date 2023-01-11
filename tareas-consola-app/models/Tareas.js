const Tarea = require("./Tarea");

/**
 *  _listado
 * {'uuid-543543-54345-65465 : {id : 12, desc:gaf, endedIn:22-10-1998}'}
 * {'uuid-543543-54345-65465 : {id : 12, desc:gaf, endedIn:22-10-1998}'}
 */
class Tareas {
    _listado = {};
    constructor(){
        this._listado={};
    }

    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }
}

module.exports = Tareas;