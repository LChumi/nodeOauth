require('dotenv').config();
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');

const app = express();

app.use(cors());
app.use(express.json());
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');

const puerto = process.env.PORT || 3000;

/**
 * Rutas 
 */
app.use('/api', require('./routes'));

app.listen(puerto, () => {
    console.log(`El servidor está en el puerto ${puerto}`);
});
