
const fs = require ('fs');
const color = require('colors');

const crearArchivo = async(base=5, listar, hasta) => {
    
    try {
        if (listar){
            console.log(`===================
            Tabla del ${base}
            ===================`.bold)    
        }
        
   
        salida ='';

        for (let i=1; i<=hasta; i++) {
            salida +=`${base} X ${i} = ${base*i}\n`;
        }
        if(listar){
            console.log(salida);
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
        return `tabla-${base}.txt`
    } catch (error) {
        console.log(error);
    }

    
}

module.exports = {
    crearArchivo
}