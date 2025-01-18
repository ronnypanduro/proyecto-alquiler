export default class Habitacion {
    static tableName = 'habitacion';
    constructor(data) {
        this.id = data.id;
        this.numHabitacion = data.numHabitacion;
        this.precioTotal = data.precioTotal;
        this.Servicio = data.Servicio;
        this.estado = data.estado;
    }
}