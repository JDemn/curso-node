const fs = require('fs');

const file = './db/data.json';

//save a note on db folder
const saveFile=( data )=>{
    fs.writeFileSync(file,JSON.stringify(data));
}
//read data base info
const readDb=()=>{
    if(!fs.existsSync(file)){
        return null
    }

    const info = fs.readFileSync(file,{encoding :'utf-8'}); //esto como es un string porque se usó sgrinfy se necesita regresar a arrgleglo, parsear en pocas palabras
    const data = JSON.parse(info);
    console.log(info);
    console.log('soy la data parseada')
    console.log(data);
    return data;
}
module.exports={
    saveFile,
    readDb
}