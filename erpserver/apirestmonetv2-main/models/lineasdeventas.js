module.exports = (sequelize, type) => {
    return sequelize.define('lineasdeventas', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idLinea: type.INTEGER,
        tipo: type.STRING,
        nombre: type.STRING,
        precio: type.FLOAT,
        idServicio: type.INTEGER
    })
}