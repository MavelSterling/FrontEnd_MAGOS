
<template>
  <template v-if="abono">
    <li class="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
    <div class="d-flex flex-column"> 
      <span class="mb-2 text-xs">
        ID del abono:
        <span class="text-dark font-weight-bold ms-sm-2">{{ abono.idAbono  }}</span>
      </span>
      <span class="mb-2 text-xs">
        Monto:
        <span class="text-dark font-weight-bold ms-sm-2">{{ abono.monto  }}</span>
      </span>
      <span class="mb-2 text-xs">
        Fecha del abono:
        <span class="text-dark font-weight-bold ms-sm-2">{{ abono.fecha }}</span>
      </span>
      <span class="mb-2 text-xs">
        Descripción del abono:
        <span class="text-dark ms-sm-2 font-weight-bold">{{ abono.descripcion }}</span>
      </span>
      <span class="mb-2 text-xs" v-if="abono.idPrestamo">
        ID del préstamo que se consignó:
        <span class="text-dark ms-sm-2 font-weight-bold">{{ abono.idPrestamo }}</span>
      </span>
      <span class="mb-2 text-xs" v-else-if="abono.idSancion">
        ID de la sanción que se consignó:
        <span class="text-dark ms-sm-2 font-weight-bold">{{ abono.idSancion }}</span>
      </span>
      <span class="mb-2 text-xs" v-else>
        ID de la cuenta que se consignó:
        <span class="text-dark ms-sm-2 font-weight-bold"> SE IMPLEMENTARÁ CUANDO LA API ESTÉ COMPLETA POR EL BACKEND</span>
      </span>
      <span class="mb-2 text-xs">
        CC del abonador:
        <span class="text-dark ms-sm-2 font-weight-bold"> {{ abono.abona}}</span>
      </span>
      <span class="mb-2 text-xs">
        Número de cuenta de donde provino el abono:
        <span class="text-dark ms-sm-2 font-weight-bold">{{ abono.cuentaAhorro }}</span>
      </span>
      <h4 v-if="mensaje">{{ mensaje }}</h4>
    </div>
    <div class="ms-auto text-end">
     
      <!-- <template v-if="abonoAMiCuenta">
        <a class="btn btn-link  px-3 mb-0 text-danger" href="javascript:;"
        @click="denegar">
          <i class=" material-icons" aria-hidden="true"></i>Denegar
        </a>

        <a class="btn btn-link  px-3 mb-0 text-success" href="javascript:;"
        @click="autorizar">
          <i class=" fas fa-dragon text-success me-2" aria-hidden="true"></i>Autorizar
        </a>
      </template>

      <template v-else>
        <a class="btn btn-link  px-3 mb-0 text-success" href="javascript:;"
        >
          <i class=" fas fa-dragon text-success me-2" aria-hidden="true"></i>Pagar
        </a> 
      </template> --> 
    </div>
  </li>
  </template>
  <template v-else>
    <p v-if="abonoAMiCuenta">Actualmente no te han llegado abonos a tus cuentas</p>
    <p v-else>Actualmente no has realizado ningún abono</p>
  </template>
</template>

<script>
/* eslint-disable */
import Usuario from '@/classes/Usuario.js'; 

export default {
  name: 'lend-info-card-component',
  props: {
    abono:{
      default: null,
      required: true
    },
    abonoAMiCuenta: { // Para definir que se traigan aquellas cuentas donde el usuario sea al que le abonen
      default : false,
      required: false
    }

  },
  data(){
    return {
      usuario : new Usuario(),
      actualizador: false, 
      mensaje: null
      
    }
  },
  methods:{  

    autorizar(){
      this.mensaje = "Para que se autorice el préstamo"
    },

    denegar(){
      this.mensaje = "Para que se niegue el préstamo"
    }

    

    // guardarActualizacion(){
    //   this.actualizador = false
    //   this.actualizarDatos()
    //   this.$emit('informacion', true)
      
    // },

    // actualizarDatos(){
    //   const datos = {
    //     DocAsociado : this.cuenta.DocAsociado,
    //     monto: this.cuenta.monto,
    //     firmaDigital: this.cuenta.firmaDigital,
    //     tipoConsignacion: this.cuenta.tipoConsignacion,
    //     descripcion: this.descripcionActualizada,
    //     autorizado: this.cuenta.autorizado
    //   }
    //   Conexion.modificarCuentaDeAhorros( this.usuario.getToken, this.cuenta.idAhorro, datos )
    //     .then( resp => {
    //       console.log( resp )
    //       this.mensaje = 'Cambio realizado exitosamente'
    //       // setTimeout(() => {
    //       //   // this.$forceUpdate()
    //       // },1000)
    //     })
    //     .catch( err => {
    //       console.log( err )
    //       this.mensaje = 'Ha ocurrido un error'
    //     })
    //     .finally(() => {
    //       setTimeout( () => {
    //         this.mensaje = null
    //       },6000)
    //     })
    // }
  }
}
</script>

<style scoped>
input { 
  background-color: #a0d1a0;
}
</style>