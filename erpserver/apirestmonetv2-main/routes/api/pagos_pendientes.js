//Importamos lo necesario
const router = require('express').Router();
const Sequelize = require('sequelize');
const { PagoPendiente } = require('../../db');

//Establecemos la ruta para obtener los pagos pendientes
router.get('/', async(req, res) => {
    const pagos_pendientes = await PagoPendiente.findAll({
        order: [
            ['nombre', 'ASC'],
            ['id', 'ASC'],
        ],
    });

    res.json({
        error: false,
        data: pagos_pendientes
    });
})

//Establecemos la ruta para obtener un pago pendiente por su id
router.get('/:idPagoPendiente', async(req, res) => {
    const pago_pendiente = await PagoPendiente.findAll({
        where: { id: req.params.idPagoPendiente }
    });

    res.json({
        error:false,
        data: pago_pendiente
    });
})

//Establecemos la ruta para obtener pagos pendientes segun un criterio
router.get('/criterio/:criterio/:texto', async(req, res) => {
    const pagos_pendientes = await PagoPendiente.findAll({
        where: {
            [req.params.criterio]: {
                [Sequelize.Op.like]: "%" + req.params.texto + "%"
            },
            order: [
                ['nombre', 'ASC'],
                ['id', 'ASC'],
            ],
        }
    });

    res.json({
        error: false,
        data: pagos_pendientes
    });
})

//Establecemos la ruta para crear un pago pendiente
router.post('/', async(req, res) => {
    const pago_pendiente = await PagoPendiente.create(req.body);
    res.json({
        error: false,
        data: pago_pendiente
    });
});

//Establecemos la ruta para eliminar un pago pendiente
router.delete('/:idPagoPendiente', async(req, res) => {
    const pago_pendiente = await PagoPendiente.destroy({
        where: { id: req.params.idPagoPendiente }
    });
    
    res.json({
        error: false,
        data: pago_pendiente
    })
});

//Exportamos el router
module.exports = router;
