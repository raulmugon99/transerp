//Importamos lo necesario
const router = require('express').Router();
const Sequelize = require('sequelize');
const { Servicio } = require('../../db');

//Establecemos la ruta para obtener todos los servicios
router.get('/', async(req, res) => {
    const servicios = await Servicio.findAll({
        order: [
            ['nombre', 'ASC'],
            ['id', 'ASC'],
        ],
    });

    res.json({
        error: false,
        mensaje: 'Servicios obtenidos correctamente',
        data: servicios
    });
})

//Establecemos la ruta para obtener un servicio por su id
router.get('/:idServicio', async(req, res) => {
    const servicio = await Servicio.findAll({
        where: { id: req.params.idServicio }
    });

    res.json({
        error: false,
        mensaje: 'Servicio obtenido correctamente',
        data: servicio
    });
})

//Establecemos la ruta para obtener servicios segun un criterio
router.get('/criterio/:criterio/:texto', async(req, res) => {
    const servicios = await Servicio.findAll({
        where: {
            [req.params.criterio]: {
                [Sequelize.Op.like]: "%" + req.params.texto + "%"
            }
        }
    });

    res.json({
        error: false,
        mensaje: 'Servicios obtenidos correctamente',
        data: servicios
    });
})

//Establecemos la ruta para crear un servicio
router.post('/', async(req, res) => {
    const servicio = await Servicio.create(req.body);

    res.json({
        error: false,
        mensaje: 'Servicio creado correctamente',
        data: servicio
    });
});

//Establecemos la ruta para actualizar un servicio
router.put('/:idServicio', async(req, res) => {
    const servicio = await Servicio.update(req.body, {
        where: { id: req.params.idServicio }
    });

    res.json({
        error: false,
        mensaje: 'Servicio actualizado correctamente',
        data: servicio
    });
})

//Establecemos la ruta para eliminar un servicio
router.delete('/:idServicio', async(req, res) => {
    const servicio = await Servicio.destroy({
        where: { id: req.params.idServicio }
    });

    res.json({
        error: false,
        mensaje: 'Servicio eliminado correctamente',
        data: servicio
    });
});

//Exportamos el router
module.exports = router;