//Requerimientos : Sequelize nos permite trabajar con la base de datos como si fueran objetos
const Sequelize = require('sequelize');

//Importamos los modelos
const LineasDeVentaModel = require('./models/lineasdeventas');
const PagoPendienteModel = require('./models/pago_pendiente');
const UserModel = require('./models/users');
const ClienteModel = require('./models/cliente');
const ProductoModel = require('./models/producto');
const ServicioModel = require('./models/servicio');
const VentaModel = require('./models/ventas');

//Configuramos la conexion a la base de datos
const sequelize = new Sequelize('timeline', 'timeline', '2julio1999', {
    host: 'localhost',
    dialect: 'mysql'
});

//Configuracion de la APP
const Ventas = VentaModel(sequelize, Sequelize);
const LineasDeVenta = LineasDeVentaModel(sequelize, Sequelize);
const PagoPendiente = PagoPendienteModel(sequelize, Sequelize);
const Servicio = ServicioModel(sequelize, Sequelize);
const Producto = ProductoModel(sequelize, Sequelize);
const Cliente = ClienteModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);

//Iniciamos la conexion a la base de datos, sincroniza las tablas, si sale todo bien muestra un mensaje en la consola
sequelize.sync({ force: false })
    .then(() => {
        console.log("TABLAS SINCRONIZADAS");
    });

//Exportamos los objetos de la base de datos
module.exports = {
    Cliente,
    Producto,
    User,
    Servicio,
    PagoPendiente,
    LineasDeVenta,
    Ventas
}