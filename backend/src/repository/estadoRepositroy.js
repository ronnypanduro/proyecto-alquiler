import CrudRepository from '../lib/crudRepository.js';
import Estado from '../model/estado.js';

 class EstadoRepositroy extends CrudRepository {
    constructor() {
        super(Estado);
    }
    async findAll() {
        const [rows] = await this.pool.query(`SELECT * FROM ${this.tableName}`);
        return rows;
    }
}
export const estadoRepository = new EstadoRepositroy();