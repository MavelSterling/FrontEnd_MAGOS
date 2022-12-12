import axios from "axios";
class Conexion {
  _numeroPuerto = '8080'; // Es el puerto por defecto cuando se ejecuta el comando npm run serve
  _urlBase = `http://localhost:${this._numeroPuerto}/api`;
  _extension = "";
  _numeral = ""; // Para consultar por los usuarios según su característica única 

  constructor(token = "", extension = "", numeral = ""){
    this._token = token;
    this._extension = extension;
    this._numeral = numeral;
  }

  // Método que valida el correo y contraseña de usuario, y retorna un token de seguridad para poder seguir interactuando con la aplicación
  loginUsuario( email, password ) {
    return axios({
      method : 'POST',
      url : this._urlBase + '/login/',
      data : {
        email : email,
        password : password
      }
    }) 
  }
}

export default Conexion;