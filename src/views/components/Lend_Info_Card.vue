<template>
  <div class="card">
    <div class="card-header pb-0 px-3">
      <h6 class="mb-0">Información del préstamo</h6>
    </div>
    <div class="card-body pt-4 p-3">
      <ul class="list-group" v-for="prestamo in prestamos" :key="prestamo.id"> 
        <Lend_Info_Card_Component :prestamo="prestamo" />
      </ul>
    </div>
  </div>
</template>

<script>
import Lend_Info_Card_Component from './helpers/Lend_Info_Card_Component.vue';
import Conexion from '@/classes/Conexion';
import Usuario from '@/classes/Usuario.js';

export default {
  name: "Lend_InfoCard",
  components : {
    Lend_Info_Card_Component
  },
  data(){
    return {
      usuario : new Usuario(),
      prestamos : null
    }
  },
  methods :{
    async traerPrestamos() {
      await Conexion.leerPrestamos( this.usuario.getToken)
        .then( resp => {
          this.prestamos = resp.data.prestamos
        })
    }
  },
  beforeMount(){
    this.traerPrestamos()
  }
};
</script>
