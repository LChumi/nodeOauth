const express = require('express');
const fs = require('fs');
const router = express.Router();

/**
 * Esta clase sirve para cargar las rutas de los endpoints.
 */
const PATH_ROUTES = __dirname;

const removerExtension = (fileName) => {
    return fileName.split('.').shift();
}

fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removerExtension(file); // -> Cargar los archivos en routes
    if (name !== 'index') {
        console.log(`Cargando ruta ${name}`);
        router.use(`/${name}`, require(`./${file}`)); //-> http://localhost:3000/api/"archivos de routes"
    }
});

module.exports = router;
