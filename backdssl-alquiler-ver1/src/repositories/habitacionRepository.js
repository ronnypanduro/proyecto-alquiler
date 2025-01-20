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
const Habitacion = require('../models/Habitacion');
class HabitacionRepository extends CrudRepository {
    constructor(){
        super(Habitacion);
    }
    async listarHabitacion() {
        try {
          const [rows] = await pool.execute('CALL sp_listarHabitacion()');
          return rows[0]; // Los resultados están en el primer array de la respuesta
        } catch (error) {
          console.error('Error al listar habitaciones:', error);
          throw new Error('Error al listar habitaciones');
        }
    }
    async insertarHabitacion(nhab, preciot, estado, servicios) {
        try {
          const [result] = await pool.execute('CALL sp_insertarHabitacion(?, ?, ?, ?)', [nhab, preciot, estado, servicios]);
          return result;  // Devuelve el resultado de la inserción
        } catch (error) {
          console.error('Error al insertar habitación:', error);
          throw new Error('Error al insertar habitación');
        }
    }
    async modificarHabitacion(vidha, vnum, vprecio, vestado, vservicios) {
        const [rows] = await pool.execute('CALL sp_modificarHabitacion(?, ?, ?, ?, ?)', [vidha, vnum, vprecio, vestado, vservicios]);
        return rows;  // Devuelve el resultado de la llamada al procedimiento
    }
    async eliminarHabitacion(idha) {
        const [rows] = await pool.execute('CALL sp_eliminarHabitacion(?)', [idha]);
        return rows;  // Devuelve el resultado de la ejecución del procedimiento
    }
    async listarHabitacionesDisponibles() {
        const [rows] = await pool.execute('CALL sp_listarHabitacionesDisponibles()');
        return rows[0]; // Devuelve solo los resultados de las habitaciones
    }
    async obtenerHabitacion(idHabitacion) {
        const [rows] = await pool.execute('CALL sp_obtenerHabitacion(?)', [idHabitacion]);
        return rows[0]; // Devuelve solo los resultados relevantes
    }
}
module.exports = new HabitacionRepository();