<template>
  <div class="card mt-5">
    <div class="card-header pb-0 p-4">
      <div class="row">
        <div class="col-3 d-flex align-items-center">
          <h6 class="mb-0">Realizar Sanción</h6>
        </div>
      </div>
    </div>
    <div class="card-body p-5">
      <div class="row">

        <input class="col-md-6 mb-md-0 mb-4 card card-body border card-plain border-radius-lg d-flex align-items-center flex-row" type="text" placeholder="CC del asociado" v-model="asociadoMulta">

        <input class="col-md-6 mb-md-0 mb-4 card card-body border card-plain border-radius-lg d-flex align-items-center flex-row" type="number" placeholder="Costo de la multa" v-model="costo">

        <input class="col-md-6 mb-md-0 mb-4 card card-body border card-plain border-radius-lg d-flex align-items-center flex-row" type="text" placeholder="Motivo de la multa" v-model="motivo">

        <input class="col-md-6 mb-md-0 mb-4 card card-body border card-plain border-radius-lg d-flex align-items-center flex-row" type="date" placeholder="fecha" v-model="fecha"> 

      </div>
    </div>
    <div class="col-10 text-end mb-3">
          <argon-button class="bg-gradient-info text-white" @click="registroSancion">
           <!--<i class="fas fa-plus me-1"></i>--> 
            Registrar sanción 
          </argon-button>
        </div>
       <!-- <div class="col-3 text-end">
          <argon-button class="bg-gradient-warning text-white">
            Actualizar abono
          </argon-button>
        </div>
       <div class="col-3 text-end">
          <argon-button class="bg-gradient-danger text-white" >
            Desactivar abono

          </argon-button>
        </div>-->
  <h3 v-if="mensaje"> {{ mensaje }}</h3>
  </div>
  
</template>

<script>
import ArgonButton from "@/components/ArgonButton.vue"; 
import Conexion from '@/classes/Conexion';
import Usuario from '@/classes/Usuario.js';
export default {
  name: "Penalty_fee_Card",
  components: {
    ArgonButton,
  },
  data() {
    return { 
      asociadoMulta : '',
      costo : null,
      motivo : '',
      fecha: '',
      usuario: new Usuario(),
      mensaje : null
    };
  },
  methods:{
    registroSancion(){
      const data = {
        asociadoReferente : this.asociadoMulta,
        motivo: this.motivo,
        costo: this.costo,
        estadoMulta: false, 
        fecha: this.fecha
      }
      Conexion.crearSancion( this.usuario.getToken, data)
        .then( resp => {
          console.log( resp )
          this.mensaje = 'Sanción creado con éxito'
          this.reiniciarValores()
        })
        .catch(err => {
          this.mensaje = 'Por favor, digitar correctamente todos los datos'
          console.log( err )
        }).
        finally( () => {
          setTimeout( () => {
            this.mensaje = null
          }, 5000)
        })
    },
    reiniciarValores(){
      this.asociadoMulta = ''
      this.costo = null
      this.motivo = ''
      this.fecha= ''
    }
  }
};
</script>
