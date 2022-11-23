const express = require('express');
const router = express.Router();
const modeloUsuario = require('../modelo/model_usuarios');

//crear las rutas para mostrar la informacion
router.get('/listar', (req, res) => {
    modeloUsuario.find({}, (docs,err)=>
    {
        if(!err)
        {
            res.send(docs);
        }
        else
        {
            res.send(err.stack);
        }
    })
});

//ruta para agregar
//ruta para eliminar
module.exports = router;



