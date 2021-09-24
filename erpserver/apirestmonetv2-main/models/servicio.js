module.exports = (sequelize, type) => {
    return sequelize.define('servicio', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: type.STRING,
        precio: type.FLOAT,
        descripcion: type.STRING,
    })
}