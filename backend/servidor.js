const express = require('express');
const app = express();
const miconexion = require('./conexion');

app.listen(666, function(){
    console.log('Servidor conectado http://127.0.0.1:666');
});

app.get('/', function(req, res){
    res.send('<h1>Servidor en funcionamiento</h1>');
});

//body parser
const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

//importar rutas
const rutas = require('./rutas/router');
app.use('api', rutas);


