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
const Alquiler = require('../models/Alquiler');

class AlquilerRepository extends CrudRepository {
    constructor(){
        super(Alquiler);
    }
    async listarAlquileres() {
        const [rows] = await pool.execute('CALL sp_listarAlquiler()');
        return rows[0]; // Retorna solo los datos, sin los metadatos
    }
    async insertarAlquiler(vidh, vidhab, vfecha, vocurrencia) {
        try {
            await pool.execute('CALL sp_insertarAlquiler(?, ?, ?, ?)', [
                vidh,
                vidhab,
                vfecha,
                vocurrencia,
            ]);
        } catch (error) {
            throw error; // Propaga el error para manejarlo en el servicio o controlador
        }
    }
}
module.exports = new AlquilerRepository();