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
const Servicio = require('../models/Servicio');

class ServicioRepository extends CrudRepository {
    constructor(){
        super(Servicio);
    }
    async listarServicio() {
        const [rows] = await pool.execute('CALL sp_listarServicio()');
        return rows[0]; // Devolver solo los datos sin metadatos
    }
    async obtenerServiciosHabitacion(idHabitacion) {
        try {
            const [rows] = await pool.execute('CALL sp_obtenerServiciosHabitacion(?)', [idHabitacion]);
            return rows[0] || [];  // Asegúrate de que siempre devuelvas un array, incluso si no hay datos
        } catch (error) {
            console.error('Error en la ejecución de la consulta:', error);
            throw new Error('Error en la ejecución del procedimiento almacenado');
        }
    }
}
module.exports = new ServicioRepository();