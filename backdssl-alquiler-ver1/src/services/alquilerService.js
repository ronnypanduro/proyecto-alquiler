const alquilerRepository = require('../repositories/alquilerRepository');
class AlquilerService {
    listarAlquileres() {
        return alquilerRepository.listarAlquileres();
    }
    async insertarAlquiler(vidh, vidhab, vfecha, vocurrencia) {
        try {
            await alquilerRepository.insertarAlquiler(
                vidh,
                vidhab,
                vfecha,
                vocurrencia
            );
        } catch (error) {
            if (error.code === '45000') {
                // Error personalizado desde el procedimiento almacenado
                throw new Error(error.sqlMessage);
            }
            throw error;
        }
    }
}
module.exports = new AlquilerService();