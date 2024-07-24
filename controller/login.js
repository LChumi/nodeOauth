const jwt = require('jsonwebtoken');
const SECRET_KEY = 'e9c8f4e7f7a64c1c8f90d6f9e6e8f0b6c4e4f8f6d9f4e0c8d0d9e8f7c4f1d8e4f1c4e0d6e8c4d9d8c4e4c1f1e8d6f0f1c9';


const login = async (req, res) => {
    try {
        const { username, clave } = req.body;
        if (username === 'usuario' && clave === '123') {
            // Datos que deseas incluir en el payload del token
            const payload = { username };

            // Genera el token
            const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });

            // Devuelve el token al cliente
            res.json({ message: 'Usuario autenticado', token });
        } else {
            console.error('Usuario incorrecto');
            res.status(400).send('Error al autenticar');
        }
    } catch (error) {
        console.error('Error al autenticar:', error);
        res.status(500).send('Error en el servidor');
    }
};


const googleLogin = (req, res) => {
    res.send('Autenticación con Google');
};

module.exports = { login, googleLogin };
