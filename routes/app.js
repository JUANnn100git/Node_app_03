// Requires
var express = require('express');

// Inicializar variables
var app = express();

// Rutas
app.get('/', (req, res, next) => {

    res.status(200).json({
        ok: true,
        mensaje: 'Petición realizada correctamente AppRoutes',
        env: process.env.NODE_ENV,
        port: process.env.PORT,
        urldb: process.env.URLDB
    });

});

module.exports = app;
