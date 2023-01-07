import Conexion from '@/classes/Conexion.js';
<template>
  <div class="card">
    <div class="card-header pb-0 px-3">
      <h6 class="mb-0">Información de la cuenta</h6>
    </div>
    <div class="card-body pt-4 p-3">
      <ul class="list-group">
        <template v-if="cuentas">
          <li class="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg"
        v-for="cuenta in cuentas" :key="cuenta.idAhorro"
        >
          <div class="d-flex flex-column">
           <!-- <h6 class="mb-3 text-sm">Oliver Liam</h6>-->
            <span class="mb-2 text-xs">
              ID cuenta de ahorro:
              <span class="text-dark font-weight-bold ms-sm-2">{{ cuenta.idAhorro }}</span>
            </span>
            <span class="mb-2 text-xs">
              ID Asociado:
              <span class="text-dark font-weight-bold ms-sm-2">{{ cuenta.DocAsociado }}</span>
            </span>
            <span class="mb-2 text-xs">
              Fecha del préstamo:
              <span class="text-dark ms-sm-2 font-weight-bold">{{ cuenta.fecha}}</span>
            </span>
            <span class="mb-2 text-xs">
              Descripción del ahorro:
              <input type="text" placeholder="Actualización"  v-model="descripcionActualizada" class="     d-flex" v-if="actualizador">
              <span class="text-dark ms-sm-2 font-weight-bold" v-else >{{ cuenta.descripcion }}</span>
            </span>
            <span class="mb-2 text-xs">
              Valor del ahorro:
              <span class="text-dark ms-sm-2 font-weight-bold">{{ cuenta.monto}}</span>
            </span>
            <span class="mb-2 text-xs">
              Tipo de consignación:
              <span class="text-dark ms-sm-2 font-weight-bold">{{  cuenta.tipoConsignacion }}</span>
            </span>
            <span class="mb-2 text-xs">
              Firma:
              <span class="text-dark ms-sm-2 font-weight-bold">{{  cuenta.firmaDigital }}</span>
            </span>
          </div>
          <div class="ms-auto text-end">
            <a class="btn btn-link text-danger text-gradient px-3 mb-0" href="javascript:;" @click="desactivarCuenta">
              <i class="far fa-trash-alt me-2" aria-hidden="true"></i>Desactivar
            </a>

            <a class="btn btn-link text-dark px-3 mb-0" href="javascript:;"
            @click="guardarActualizacion" v-if="actualizador">
              <i class="fas fa-pencil-alt text-dark me-2" aria-hidden="true"></i>Guardar
            </a>
            <a class="btn btn-link text-dark px-3 mb-0" href="javascript:;"
            @click="actualizarCuenta" v-else>
              <i class="fas fa-pencil-alt text-dark me-2" aria-hidden="true"></i>Editar
            </a>
          </div>
        </li>
        </template>
        
        <template v-else>
          <span class="mb-2 text-xs">
              Aún no ha creado ninguna cuenta de ahorros a su nombre.
          </span>
        </template>
 
      </ul>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Conexion from '@/classes/Conexion';
import Usuario from '@/classes/Usuario.js'; 
export default {
  name: "Billing_InfoCard",
  data(){
    return {
      cuentas : 

      [{
        DocAsociado :  "123456789",
        descripcion :  "This field is Description - Prueba",
        fecha :  "2008-12-01",
        firmaDigital :  "Mario Carvajal",
        idAhorro : 4,
        monto : 1243523545,
        tipoConsignacion: 'fisico' 
      },
      {
        DocAsociado :  "123456789",
        descripcion :  "This field is Description - Prueba",
        fecha :  "2008-12-01",
        firmaDigital :  "Mario Carvajal",
        idAhorro : 4,
        monto : 1243523545,
        tipoConsignacion: 'fisico' 
      }

      ]
      // null
      ,
      usuario : new Usuario(),
      actualizador : false,
      descripcionActualizada: ''
    }
  },
  methods: {
    async traerCuentas(){
      await Conexion.leerCuentaDeAhorros( this.usuario.getToken, "/"+this.usuario.getDocumento )
        .then( resp => {
          console.log( resp )
          this.cuentas = resp.data
        })
        .catch( err => console.log( "Error_leer_cuenta_de_ahorros", err ))
    },
    actualizarCuenta(){
      this.actualizador = true
    },
    guardarActualizacion(){
      this.actualizador = false
    },
    eliminar(){
      console.log('hola')
    }
  },
  created(){
    this.traerCuentas()
  }
};
</script>

<style scoped>
input { 
  background-color: #a0d1a0;
}
</style>
