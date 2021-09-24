//Importamos lo necesario
const router = require('express').Router();
const Sequelize = require('sequelize');
const { Ventas } = require('../../db');
const { LineasDeVenta } = require('../../db');

//Establecemos la ruta para obtener todas las ventas ordenadas por fecha
router.get('/', async(req, res) => {
    const ventas = await Ventas.findAll({
        order: [
            ['fechaVenta', 'ASC'],
            ['id', 'ASC'],
        ],
    });

    res.json({
        error: false,
        mensaje: 'Ventas obtenidas correctamente',
        data: ventas
    });
})

//Establecemos la ruta para obtener una venta por su id y sus lineas
router.get('/:idVenta', async(req, res) => {
    const venta = await Ventas.findAll({
        where: { id: req.params.idVenta }
    });
    const lineas_ventas = await LineasDeVenta.findAll({
        where: { idLinea: req.params.idVenta}
    });

    res.json({
        error: false,
        mensaje: 'Venta obtenida correctamente',
        data: venta,
        data2: lineas_ventas
    });
})

//Establecemos la ruta para obtener ventas entre 2 fechas
router.get('/entreFechas/:fecha1/:fecha2', async(req, res) => {
    const venta = await Ventas.findAll({
       where: {
            fechaVenta: {
                [Sequelize.Op.between]: [req.params.fecha1 , req.params.fecha2 ]
            }
        }})


    res.json({
        error: false,
        mensaje: 'Venta obtenida correctamente',
        data: venta,
    });
})


//Establecemos la ruta para obtener ventas segun un criterio
router.get('/criterio/:criterio/:texto', async(req, res) => {
    const ventas = await Ventas.findAll({
        where: {
            [req.params.criterio]: {
                [Sequelize.Op.like]: "%" + req.params.texto + "%"
            }
        }
    });

    res.json({
        error: false,
        mensaje: 'Ventas obtenidas correctamente',
        data: ventas
    });
})

//Establecemos la ruta para crear una venta
router.post('/', async(req, res) => {
    const venta = await Ventas.create(req.body);
    
        res.json({
        error: false,
        mensaje: 'Venta creada correctamente',
        data: venta
    });
});

//Establecemos la ruta para actualizar una venta
router.put('/:idVenta', async(req, res) => {
    const venta = await Ventas.update(req.body, {
        where: { id: req.params.idVenta }
    });
    
    res.json({
        error: false,
        mensaje: 'Venta actualizada correctamente',
        data: venta
    });
})

//Establecemos la ruta para eliminar una venta
router.delete('/:idVenta', async(req, res) => {
    const venta = await Ventas.destroy({
        where: { id: req.params.idVenta }
    });
    
    res.json({
        error: false,
        mensaje: 'Venta eliminada correctamente',
        data: venta
    });
});

//Exportamos el router
module.exports = router;
