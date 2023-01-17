require('colors');
// const {menu, pausa} = require('./helpers/menu') ejemplo manual
const { 
    inquirerMenu,
    pausa, 
    leerInput 
} = require('./helpers/inquirer');
const { saveFile } = require('./helpers/saveFile');
const Tarea = require('./models/Tarea');
const Tareas = require('./models/Tareas');

console.clear();
const main=async()=>{
    let opt = '';
    const tareas = new Tareas();
    
    do{
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                // crear opción
                const desc = await leerInput('Descripción');
                tareas.crearTarea(desc);
                break;
        
            case '2':
                // console.log(tareas._listado);
                console.log(tareas.listadoArr);
                break;
        }
        // saveFile(tareas.listadoArr);
        // console.log({opt});
        // const tareas = new Tareas();
        // const tarea = new Tarea('comprar huevo');
        // tareas._listado[tarea.id] = tarea;
        // console.log(tareas);
        (opt!=='0')&& await pausa();
    }while(opt!=='0')
    // pausa();
}

main();