require('dotenv').config();
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const passport = require('./passport'); // Importa el archivo passport.js


const app = express();

app.use(cors());
app.use(express.json());
app.use(session({
    secret: '8b94f0359dfcd0163905d95d5e4b83aaa7e67e354c7d3b3d03e0d0b4c7c49dcfa9254829b1a575dde0c0196433135671d647e762979ff0f39940fae7e372265a',
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');

const puerto = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Bienvenido a la aplicación de autenticación con Google');
});
/**
 * Rutas 
 */
app.use('/api', require('./routes'));

app.listen(puerto, () => {
    console.log(`El servidor está en el puerto ${puerto}`);
});
