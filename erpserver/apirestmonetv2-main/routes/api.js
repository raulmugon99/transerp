//Importamos el router de express
const router = require('express').Router();

//Obtenemos las rutas de cada objeto
const apiLineasVentasRouter = require('./api/lineasdeventas');
const apiPagosPendientesRouter = require('./api/pagos_pendientes');
const apiServiciosRouter = require('./api/servicios');
const apiProductosRouter = require('./api/productos');
const apiUsersRouter = require('./api/users');
const apiClientesRouter = require('./api/clientes');
const apiVentasRouter = require('./api/ventas');
const middleware = require('./middlewares');

//Establecemos las rutas
router.use('/lineasdeventas', middleware.checkToken, apiLineasVentasRouter);
router.use('/pagos-pendientes', middleware.checkToken, apiPagosPendientesRouter);
router.use('/servicios', middleware.checkToken, apiServiciosRouter);
router.use('/productos', middleware.checkToken, apiProductosRouter);
router.use('/clientes', middleware.checkToken, apiClientesRouter);
router.use('/ventas', middleware.checkToken, apiVentasRouter);
router.use('/users', apiUsersRouter);

//Exportamos el router
module.exports = router;
