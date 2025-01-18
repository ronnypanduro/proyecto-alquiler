
export default class  Alquiler  {
    static tableName = 'alquiler';
    constructor(data) {

        this.id = data.id;
        this.idAlquiler = data.idAlquiler;
        this.dni = data.dni;
        this.nombre = data.nombre;
        this.apellido = data.apellido;
        this.habitacion = data.habitacion;
        this.estado = data.estado;
        this.fecha = data.fecha;
        this.ocurrencias = data.ocurrencias;
    }
}