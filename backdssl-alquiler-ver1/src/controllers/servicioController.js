const express = require('express');
const servicioService = require('../services/servicioService');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const servicios = await servicioService.listarServicios();
        res.json(servicios); // Devuelve los datos en formato JSON
    } catch (error) {
        console.error('Error al listar los servicios:', error);
        res.status(500).json({ message: 'Error al listar los servicios', error });
    }
});
router.get('/obtener/:id', async (req, res) => {
    const idHabitacion = req.params.id;
    console.log('ID de la habitación:', idHabitacion); // Verifica que el ID sea el correcto
    try {
        const servicios = await servicioService.obtenerServiciosHabitacion(idHabitacion);
        console.log('Servicios obtenidos:', servicios);  // Verifica qué datos se están devolviendo
        res.json(servicios);
    } catch (error) {
        console.error('Error al obtener los servicios de la habitación:', error);
        res.status(500).json({ message: 'Error al obtener los servicios de la habitación', error: error.message });
    }
});

module.exports = router;