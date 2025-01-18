import { createPool } from 'mysql2/promise';
const pool = createPool({
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "proyectodsl",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


class CrudRepository {
    constructor(model) {
        this.model = model;
        this.tableName = model.tableName;
        this.pool = pool;
    }

    async findAll() {
        const [rows] = await this.pool.query(`SELECT * FROM ${this.tableName}`);
        return rows;
    }

    async findById(id) {
        const [rows] = await pool.query(`SELECT * FROM ${this.tableName} 
            WHERE id = ?`, [id]);
        return rows[0];
    }

    async create(data) {

        const [result] = await pool.query(`INSERT INTO ${this.tableName} SET ?`,
            data);
        return { id: result.insertId, ...data }
    }

    async update(id, data) {
        await pool.query(`UPDATE ${this.tableName} SET ? WHERE id= ?`
            , [data, id]);
        return this.findById(id);
    }

    async delete(id) {        
        const [result] = await pool.query(`DELETE FROM ${this.tableName}
            WHERE id = ?`, [id]);            
        return result.affectedRows > 0;
    }

}
export default CrudRepository;