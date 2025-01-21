class Servicio {
    static tableName = 'servicio';

    constructor(idServicio, tipoServicio,precioServicio) {
        this.idservicio = idServicio;
        this.servicio_descrip = tipoServicio;
        this.precio_servi = precioServicio;
    }
}
module.exports = Servicio;