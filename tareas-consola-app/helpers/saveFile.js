const fs = require('fs');

//save a note on db folder
const saveFile=( data )=>{
    const file = './db/data.json';
    fs.writeFileSync(file,JSON.stringify(data));
}

module.exports={
    saveFile
}