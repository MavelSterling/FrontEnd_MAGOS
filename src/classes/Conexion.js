import axios from "axios";
/* eslint-disable */

const numeroPuerto = '8080'; // Es el puerto por defecto cuando se ejecuta el comando npm run serve
const urlBase = `http://localhost:${numeroPuerto}/api`;
const extension = "";
const numeral = ""; // Para consultar por los usuarios según su característica única 

class Conexion {

  constructor() {
    // this._token = token;
    // this._extension = extension;
    // this._numeral = numeral;
  }

  // Método que valida el correo y contraseña de usuario, y retorna un token de seguridad para poder seguir interactuando con la aplicación
  static loginUsuario(email, password) {
    return axios({
      method: 'POST',
      url: urlBase + '/login/',
      data: {
        email: email,
        password: password
      }
    })
  }

  static async pedirCredenciaesSinRegistro() {
    const token = await Conexion.loginUsuario('magosds2@correounivalle.edu.co', 'Magos_DS2')
      .then(resp => { return resp.data.tokens.access })
    console.log('del metodo', token)

  }


  static async crearAsociado(username, first_name, last_name, email, rol, documento, password, fechaNacimiento, ocupacion, ciudad, direccion, telefono) {
    return axios({
      method: 'post',
      url: urlBase + '/users/create/',
      data: {
        username,
        first_name,
        last_name,
        email,
        rol,
        documento,
        password,
        fechaNacimiento,
        is_active: true,
        ocupacion,
        ciudad,
        direccion,
        telefono
      }
    })
  }


  static async crearCliente(username, first_name, last_name, email, rol, documento, password, fechaNacimiento, telefono, ccAsociado = 'null') {
    return axios({
      method: 'post',
      url: urlBase + '/users/create/',
      data: {
        username,
        first_name,
        last_name,
        email,
        rol,
        documento,
        password,
        fechaNacimiento,
        is_active: true,
        telefono
      }
    })
  }


  static validarConexion(email, password, token) {
    return axios({
      method: 'GET',
      url: urlBase + '/login/',
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: {
        email: email,
        password
      }
    })
  }


  static listarUsuarios(token) {
    return axios({
      method: 'GET',
      url: urlBase + '/users/',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }

  // Cuenta de Ahorros
  static crearCuentaDeAhorros(token, DocAsociado, fecha, descripcion, monto, firmaDigital, tipoConsignacion) {
    console.log('crear cuenta de ahorros')
    return axios({
      method: 'POST',
      url: urlBase + '/ahorros/create',
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: {
        DocAsociado,
        fecha,
        descripcion,
        monto,
        firmaDigital,
        tipoConsignacion
      }
    })

  }

  // Si no se inserta el segundo parámetro, se tomará como la lectura de todas las cuentas de ahorro
  static leerCuentaDeAhorros(token, DocAsociado = "") {
    console.log('MIRAAA -> ', DocAsociado)
    return axios({
      method: 'GET',
      url: urlBase + '/ahorros/all' + DocAsociado,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }


  static modificarCuentaDeAhorros(token, id, data) {
    // const datos = '{'+ 
    //   (( datos.monto )? `"monto":${datos.monto},` : "" +
    //   ( datos.descripcion )? `descripcion : ${datos.descripcion},` : "").slice(0,-1) + '}'

    return axios({
      method: 'PUT',
      url: urlBase + '/ahorros/update/' + id,
      headers: {
        Authorization: `Bearer ${token}`
      },
      data
    })
  }

  // Préstamos
  static leerPrestamos(token, id = "") {

    return axios({
      method: 'GET',
      url: urlBase + '/prestamos/' + id,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }

  static registrarPrestamos(token, data) {
    return axios({
      method: 'POST',
      url: urlBase + '/prestamos/create',
      headers: {
        Authorization: `Bearer ${token}`
      },
      data
    })
  }

  static modificarPrestamos(token, id, data) {
    return axios({
      method: 'PUT',
      urls: urlBase + '/prestamos/update/' + id,
      headers: {
        Authorization: `Bearer ${token}`
      },
      data
    })
  }


  // CRUD Sanciones

  static crearSancion(token, data) {
    return axios({
      method: 'POST',
      url: urlBase + '/sanciones/create',
      headers: {
        Authorization: `Bearer ${token}`
      },
      data
    })
  }


  static leerSanciones(token, id = "") {
    return axios({
      method: 'GET',
      url: urlBase + '/sanciones/' + id,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }


  static modificarSancion(token, id, data) {
    return axios({
      method: 'PUT',
      url: urlBase + '/sancion/update/' + id,
      headers: {
        Authorization: `Bearer ${token}`
      },
      data
    })
  }


  // CRUD Abonos

  static crearAbono(token, data) {
    return axios({
      method: 'POST',
      url: urlBase + '/abono/create',
      headers: {
        Authorization: `Bearer ${token}`
      },
      data
    })
  }

  static leerAbonos(token, id = "") {
    return axios({
      method: 'GET',
      url: urlBase + '/abono/all' + id,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }

  static modificarAbono(token, id, data) {
    return axios({
      method: 'PUT',
      url: urlBase + '/abono/modify/' + id,
      headers: {
        Authorization: `Bearer ${token}`
      },
      data
    })
  }

  static async reporte_top_ahorros() {
    return axios.get(`${urlBase}/reportes/ahorrotop`)
  }

}

export default Conexion;