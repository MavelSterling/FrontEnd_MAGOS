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