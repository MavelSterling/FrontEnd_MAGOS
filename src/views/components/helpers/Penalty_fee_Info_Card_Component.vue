<template>
  
  <template v-if="sancion">
    <li class="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg"
  
  >
    <div class="d-flex flex-column">
      <!-- <h6 class="mb-3 text-sm">Oliver Liam</h6>-->
      <span class="mb-2 text-xs">
        ID de la multa:
        <span class="text-dark font-weight-bold ms-sm-2">{{ sancion.idMulta }}</span>
      </span>

      <span class="mb-2 text-xs">
        ID del asociado multado:
        <span class="text-dark font-weight-bold ms-sm-2">{{ sancion.asociadoReferente }}</span>
      </span>

      <span class="mb-2 text-xs">
        Valor de la sanción:
        <span class="text-dark font-weight-bold ms-sm-2">{{ sancion.costo }}</span>
      </span>

      <span class="mb-2 text-xs">
        Fecha de la sanción:
        <span class="text-dark font-weight-bold ms-sm-2">{{ sancion.fecha }}</span>
      </span> 

      <span class="mb-2 text-xs">
        Motivo de la sanción:
        <span class="text-dark font-weight-bold ms-sm-2">{{ sancion.motivo }}</span>
      </span>

      <span class="mb-2 text-xs">
        Monto pagado de la sanción
        <span class="text-dark font-weight-bold ms-sm-2">{{ sancion.montoPagado }}</span>
      </span>

      <span class="mb-2 text-xs">
        Estado de la sanción:
        <span class="text-dark font-weight-bold ms-sm-2">{{ this.definirEstadoSancion() }}</span>
      </span>
      
      <h4 v-if="mensaje">{{ mensaje }}</h4>
    </div>
    <div class="ms-auto text-end">
       
      <a class="btn btn-link text-success px-3 mb-0" href="javascript:;"
      @click="pagar" v-if="usuario.getRol !=='admin'">
        <i class="fas fa-dragon text-success me-2" aria-hidden="true"></i>Pagar
      </a>
 
    </div>
  </li>
   
  </template> 
</template>

<script>
/* eslint-disable */
// import Conexion from '@/classes/Conexion';
import Usuario from '@/classes/Usuario.js'; 
export default {
  name:'penalty-fee-info-card-component',
  props:{
    sancion : {
      default: null,
      required: true
    }
  },
  data(){
    return {
      usuario : new Usuario(), 
      mensaje : null
    }
  },
  methods:{
    pagar(){
      this.mensaje= "Acción para pagar"
    },
 
    

    definirEstadoSancion(){
      return (this.sancion.estadoMulta)? 'Multa pagada' : 'Multa pendiente'
    }
  }
}
</script>

<style scoped>
input { 
  background-color: #a0d1a0;
}
</style>