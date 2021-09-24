//Importamos lo necesario
const router = require('express').Router();
const Sequelize = require('sequelize');
const { Producto } = require('../../db');

//Establecemos la ruta para obtener todos los productos
router.get('/', async(req, res) => {
    const productos = await Producto.findAll({
        order: [
            ['nombre', 'ASC'],
            ['id', 'ASC'],
        ],
    });

    res.json({
        error: false,
        mensaje: 'Productos obtenidos correctamente',
        data: productos
    });
})

//Establecemos la ruta para obtener un producto por su id
router.get('/:idProducto', async(req, res) => {
    const producto = await Producto.findAll({
        where: { id: req.params.idProducto }
    });

    res.json({
        error: false,
        mensaje: 'Producto obtenido correctamente',
        data: producto
    });
})

//Establecemos la ruta para obtener productos segun un criterio
router.get('/criterio/:criterio/:texto', async(req, res) => {
    const productos = await Producto.findAll({
        where: {
            [req.params.criterio]: {
                [Sequelize.Op.like]: "%" + req.params.texto + "%"
            }
        },
        order: [
            ['nombre', 'ASC'],
            ['id', 'ASC'],
        ],

    });

    res.json({
        error: false,
        mensaje: 'Productos obtenidos correctamente',
        data: productos
    });
})

//Establecemos la ruta para crear un producto
router.post('/', async(req, res) => {
    const producto = await Producto.create(req.body);

    res.json({
        error: false,
        mensaje: 'Producto creado correctamente',
        data: producto
    });
});

//Establecemos la ruta para actualizar un producto
router.put('/:idProducto', async(req, res) => {
        const producto = await Producto.update(req.body, {
            where: { id: req.params.idProducto }
        });

        res.json({
            error: false,
            mensaje: 'Producto actualizado correctamente',
            data: producto
        });
    })
    //Establecemos la ruta para actualizar la cantidad un producto
router.put('/:idProducto/:cantidad', async(req, res) => {
    const producto = await Producto.findAll({
        where: { id: req.params.idProducto }
    });
    producto.cantidad = req.params.cantidad;
    await Producto.update(producto, {
        where: { id: req.params.idProducto }
    });

    res.json({
        error: false,
        mensaje: 'Cantidad actualizada correctamente',
        data: producto
    });
})

//Establecemos la ruta para borrar un producto
router.delete('/:idProducto', async(req, res) => {
    const producto = await Producto.destroy({
        where: { id: req.params.idProducto }
    });

    res.json({
        error: false,
        mensaje: 'Producto eliminado correctamente',
        data: producto
    });
});

//Exportamos el router
module.exports = router;