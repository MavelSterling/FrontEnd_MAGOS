<template>
  
  <template v-if="cuenta">
    <li class="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg"
  
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
      <span class="mb-2 text-xs">
        Estado de cuenta:
        <span class="text-dark ms-sm-2 font-weight-bold">{{  definirEstadoDeCuenta() }}</span>
      </span>
      <h4 v-if="mensaje">{{ mensaje }}</h4>
    </div>
    <div class="ms-auto text-end">
      <a class="btn btn-link text-danger text-gradient px-3 mb-0" href="javascript:;" @click="desactivarCuenta" v-if="actualizador && cuenta.autorizado">
        <i class="far fa-trash-alt me-2" aria-hidden="true"></i>Desactivar
      </a>

      <a class="btn btn-link text-success px-3 mb-0" href="javascript:;"
      @click="guardarActualizacion" v-if="actualizador">
        <i class="" aria-hidden="true"></i>Guardar
      </a>
      <a class="btn btn-link text-dark px-3 mb-0" href="javascript:;"
      @click="actualizarCuenta" v-else>
        <i class="fas fa-pencil-alt text-dark me-2" aria-hidden="true"></i>Editar
      </a>
    </div>
  </li>
  </template> 
</template>

<script>
/* eslint-disable */
import Conexion from '@/classes/Conexion';
import Usuario from '@/classes/Usuario.js'; 
export default {
  name:'billing_info_card_cuenta',
  props:{
    cuenta : {
      default: null,
      required: true
    }
  },
  data(){
    return {
      usuario : new Usuario(),
      actualizador : false,
      descripcionActualizada: this.cuenta.descripcion, 
      mensaje : null
    }
  },
  methods:{
    definirEstadoDeCuenta(){
      const respuesta = ( this.cuenta.autorizado === true )? 'Activado' :
                        ( this.cuenta.autorizado === false )? 'Desactivado' :
                        ( this.cuenta.autorizado === null ) ? 'Verificación pendiente por parte del gerente' : 'ERROR SERVIDOR'
      return respuesta
    },
    desactivarCuenta(){
      this.cuenta.autorizado = false
    },
    actualizarCuenta(){
      this.actualizador = true
    },

    guardarActualizacion(){
      this.actualizador = false
      this.actualizarDatos()
      this.$emit('actualizar', true)
      
    },

    actualizarDatos(){
      const datos = {
        DocAsociado : this.cuenta.DocAsociado,
        monto: this.cuenta.monto,
        firmaDigital: this.cuenta.firmaDigital,
        tipoConsignacion: this.cuenta.tipoConsignacion,
        descripcion: this.descripcionActualizada,
        autorizado: this.cuenta.autorizado
      }
      Conexion.modificarCuentaDeAhorros( this.usuario.getToken, this.cuenta.idAhorro, datos )
        .then( resp => {
          console.log( resp )
          this.mensaje = 'Cambio realizado exitosamente'
          // setTimeout(() => {
          //   // this.$forceUpdate()
          // },1000)
        })
        .catch( err => {
          console.log( err )
          this.mensaje = 'Ha ocurrido un error'
        })
        .finally(() => {
          setTimeout( () => {
            this.mensaje = null
          },6000)
        })
    }
  }
}
</script>

<style scoped>
input { 
  background-color: #a0d1a0;
}
</style>