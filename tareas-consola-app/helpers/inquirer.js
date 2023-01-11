const inquirer = require('inquirer');
require('colors');
const menuOpts = [{
    type: 'list',
    name: 'option',
    message: 'Qué desea hacer?',
    choices: [{
        value: '1',
        name: '1. Crear tarea'
    },
    {
        value: '2',
        name: '2. Listar tarea'
    },
    {
        value: '3',
        name: '3. Listar tareas completletadas'
    },
    {
        value: '4',
        name: '4. Listar tareas pendientes'
    },
    {
        value: '5',
        name: '5. Completar tarea(s)'
    },
    {
        value: '6',
        name: '6. Borrar tarea'
    },
    {
        value: '0',
        name: '0. Salir'
    }
    ]
}]
const inquirerMenu = async () => {
    console.clear()
    console.log('================================='.green);
    console.log('Choose an option'.yellow);
    console.log('=================================\n'.green);

    const {option} = await inquirer.prompt(menuOpts)

    return option;
}

const pausa=async()=>{
    const question = [{
        type : 'input',
        name : 'enter',
        message : `Presione ${'Enter'.yellow} para continuar`
    }];
    console.log(`\n`);
    await inquirer.prompt(question);
}
//catch messsage from user to create a new tarea or do something else like delete other one
const leerInput = async(message)=>{
    const question = [
        {
            type : 'input',
            name : 'desc',
            message,
            validate(value){
                if (value.length === 0 ){
                    return 'Please enter a value';
                }
                return true;
            }
        }
    ];
    const { desc } = await inquirer.prompt(question);
    return desc;
}
module.exports = {
    inquirerMenu,
    pausa,
    leerInput
}