export default class Estado {
    static tableName = 'estado_habitacion';
    constructor(idestado_habitacion,estado_descrip) {
        this.idestado_habitacion = idestado_habitacion;
        this.estado_descrip = estado_descrip;
    }
}