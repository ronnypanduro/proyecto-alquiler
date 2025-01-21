const express = require('express');
const helmet = require('helmet');
require('dotenv').config();
const estadoController = require('./controllers/estadoController')
const huespedController = require('./controllers/huespedController')
const habitacionController = require('./controllers/habitacionController')
const alquilerController = require('./controllers/alquilerController')
const servicioController = require('./controllers/servicioController')
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.referrerPolicy({
    policy: 'strict-origin-when-cross-origin'
}));

// Configurar CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200'); // Ajusta esto a la URL de tu frontend
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
  });

app.use('/api/estado', estadoController);
app.use('/api/huesped', huespedController);
app.use('/api/habitacion', habitacionController);
app.use('/api/alquiler', alquilerController);
app.use('/api/servicio', servicioController);

const port= process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`servidor corriendo en http://localhost:${port}`)
})
