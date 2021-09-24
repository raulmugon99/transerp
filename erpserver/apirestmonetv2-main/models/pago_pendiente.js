module.exports = (sequelize, type) => {
    return sequelize.define('pago_pendiente', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: type.STRING,
        pendiente: type.FLOAT,
        servicio: type.STRING,
        fecha: type.DATEONLY
    })
}