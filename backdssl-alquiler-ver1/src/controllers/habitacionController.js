const express = require('express');
const habitacionService = require('../services/habitacionService');
const router = express.Router();

// Endpoint para listar todas las habitaciones
router.get('/', async (req, res) => {
  try {
    const habitaciones = await habitacionService.listarHabitaciones();
    if (habitaciones.length > 0) {
      res.json(habitaciones); // Retorna las habitaciones en formato JSON
    } else {
      res.status(404).json({ message: 'No hay habitaciones disponibles' });
    }
  } catch (error) {
    console.error('Error al obtener las habitaciones:', error);
    res.status(500).json({ message: 'Error al obtener las habitaciones', error: error.message });
  }
});
router.post('/insertar', async (req, res) => {
    const { n_hab, precio, estado, servicios } = req.body;  // Datos enviados en el body de la solicitud
    
    try {
      const result = await habitacionService.insertarHabitacion(n_hab, precio, estado, servicios);
      res.json({ message: 'Habitación insertada correctamente', result });  // Responde con el resultado
    } catch (error) {
      console.error('Error al insertar habitación:', error);
      res.status(500).json({ message: 'Error al insertar habitación', error: error.message });
    }
});
router.put('/modificar/:id', async (req, res) => {
    const { id } = req.params;  // ID de la habitación a modificar (por URL)
    const { num, precio, estado, servicios } = req.body;  // Datos a modificar (en el cuerpo de la solicitud)

    try {
        const result = await habitacionService.modificarHabitacion(id, num, precio, estado, servicios);
        res.json({ message: 'Habitación modificada correctamente', result });
    } catch (error) {
        console.error('Error al modificar habitación:', error);
        res.status(500).json({ message: 'Error al modificar habitación', error: error.message });
    }
});
router.delete('/eliminar/:id', async (req, res) => {
    const { id } = req.params;  // ID de la habitación a eliminar (por URL)

    try {
        const result = await habitacionService.eliminarHabitacion(id);
        res.json({ message: 'Habitación eliminada correctamente', result });
    } catch (error) {
        console.error('Error al eliminar habitación:', error);
        res.status(500).json({ message: 'Error al eliminar habitación', error: error.message });
    }
});
router.get('/disponibles', async (req, res) => {
    try {
        const habitaciones = await habitacionService.listarHabitacionesDisponibles();
        res.json(habitaciones); // Responde con la lista de habitaciones disponibles
    } catch (error) {
        console.error('Error al listar habitaciones disponibles:', error);
        res.status(500).json({ message: 'Error al listar habitaciones disponibles', error: error.message });
    }
});
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const habitacion = await habitacionService.obtenerHabitacion(id);
        if (habitacion.length > 0) {
            res.json(habitacion[0]); // Devuelve solo el primer resultado (ya que es único por ID)
        } else {
            res.status(404).json({ message: 'Habitación no encontrada' });
        }
    } catch (error) {
        console.error('Error al obtener la habitación:', error);
        res.status(500).json({ message: 'Error al obtener la habitación', error: error.message });
    }
});
module.exports = router;