//Importamos los componentes necesarios
const jwt = require('jwt-simple');
const moment = require('moment');

//Creamos la funcion checkToken que comprobara que el token pasado es correcto
const checkToken = (req, res, next) => {

    //Si no se pasa un user-token, se devuelve un mensaje de error
    if (!req.headers['user-token']) {
        return res.json({
            error: true,
            mensaje: 'Acceso denegado. Debes incluir un token.'
        })
    }

    const userToken = req.headers['user-token'];
    let payload = {};

    try {
        payload = jwt.decode(userToken, 'MONETPYE_rmg99_V2')
    } catch (err) {
        return res.json({
            error: true,
            mensaje: 'El token pasado no es correcto'
        })
    }

    //Si el token pasado ha expirado, se muestra un mensaje por pantalla
    if (payload.expiredAt < moment.unix()) {
        return res.json({
            error: true,
            mensaje: 'El token pasado ha expirado.'
        })
    }
    
    req.usuarioId = payload.usuarioId;

    //console.log(payload);
    
    //Si no hay ningun error permitimos el paso
    next();
}

//Exportamos la funcion checkToken
module.exports = {
    checkToken: checkToken
}
