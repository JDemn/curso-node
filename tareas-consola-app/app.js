require('colors');
// const {menu, pausa} = require('./helpers/menu') ejemplo manual
const {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareaBorrar,
    confirmar
} = require('./helpers/inquirer');
const { saveFile, readDb } = require('./helpers/saveFile');
const Tarea = require('./models/Tarea');
const Tareas = require('./models/Tareas');

// console.clear();
const main = async () => {
    let opt = '';
    const tareas = new Tareas();
    const tareasDB = readDb()
    if (tareasDB) {
        //Establecer las tareas
        tareas.cargeTareFromArray();
    }

    do {
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                // crear opción
                const desc = await leerInput('Descripción');
                tareas.crearTarea(desc);
                break;

            case '2':
                // console.log(tareas._listado);
                // console.log(tareas.listadoArr);
                console.log(tareas.listadoCompleto());
                break;

            case '3':
                console.log(tareas.listadoTareasCompletadas(true));
                break;
            case '4':
                console.log(tareas.listadoTareasCompletadas(false));
                break;
            case '5':
                //marcar tarea completada
                const IdTarea = await leerInput('Id de la tarea');
                console.log('tarea a completar');
                tareas.completarTarea(IdTarea);
                const endedIn = await leerInput('Escribe la fecha de hoy');
                tareas.completarTarea(endedIn);
            case '6':
                const id = await listadoTareaBorrar(tareas.listadoArr);
                // console.log({id});
                if (id !== '0') {
                    const ok = await confirmar('Estás seguro que deseas borrar la tarea?')
                    console.log({ ok });
                    (ok === true) && `${tareas.borrarTarea(id)} ${console.log('Tarea borrada exitosamente')}`;
                }
        }
        saveFile(tareas.listadoArr);
        // console.log({opt});
        // const tareas = new Tareas();
        // const tarea = new Tarea('comprar huevo');
        // tareas._listado[tarea.id] = tarea;
        // console.log(tareas);
        // (opt!=='0')&& 
        await pausa();
    } while (opt !== '0')
    // pausa();
}

main();