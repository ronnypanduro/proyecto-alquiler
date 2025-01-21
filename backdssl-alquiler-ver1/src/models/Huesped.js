class Huesped {
    static tableName = 'huesped';

    constructor(idHuesped, dniHuesped,nombreHuesped,paternoHuesped,maternoHuesped,telefonoHuesped,rucHuesped) {
        this.idhuesped = idHuesped;
        this.dni_h = dniHuesped;
        this.nombre_h = nombreHuesped;
        this.app_h = paternoHuesped;
        this.apm_h = maternoHuesped;
        this.tlf_h = telefonoHuesped;
        this.ruc_h = rucHuesped;
    }
}
module.exports = Huesped;