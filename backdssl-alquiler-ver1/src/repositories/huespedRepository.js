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
const Huesped = require('../models/Huesped');

class HuespedRepository extends CrudRepository {
    constructor(){
        super(Huesped);
    }
    // Agregar metodos especificos de Estado
    async buscarHuespedPorDNI(vdni) {
        const [rows] = await pool.execute('CALL sp_buscarHuespedPorDNI(?)', [vdni]);
        return rows;
    }
    async listarHuespedes() {
        try {
            // Ejecutamos la llamada al procedimiento almacenado
            const [rows] = await pool.execute('CALL sp_listarHuesped()');
            
            // Verificamos si rows contiene datos
            console.log("Rows:", rows); // Esto debe mostrar los datos en la consola

            // Aseguramos que solo se devuelvan los resultados de la consulta
            return rows[0]; // El primer array de 'rows' contiene los datos reales
        } catch (error) {
            console.error("Error al listar huéspedes:", error);
            throw new Error('Error al listar los huéspedes');
        }
    }
    async insertHuesped(vdni, vnombre, vapp, vapm, vtlf, vruc) {
        try {
            const [result] = await pool.execute('CALL sp_insertarHuesped(?, ?, ?, ?, ?, ?)', [vdni, vnombre, vapp, vapm, vtlf, vruc]);
            return result;  // Devuelve el resultado de la inserción
        } catch (error) {
            throw new Error('Error al insertar el huésped: ' + error.message);
        }
    }
    async modiHuesped(idh, vdni, vnombre, vapp, vapm, vtlf, vruc) {
        try {
            const [result] = await pool.execute('CALL sp_modificarHuesped(?, ?, ?, ?, ?, ?, ?)', [idh, vdni, vnombre, vapp, vapm, vtlf, vruc]);
            return result;  // Devuelve el resultado de la actualización
        } catch (error) {
            throw new Error('Error al modificar el huésped: ' + error.message);
        }
    }
    async elimHuesped(idh) {
        try {
            const [result] = await pool.execute('CALL sp_eliminarHuesped(?)', [idh]);
            return result;  // Devuelve el resultado de la eliminación
        } catch (error) {
            throw new Error('Error al eliminar el huésped: ' + error.message);
        }
    }
    async obtenerHuesped(idh) {
        const [rows] = await pool.execute('CALL sp_obtenerHuesped(?)', [idh]);
        return rows[0]; // Devuelve solo los resultados relevantes
    }
}
module.exports = new HuespedRepository();