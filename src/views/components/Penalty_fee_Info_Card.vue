<template>
  <div class="card">
    <div class="card-header pb-0 px-3">
      <h6 class="mb-0">Información de sanciones</h6>
    </div>
    <div class="card-body pt-4 p-3">
      <ul class="list-group" v-for="sancion in sanciones" :key="sancion.idMulta">

        <Penalty_fee_Info_Card_Component :sancion="sancion"/>
        
      </ul>
    </div>
  </div>
</template>

<script>
import Penalty_fee_Info_Card_Component from './helpers/Penalty_fee_Info_Card_Component.vue';
import Conexion from '@/classes/Conexion';
import Usuario from '@/classes/Usuario.js';
export default {
  name: "Penalty_fee_Info_Card",
  data(){
    return {
      usuario : new Usuario(),
      sanciones : null
    }
  },
  components :{
    Penalty_fee_Info_Card_Component
  },
  methods:{
    traerSanciones(){
      Conexion.leerSanciones( this.usuario.getToken)
        .then( resp => {
          console.log( resp)
          this.sanciones = resp.data
        })
        .catch( err => console.log(err))
    }
  },
  created(){
    this.traerSanciones()
  }
};
</script>
