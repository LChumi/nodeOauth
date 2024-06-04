const express = require('express');
const fs = require('fs')
const router = express.Router();
/**
 * esta clase sirve para que se carguen las rutas de los endpoints 
 */
const PATH_ROUTES = __dirname;

const removerExtension=(fileName) => {
    return fileName.split('.').shift()
}

fs.readdirSync(PATH_ROUTES).filter((file) =>{
    const name= removerExtension(file)// -> aqui se cargan los archivos que esten en routes 
    if(name !== 'index'){
        console.log(`Cargando ruta ${name}`)
        router.use(`/${name}`,require(`./${file}`)) //-> todo http:3001/api/"archivos de routes"
    }
})

module.exports = router