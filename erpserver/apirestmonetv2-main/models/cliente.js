module.exports = (sequelize, type) => {
    return sequelize.define('cliente', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: type.STRING,
        telefono: type.STRING,
        observaciones: type.STRING,
        tratamientos: type.STRING,
        colores: type.STRING,
    })
}