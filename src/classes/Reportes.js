import Conexion from "../classes/Conexion";

class Reporte {

    topAhorros = [];
    topPrestamos = {};
    mesPrestamos = {};
    fechaReunion = {};

    constructor() {
        this.topAhorros = [];
        this.topPrestamos = {};
        this.mesPrestamos = {};
        this.fechaReunion = {};
    }

    /**
     * @param {any[]} _array
     */
    set setArray(_array) {
        this.array = _array
    }
    /**
     * @param {{}} _object
     */
    set setObject(_object) {
        this.object = _object
    }

    get getArray() {
        return this.array
    }

    get getObject() {
        return this.object
    }

    static async reporte_topAhorros() {
        await Conexion.reporte_top_ahorros().then(
            resp => {
                let data = resp.data
                this.topAhorros = data
            }
        ).catch(
            err => { console.log(err); }
        )
    }

    static async reporte_topPrestamos() {
        await Conexion.reporte_top_prestamo().then(
            resp => {
                let data = resp.data;
                this.topPrestamos = data;
            }
        ).catch(
            err => { console.log(err); }
        )
    }

    static async reporte_mesPrestamos() {
        await Conexion.reporte_mes_prestamos().then(
            (resp) => {
                let data = resp.data
                this.mesPrestamos = data
            }
        ).catch(
            err => { console.log(err); }
        )
    }

    static async reporte_fechaReunion(rango) {
        await Conexion.reporte_fecha_reunion(rango).then(
            resp => {
                let data = resp.data;
                this.object = data;
                console.log(this.object);
            }
        ).catch(
            err => { console.log(err); }
        )
    }
}


export default Reporte