const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./router');
const mongoose = require('mongoose');
const app = express();

//Importar variables de entorno locales
require('dotenv').config({
    path: 'variables.env'
})

//Conexión MongoDB
mongoose.promise = global.Promise;
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('open', console.info.bind(console, "Conexión con base de datos MongoDB exitosa"));

//Body Parser para leer los datos del formulario
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
//Habilitar pug
app.set('view engine', 'pug');
//Carpeta para las vistas
app.set('views', path.join(__dirname, './views'));
//Cargar los archivos estaticos en public
app.use(express.static('public'));
//Rutas de la aplicación
app.use('/', routes());


const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host, () =>{
    console.log("Sevidor AdoptaGDL Funcionando");
});

