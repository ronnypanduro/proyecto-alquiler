const servicioRepository = require('../repositories/servicioRepository');
class ServicioService {
    async listarServicios() {
        return await servicioRepository.listarServicio();
    }
    async obtenerServiciosHabitacion(idHabitacion) {
        if (!idHabitacion) {
            throw new Error('El ID de la habitación es requerido');
        }
        try {
            return await servicioRepository.obtenerServiciosHabitacion(idHabitacion);
        } catch (error) {
            console.error('Error en el servicio:', error);
            throw new Error('No se pudieron obtener los servicios');
        }
    }
}
module.exports = new ServicioService();