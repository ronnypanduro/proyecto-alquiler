const express = require('express');
const alquilerService = require('../services/alquilerService');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const alquileres = await alquilerService.listarAlquileres();
        res.json(alquileres); // Retorna la lista de alquileres
    } catch (error) {
        console.error('Error al listar alquileres:', error);
        res.status(500).json({ message: 'Error al listar alquileres', error });
    }
});
router.post('/insertar', async (req, res) => {
    const { idHuesped, idHabitacion, fechaAlquiler, ocurrencia } = req.body;

    try {
        await alquilerService.insertarAlquiler(
            idHuesped,
            idHabitacion,
            fechaAlquiler,
            ocurrencia
        );
        res.status(201).json({ message: 'Alquiler insertado con éxito' });
    } catch (error) {
        console.error('Error al insertar alquiler:', error.message);
        res.status(400).json({ message: error.message });
    }
});
module.exports = router;