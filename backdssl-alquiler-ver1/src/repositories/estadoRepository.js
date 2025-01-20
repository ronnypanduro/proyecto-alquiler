const mysql = require('mysql2/promise');
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
const CrudRepository = require('../lib/crudRepository');
const Estado = require('../models/Estado');

class EstadoRepository extends CrudRepository {
    constructor(){
        super(Estado);
    }
    // Agregar metodos especificos de Estado
    async obtenerEstado(){
        const [rows] = await pool.execute('CALL sp_listarEstado()');
        return rows[0];
    }
}
module.exports = new EstadoRepository();