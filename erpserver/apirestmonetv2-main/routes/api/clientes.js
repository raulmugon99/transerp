//Importamos los componentes necesarios
const router = require('express').Router();
const Sequelize = require('sequelize');
const { Cliente } = require('../../db');

//Establecemos la ruta inicial, que mostrara todos los clientes, ordenados por el nombre
router.get('/', async(req, res) => {
    const clientes = await Cliente.findAll({
        order: [
            ['nombre', 'ASC'],
            ['id', 'ASC'],
        ],
    });

    res.json({
        error: false,
        data: clientes
    });
})

//Establecemos la ruta para obtener un cliente por su id
router.get('/:idCliente', async(req, res) => {
    const cliente = await Cliente.findAll({
        where: { id: req.params.idCliente }
    });

    res.json({
        error: false,
        data: cliente
    });
})

//Establecemos la ruta para obtener clientes segun un criterio
router.get('/criterio/:criterio/:texto', async(req, res) => {
    const clientes = await Cliente.findAll({
        where: {
            [req.params.criterio]: {
                [Sequelize.Op.like]: "%" + req.params.texto + "%"
            }
        }
    });

    res.json({
        error: false,
        data: clientes
    });
})

//Establecemos la ruta para crear un cliente nuevo
router.post('/', async(req, res) => {
    const cliente = await Cliente.create(req.body);
    
    res.json({
        error: false,
        data: cliente
    });
});

//Establecemos la ruta para actualizar un cliente
router.put('/:idCliente', async(req, res) => {
    const cliente = await Cliente.update(req.body, {
        where: { id: req.params.idCliente }
    });
    
    res.json({
        error: false,
        data: cliente
    });
})

//Establecemos la ruta para eliminar un cliente
router.delete('/:idCliente', async(req, res) => {
    const cliente = await Cliente.destroy({
        where: { id: req.params.idCliente }
    });
    
    res.json({
        error: false,
        data: cliente
    });
});


//Exportamos el router
module.exports = router;
