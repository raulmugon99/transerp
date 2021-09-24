module.exports = (sequelize, type) => {
    return sequelize.define('producto', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: type.STRING,
        precio: type.FLOAT,
        descripcion: type.STRING,
        cantidad: type.INTEGER
    })
}