const huespedRepository = require('../repositories/huespedRepository');
class HuespedService {
    buscarHuespedByDNI(dni){
        return huespedRepository.buscarHuespedPorDNI(dni);
    }
    async listarHuespedes() {
        try {
            const huespedes = await huespedRepository.listarHuespedes();  // Llama al repository
            return huespedes;  // Devuelve la lista de huéspedes
        } catch (error) {
            throw new Error('Error en el servicio al listar los huéspedes: ' + error.message);
        }
    }
    async insertarHuesped(vdni, vnombre, vapp, vapm, vtlf, vruc) {
        try {
            const result = await huespedRepository.insertHuesped(vdni, vnombre, vapp, vapm, vtlf, vruc);
            return result;  // Devuelve el resultado de la operación
        } catch (error) {
            throw new Error('Error en el servicio al insertar el huésped: ' + error.message);
        }
    }
    async modificarHuesped(idh, vdni, vnombre, vapp, vapm, vtlf, vruc) {
        try {
            const result = await huespedRepository.modiHuesped(idh, vdni, vnombre, vapp, vapm, vtlf, vruc);
            return result;  // Devuelve el resultado de la operación
        } catch (error) {
            throw new Error('Error en el servicio al modificar el huésped: ' + error.message);
        }
    }
    async eliminarHuesped(idh) {
        try {
            const result = await huespedRepository.elimHuesped(idh);  // Llama al repository
            return result;  // Devuelve el resultado de la operación
        } catch (error) {
            throw new Error('Error en el servicio al eliminar el huésped: ' + error.message);
        }
    }
    async obtenerHuesped(idh) {
        return huespedRepository.obtenerHuesped(idh);
    }
}
module.exports = new HuespedService();