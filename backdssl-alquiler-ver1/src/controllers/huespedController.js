const express = require('express');
const huespedService = require('../services/huespedService');
const router = express.Router();

router.get('/:dni', async (req, res) => {
    const { dni } = req.params; // Obtiene el DNI desde los parámetros de la URL
    try {
        const huesped = await huespedService.buscarHuespedByDNI(dni); // Llama al servicio

        if (huesped && huesped.length > 0) {
            res.json(huesped); // Retorna solo los datos del huésped (sin metadatos)
        } else {
            res.status(404).json({ message: 'Huésped no encontrado' }); // Si no se encuentra
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el huésped', error }); // Manejo de errores
    }
});
router.post('/insertar', async (req, res) => {
    const { dni, nombre, app, apm, tlf, ruc } = req.body; // Obtiene los datos del cuerpo de la petición

    try {
        const result = await huespedService.insertarHuesped(dni, nombre, app, apm, tlf, ruc);  // Llama al servicio

        // Si la inserción fue exitosa, retorna un mensaje de éxito
        if (result && result.affectedRows > 0) {
            res.status(201).json({ message: 'Huésped insertado exitosamente' });
        } else {
            res.status(400).json({ message: 'No se pudo insertar el huésped' });
        }
    } catch (error) {
        // Manejo de errores
        res.status(500).json({ message: 'Error al insertar el huésped', error: error.message });
    }
});
router.put('/modificar/:idh', async (req, res) => {
    const { idh } = req.params;  // Obtiene el idh del huésped desde los parámetros de la URL
    const { dni, nombre, app, apm, tlf, ruc } = req.body; // Obtiene los datos del cuerpo de la petición

    try {
        const result = await huespedService.modificarHuesped(idh, dni, nombre, app, apm, tlf, ruc); // Llama al servicio

        // Si la actualización fue exitosa, devuelve un mensaje de éxito
        if (result && result.affectedRows > 0) {
            res.status(200).json({ message: 'Huésped modificado exitosamente' });
        } else {
            res.status(400).json({ message: 'No se pudo modificar el huésped' });
        }
    } catch (error) {
        // Manejo de errores
        res.status(500).json({ message: 'Error al modificar el huésped', error: error.message });
    }
});
router.delete('/eliminar/:idh', async (req, res) => {
    const { idh } = req.params;  // Obtiene el idh del huésped desde los parámetros de la URL

    try {
        const result = await huespedService.eliminarHuesped(idh);  // Llama al servicio

        // Si la eliminación fue exitosa, devuelve un mensaje de éxito
        if (result && result.affectedRows > 0) {
            res.status(200).json({ message: 'Huésped eliminado exitosamente' });
        } else {
            res.status(400).json({ message: 'No se pudo eliminar el huésped' });
        }
    } catch (error) {
        // Manejo de errores
        res.status(500).json({ message: 'Error al eliminar el huésped', error: error.message });
    }
});
router.get('/', async (req, res) => {
    try {
        const huespedes = await huespedService.listarHuespedes();
        
        console.log("Huéspedes obtenidos:", huespedes); // Esto debería imprimir los datos correctamente

        if (huespedes && huespedes.length > 0) {
            res.status(200).json(huespedes);  // Devuelve los datos de los huéspedes
        } else {
            res.status(404).json({ message: 'No se encontraron huéspedes' });  // Si no se encuentran datos
        }
    } catch (error) {
        console.error("Error en el controller:", error); // Verifica los errores
        res.status(500).json({ message: 'Error al listar los huéspedes', error: error.message });
    }
});
router.get('/obtener/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const huesped = await huespedService.obtenerHuesped(id);
        if (huesped.length > 0) {
            res.json(huesped[0]); // Devuelve solo el primer resultado (ya que es único por ID)
        } else {
            res.status(404).json({ message: 'Huésped no encontrado' });
        }
    } catch (error) {
        console.error('Error al obtener el huésped:', error);
        res.status(500).json({ message: 'Error al obtener el huésped', error: error.message });
    }
});



module.exports = router;