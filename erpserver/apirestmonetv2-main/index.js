//Requerimientos
const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api');
var compression = require('compression');
var helmet = require('helmet');
var cors = require('cors')
require('./db');

const { ipcMain}  = require('electron')

//Creamos la app
const app = express();

//Configuramos la app
app.use(compression());
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

//Establecemos la ruta inicial de la aplicacion
app.use('/api', apiRouter);

//Iniciamos la APP en el puerto disponible, si no hay ninguno se inicia en el 3000, y mostramos un mensaje en la consola
app.listen(process.env.PORT || 3000, () => {
    console.log(`SERVIDOR INICIADO EN PUERTO ${process.env.PORT || 3000}`);
})