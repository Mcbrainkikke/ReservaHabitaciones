const express = require('express');
const router = express.Router();
const controladorUsuarios = require('../controlador/controlador_usuarios');

router.get('/listar', controladorUsuarios);
/*
router.post('/agregar',controladorUsuarios);
router.post('/editar/:id',controladorUsuarios);
router.delete('/eliminar/:id',controladorUsuarios);
*/

module.exports = router;