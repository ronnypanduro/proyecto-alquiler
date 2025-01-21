class Alquiler {
    static tableName = 'alquiler';

    constructor(idAlquiler, idhuesped,idhabitacion,fechaAlquiler,ocurrencia) {
        this.idalquiler = idAlquiler;
        this.id_huesped = idhuesped;
        this.id_habitacion = idhabitacion;
        this.fecha_alquiler = fechaAlquiler;
        this.Ocurrencia = ocurrencia;
    }
}
module.exports = Alquiler;