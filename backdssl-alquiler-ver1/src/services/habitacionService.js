const habitacionRepository = require('../repositories/habitacionRepository');
class HabitacionService {
    async listarHabitaciones() {
        try {
          const habitaciones = await habitacionRepository.listarHabitacion();
          return habitaciones;
        } catch (error) {
          console.error('Error en el servicio:', error);
          throw new Error('Error al listar habitaciones');
        }
    }
    async insertarHabitacion(nhab, preciot, estado, servicios) {
        try {
          const result = await habitacionRepository.insertarHabitacion(nhab, preciot, estado, servicios);
          return result;  // Retorna el resultado de la operación
        } catch (error) {
          console.error('Error en el servicio de habitación:', error);
          throw new Error('Error al insertar habitación');
        }
    }
    async modificarHabitacion(vidha, vnum, vprecio, vestado, vservicios) {
        return habitacionRepository.modificarHabitacion(vidha, vnum, vprecio, vestado, vservicios);
    }
    async eliminarHabitacion(idha) {
        return habitacionRepository.eliminarHabitacion(idha);
    }
    async listarHabitacionesDisponibles() {
        return habitacionRepository.listarHabitacionesDisponibles();
    }
    async obtenerHabitacion(idHabitacion) {
        return habitacionRepository.obtenerHabitacion(idHabitacion);
    }
}
module.exports = new HabitacionService();