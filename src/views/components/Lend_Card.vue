<template>
  <div class="card mt-5">
    <div class="card-header pb-0 p-4">
      <div class="row">
        <div class="col-3 d-flex align-items-center">
          <h6 class="mb-0"> Solicitar préstamo</h6>
        </div>
      </div>
    </div>

    
    <div class="card-body p-5">
      <div class="row">
         
        <input class="col-md-6 mb-md-0 mb-4 card card-body border card-plain border-radius-lg d-flex align-items-center flex-row" type="text" placeholder="CC deudor" readonly :value="'CC del deudor : '+ usuario.getDocumento"> 

        <input class="col-md-6 mb-md-0 mb-4 card card-body border card-plain border-radius-lg d-flex align-items-center flex-row" type="text" placeholder="CC del codeudor" v-model="codeudor">
        
        <input class="col-md-6 mb-md-0 mb-4 card card-body border card-plain border-radius-lg d-flex align-items-center flex-row" type="number" placeholder="Cantidad solicitada" v-model="monto">
        
        <input class="col-md-6 mb-md-0 mb-4 card card-body border card-plain border-radius-lg d-flex align-items-center flex-row" type="text" placeholder="interes" readonly :value="determinarPorcentajeInteres()" > 

        <input class="col-md-6 mb-md-0 mb-4 card card-body border card-plain border-radius-lg d-flex align-items-center flex-row" type="date" v-model="fecha" > 
       
      </div>
      <h3 v-if="mensaje">{{ mensaje }}</h3>
    </div> 
    <div class="col-10 text-end mb-3">
          <argon-button class="bg-gradient-info text-white" @click="registrarPrestamo">
           <!--<i class="fas fa-plus me-1"></i>--> 
            Registrar solicitud de préstamo
          </argon-button>
        </div> 
  </div>
</template>

<script>
import ArgonButton from "@/components/ArgonButton.vue";
import Usuario from '@/classes/Usuario.js';
import Conexion from "@/classes/Conexion"; 

export default {
  name: "Lend_Card",
  components: {
    ArgonButton,
  },
  data() {
    return { 
      usuario : new Usuario(),
      comision : null,
      monto : null,
      codeudor : '',
      fecha: null,
      mensaje : '',

    };
  },
  methods:{
    registrarPrestamo(){
      const datos = {
        solicitudPrestamo : String(Math.random()*9999),
        monto : this.monto,
        fecha : this.fecha,
        estadoPrestamo : false,
        interes : (this.usuario.getRol === 'cliente') ? 0.025 : 0.02,
        comision : this.comision,
        // deudor : this.usuario.getDocumento,
        deudor : "1",
        codeudor : this.codeudor
      }
      Conexion.registrarPrestamos( this.usuario.getToken, datos )
        .then( resp => {
          console.log(resp)
          this.mensaje = 'Solicitud realizada con éxito'
          this.monto = ''
          this.codeudor = ''
          this.fecha= ''

        })
        .catch( err => {
          this.mensaje = 'Error.'
          console.log(err)
        })
        .finally( () => {
          setTimeout(() => {
            this.mensaje = ""
          }, 5000)
        })
    },

    determinarPorcentajeInteres(){
      return (this.usuario.getRol === "cliente")? "2.5%" : "2%" + " de interes"
    },
    definirPorcentaje(){
      return ((this.usuario.getRol === 'cliente') ? 0.025 : 0.02) * this.monto
    },
  },
  created(){
    this.comision = this.definirPorcentaje()
  }
};
</script>
