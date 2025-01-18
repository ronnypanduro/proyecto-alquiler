export default class Huesped {
    static tableName = 'huesped';
    constructor(data) {
        this.nombre = data.nombre;
        this.apellido = data.apellido;
        this.dni = data.dni;
        this.telefono = data.telefono;
        this.ruc = data.ruc;
        this.id = data.id;
    }
}