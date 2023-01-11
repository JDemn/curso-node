const { stdin } = require('process');

require('colors');
const menu = () => {

    return new Promise((resolve) => {
        console.clear()
        console.log('================================='.green);
        console.log('Choose an option'.yellow);
        console.log('=================================\n'.green);


        console.log(`${'1.'.yellow} Crear Tarea`.white);
        console.log(`${'2.'.yellow} Listar tareas`.white);
        console.log(`${'3.'.yellow} Listar tareas completadas`.white);
        console.log(`${'4.'.yellow} Listar tareas pendientes`.white);
        console.log(`${'5.'.yellow} Completar tarea(s)`.white);
        console.log(`${'6.'.yellow} Borrar tarea`);
        console.log(`${'0.'.yellow} salir \n`.red);
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question(`Choose an option : \n`, (opt) => {
            readline.close();
            resolve(opt)
        })
    })
}
const pausa = () => {
    new Promise(resolve=>{
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`\n Presione ${'ENTER'.yellow} para continuar : \n`, () => {
            readline.close();
            resolve()
        })
    })
}

module.exports = {
    menu,
    pausa
}