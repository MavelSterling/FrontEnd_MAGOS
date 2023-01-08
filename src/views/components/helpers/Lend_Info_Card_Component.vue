
<template>
  <template v-if="prestamo">
    <li class="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
    <div class="d-flex flex-column"> 
      <span class="mb-2 text-xs">
        ID del préstamo:
        <span class="text-dark font-weight-bold ms-sm-2">{{ prestamo.solicitudPrestamo }}</span>
      </span>
      <span class="mb-2 text-xs">
        CC del deudor:
        <span class="text-dark font-weight-bold ms-sm-2">{{ prestamo.deudor_id }}</span>
      </span>
      <span class="mb-2 text-xs">
        CC del codeudor:
        <span class="text-dark font-weight-bold ms-sm-2">{{ prestamo.codeudor_id }}</span>
      </span>
      <span class="mb-2 text-xs">
        Cantidad prestada:
        <span class="text-dark ms-sm-2 font-weight-bold">{{ prestamo.monto}}</span>
      </span>
      <span class="mb-2 text-xs">
        Cantidad pagada:
        <span class="text-dark ms-sm-2 font-weight-bold"> SE IMPLEMENTARÁ CUANDO SE ACTUALICE LA API</span>
      </span>
      <span class="mb-2 text-xs">
        Fecha del préstamo
        <span class="text-dark ms-sm-2 font-weight-bold">{{ prestamo.fecha}}</span>
      </span>
      <span class="mb-2 text-xs">
        Estado del préstamo
        <span class="text-dark ms-sm-2 font-weight-bold">{{ prestamo.estadoPrestamo}}</span>
      </span>
      <span class="mb-2 text-xs">
        Interés del préstamo
        <span class="text-dark ms-sm-2 font-weight-bold">{{ prestamo.interes}}</span>
      </span> 
      <span class="mb-2 text-xs">
        Autorización del préstamo
        <span class="text-dark ms-sm-2 font-weight-bold">CUANDO SE ACTUALICE LA API</span>
      </span> 
      <h4 v-if="mensaje">{{ mensaje }}</h4>
    </div>
    <div class="ms-auto text-end">
     
      <template v-if="codeudorx">
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
        @click="pagar">
          <i class=" fas fa-dragon text-success me-2" aria-hidden="true"></i>Pagar
        </a> 
      </template>
      

      
    </div>
  </li>
  </template>
  <template v-else>
    <p v-if="codeudorx">Actualmente no tiene préstamos realizados a su nombre como codeudor</p>
    <p v-else>Actualmente no tiene préstamos realizados a su nombre como deudor</p>
  </template>
</template>

<script>
import Usuario from '@/classes/Usuario.js'; 

export default {
  name: 'lend-info-card-component',
  props: {
    prestamo:{
      default: null,
      required: true
    },
    codeudorx: {
      default : true,
      required: true
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
    pagar(){
      this.mensaje = "Te debería de llevar al componente de pagos"
      // this.$emit('informacion', this.prestamo)
    },

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
  },

  beforeMount(){
    console.log('i', this.codeudorx)
  }
}
</script>

<style scoped>
input { 
  background-color: #a0d1a0;
}
</style>