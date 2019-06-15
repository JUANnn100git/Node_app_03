// Requires
var express = require('express');
var mongoose = require('mongoose');

require('./config/config');

// Inicializar variables
var app = express();

var dir = '';
var dbOnline = false;
var errorDB = '';

// Importar Rutas
var appRoutes = require('./routes/app');
var usuarioRoutes = require('./routes/usuario');

// Conexión a la base de datos
mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true }, (err, res) => {
    if( err ){
        errorDB = err;
        throw err;
    }
    dbOnline = true;
    console.log('\x1b[32m\x1b[36m' + 'Base de datos:\x1b[32m\x1b[93m', 'Online');
});

// Rutas
app.use(`${dir}/usuario`, usuarioRoutes);

// Última Ruta
//app.use(`${dir}/`, appRoutes);
app.get(`${dir}`, (req, res, next) => {

    res.status(200).json({
        ok: true,
        mensaje: 'Petición realizada correctamente AppRoutes con WinSCP Putty',
        env: process.env.NODE_ENV,
        port: process.env.PORT,
        urldb: process.env.URLDB,
        dbOnline: dbOnline,
        errorDB: errorDB
    });

});

// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log('\x1b[32m\x1b[36m' + 'Express server en puerto \x1b[32m\x1b[91m'+ process.env.PORT + '\x1b[32m\x1b[36m:\x1b[32m\x1b[93m', 'Online');
});
