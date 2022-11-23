const mongoose = require('mongoose');
const esquema = mongoose.Schema;

const esquemaUsuario = new esquema({
    id: String,
    nombres: String,
    apellidos: String,
    fecha: Date //revisar el formato por si falla
});

const modeloUsuario = mongoose.model('usuarios', esquemaUsuario);


module.exports= modeloUsuario;