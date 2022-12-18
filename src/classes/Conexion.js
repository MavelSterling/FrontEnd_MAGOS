import axios from "axios";
/* eslint-disable */

const numeroPuerto = '8080'; // Es el puerto por defecto cuando se ejecuta el comando npm run serve
const urlBase = `http://localhost:${numeroPuerto}/api`;
const extension = "";
const numeral = ""; // Para consultar por los usuarios según su característica única 

class Conexion {
  
  constructor(){
    // this._token = token;
    // this._extension = extension;
    // this._numeral = numeral;
  }

  // Método que valida el correo y contraseña de usuario, y retorna un token de seguridad para poder seguir interactuando con la aplicación
  static loginUsuario( email, password ) {
    return axios({
      method : 'POST',
      url : urlBase + '/login/',
      data : {
        email : email,
        password : password
      }
    }) 
  }

  static async pedirCredenciaesSinRegistro() {
    const token =  await Conexion.loginUsuario('magosds2@correounivalle.edu.co', 'Magos_DS2')
      .then( resp => {return resp.data.tokens.access})
    console.log('del metodo', token )
     
  }


  static async crearAsociado( username, first_name, last_name, email, rol, documento, password, fechaNacimiento, ){
    console.log(
      {
        method: 'post',
        url : urlBase + '/users/',
        headers : {
          Authorization : `Bearer ${await Conexion.pedirCredenciaesSinRegistro()}`,
        },
        data :  {
          username,
          first_name,
          last_name,
          email,
          rol,
          documento,
          password,
          fechaNacimiento,
          is_active : true
        }
      }
    )
    return axios({
      method: 'post',
      url : urlBase + '/users/',
      headers : {
        Authorization : `Bearer ${Conexion.pedirCredenciaesSinRegistro()}`,
        'Content-Type': 'application/json'
      },
      data :  {
        username,
        first_name,
        last_name,
        email,
        rol,
        documento,
        password,
        fechaNacimiento,
        is_active : true
      }
    }). then( console.log('token!', await Conexion.pedirCredenciaesSinRegistro() ))
  }


  static validarConexion( email, password, token ){
    return axios({
      method : 'GET',
      url : urlBase + '/login/',
      headers : {
        Authorization : `Bearer ${token}`
      },
      data : {
        email : email,
        password
      }
    }) 
  }


  static listarUsuarios ( token ){
    return axios({
      method : 'GET',
      url : urlBase + '/users/',
      headers : {
        Authorization : `Bearer ${token}`
      }
    })
  }
}

export default Conexion;