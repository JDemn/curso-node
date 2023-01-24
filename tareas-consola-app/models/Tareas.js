const Tarea = require("./Tarea");

/**
 *  _listado
 * {'uuid-543543-54345-65465 : {id : 12, desc:gaf, endedIn:22-10-1998}'}
 * {'uuid-543543-54345-65465 : {id : 12, desc:gaf, endedIn:22-10-1998}'}
 */
class Tareas {
    _listado = {};
    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach(key=>{
            // listado.push(key);
            const tarea = this._listado[key];
            listado.push( tarea );
        });
        return listado
    }
    constructor(){
        this._listado={};
    }

    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }
    cargeTareFromArray(tarea=[]){
        tarea.forEach(tarea=>{
            this._listado[tarea.id] = tarea;
        })
    }
    listadoCompleto(){
        //Listado completo de tareas
        // 1.tareaName :: completada|pendiente
        console.log('\n');
        const tareas = this.listadoArr;
        tareas.forEach((tarea,idx)=>{
            const indice = idx+1;
            const {desc,endedIn} = tarea;
            const status = (endedIn)?'completed'.yellow : 'pending'.bgGreen;
            console.log(`${indice}. ${desc} :: ${status}`);
        })
    }
}

module.exports = Tareas;