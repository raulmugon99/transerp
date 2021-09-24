module.exports = (sequelize, type) => {
    return sequelize.define('ventas', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        total: type.FLOAT,
        nombreCliente: type.STRING,
        formaDePago: type.STRING,
        fechaVenta: type.DATEONLY,
    })
}