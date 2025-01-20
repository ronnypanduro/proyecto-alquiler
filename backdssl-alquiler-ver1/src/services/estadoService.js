const estadoRepository = require('../repositories/estadoRepository');
class EstadoService {
    listaEstado(){
        return estadoRepository.obtenerEstado();
    }
}
module.exports = new EstadoService();