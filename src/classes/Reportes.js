class Reporte {

    constructor(_array, _object) {
        this.array = _array | null;
        this.object = _object | null
    }

    set setArray(_array) {
        this.array = _array
    }
    set setObject(_object) {
        this.object = _object
    }

    get getArray() {
        return this.array
    }

    get getObject() {
        return this.object
    }

    static topAhorros() {
        console.log(this.array);
    }
}


export default Reporte