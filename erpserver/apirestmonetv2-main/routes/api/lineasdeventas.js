//Importamos lo necesario
const router = require('express').Router();
const Sequelize = require('sequelize');
const { LineasDeVenta } = require('../../db');

//Establecemos la ruta para obtener una venta por su id y sus lineas
router.get('/', async(req, res) => {
    const lineas_ventas = await LineasDeVenta.findAll();

    res.json({
        error: false,
        mensaje: 'Lineas de Venta obtenidas correctamente',
        data: lineas_ventas
    });
})

//Establecemos la ruta para crear una linea de venta
router.post('/', async(req, res) => {
    const linea_venta = await LineasDeVenta.create(req.body);
    
    res.json({
        error: false,
        data: linea_venta
    });
});

//Establecemos la ruta para obtener una venta por su id y sus lineas
router.get('/:idVenta', async(req, res) => {
    const lineas_ventas = await LineasDeVenta.findAll({
        where: { idLinea: req.params.idVenta}
    });

    res.json({
        error: false,
        mensaje: 'Lineas de Venta obtenidas correctamente',
        data: lineas_ventas
    });
})

//Establecemos la ruta para actualizar una linea de venta
router.put('/:idLineaVenta', async(req, res) => {
    const linea_venta = await LineasDeVenta.update(req.body, {
        where: { id: req.params.idLineaVenta }
    });
    
    res.json({
        error: false,
        data: linea_venta
    });
})

//Establecemos la ruta para eliminar una linea de venta
router.delete('/:idLineaVenta', async(req, res) => {
    const linea_venta = await LineasDeVenta.destroy({
        where: { id: req.params.idLineaVenta }
    });
    
    res.json({
        error: false,
        data: linea_venta
    });
});

//Exportamos el router
module.exports = router;
