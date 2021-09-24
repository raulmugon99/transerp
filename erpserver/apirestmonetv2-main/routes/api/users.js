//Importamos lo necesario
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const moment = require('moment');
const jwt = require('jwt-simple');
const { User } = require('../../db');
const { check, validationResult } = require('express-validator');

//Establecemos la ruta para crear usuarios
router.post('/register', [
    check('username', 'El nombre de usuario es obligatorio').not().isEmpty(),
    check('password', 'La contraseña esta vacia').not().isEmpty(),
    check('email', 'El formato del correo electronico no es correcto').isEmail()
], async(req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errores: errors.array() })
    }

    req.body.password = await bcrypt.hashSync(req.body.password, 10);
    const user = User.create(req.body);
    res.json(user);
});

//Establecemos la ruta para iniciar sesion
router.post('/login',[
    check('username', 'El nombre de usuario es obligatorio').not().isEmpty(),
    check('email', 'El formato del correo electronico no es correcto').isEmail(),
    check('email', 'El correo electronico es obligatorio').not().isEmpty()
], async(req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errores: errors.array() })
    }

    const user = await User.findOne({
        where: { email: req.body.email }
    });
    if (user) {
        const iguales = bcrypt.compareSync(req.body.password, user.password);
        if (iguales) {
            res.json({ success: createToken(user) })
        } else {
            res.json({ error: 'Error en usuario y o contraseña' })
        }
    } else {
        res.json({ error: 'Error en usuario y o contraseña' })
    }
});

//Creamos el token
const createToken = (user) => {
    const payload = {
        usuarioId: user.id,
        createdAt: moment().unix()
    }

    return jwt.encode(payload, 'MONETPYE_rmg99_V2')
}

//Exportamos el router
module.exports = router;
