import { estadoRepository } from "../repository/estadoRepositroy.js";

class EstadoService {
    constructor() {
    }
    async findAll() {
        return await estadoRepository.findAll();
    }
}
export const estadoService = new EstadoService();