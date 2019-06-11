// Requires
var express = require('express');

// Inicializar variables
var app = express();

// Importar modelo de Usuario
var Usuario =  require('../models/usuario');
Error.stackTraceLimit = null;
// Rutas
app.get('/', (req, res, next) => {

    Usuario.find({ }, (err, usuarios) => {

        if (err){
            return res.status(500).json({
                ok: false,
                mensaje: 'Error cargando usuarios',
                errors: err
            });
        }


        res.status(200).json({
            ok: true,
            usuarios: usuarios
        });



});

});

module.exports = app;
