const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Reservas');
const miconexion = mongoose.connection;

miconexion.on('connected', ()=>{
    console.log('Conexion Exitosa');
});

miconexion.on('error', ()=>{
    console.log('Error al conectar');
});

module.exports = mongoose;