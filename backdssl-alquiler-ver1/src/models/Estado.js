class Estado {
    static tableName = 'estado_habitacion';

    constructor(idestado, tipoEstado) {
        this.idestado_habitacion = idestado;
        this.estado_descrip = tipoEstado;
    }
}
module.exports = Estado;