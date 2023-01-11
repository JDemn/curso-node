const { v4: uuidv4 } = require('uuid');
console.log( uuidv4());
class Tarea{

    id = '';
    desc = '';
    endedIn= null;
    
    constructor(desc){
        this.id = uuidv4();
        this.desc = desc;
    }
}

module.exports = Tarea;