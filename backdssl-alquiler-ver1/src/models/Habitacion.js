class Huesped {
    static tableName = 'habitacion';

    constructor(idHabitacion, numeroHabitacion,precioHabitacion,estadoHabitacion) {
        this.idhabitacion = idHabitacion;
        this.n_hab = numeroHabitacion;
        this.preciototal_hab = precioHabitacion;
        this.estado_hab = estadoHabitacion;
    }
}
module.exports = Huesped;