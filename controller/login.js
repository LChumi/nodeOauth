const login = async (req, res) => {
    try {
        const { username, clave } = req.body;
        if (username === 'usuario' && clave === '123') {
            res.send('Usuario autenticado');
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
