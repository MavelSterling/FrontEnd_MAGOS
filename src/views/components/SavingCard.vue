<template>
  <div class="card mt-5">
    <div class="card-header pb-0 p-4">
      <div class="row">
        <div class="col-3 d-flex align-items-center">
          <h6 class="mb-0">Cuenta de ahorros</h6>
        </div>
      </div>
    </div>
    <div class="card-body p-5">
      <div class="row"> 
          <!-- <div
            class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row"
          > -->
           <!-- <img class="w-10 me-3 mb-0" src="@/assets/img/logos/mastercard.png" alt="logo" />-->
            <!-- <h6 class="mb-0">Tipo de consignación</h6> -->

            <!-- <input class="col-md-6 mb-md-0 mb-4 card card-body border card-plain border-radius-lg d-flex align-items-center flex-row" type="text" placeholder="Tipo de consignación"> -->

            <form action="#" class="col-md-6 mb-md-0 mb-4 card card-body border card-plain border-radius-lg d-flex align-items-center flex-row">
              <label for="lang">Tipo consignación</label>
              <select name="tipoConsignacion" id="lang" class="col-md-6 mb-md-0 mb-4 card card-body border card-plain border-radius-lg d-flex align-items-center flex-row" v-model="tipoConsignacion">
                <option value="fisico" selected="true">Físico</option>
                <option value="virtual">Virtual</option>
              </select> 
            </form>

           <!-- <i
              class="fas fa-pencil-alt ms-auto text-dark cursor-pointer"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title
              aria-hidden="true"
              data-bs-original-title="Edit Card"
              aria-label="Edit Card"
            ></i>-->
            <!-- <span class="sr-only">Editar tarjeta</span> -->
          <!-- </div> -->  
          <input class="col-md-6 mb-md-0 mb-4 card card-body border card-plain border-radius-lg d-flex align-items-center flex-row" type="number" placeholder="Monto" v-model="monto">
            <!--<i
              class="fas fa-pencil-alt ms-auto text-dark cursor-pointer"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title
              aria-hidden="true"
              data-bs-original-title="Edit Card"
              aria-label="Edit Card"
            ></i>-->
            <!-- <span class="sr-only">Editar valor</span>-->   
          <input class="mb-md-0 mb-4 card card-body border card-plain border-radius-lg d-flex align-items-center flex-row" type="text" placeholder="Descripción" v-model="descripcion">  
        
        <div class="row mt-3">
          <div
            class="col-9 card card-body border card-plain border-radius-lg d-flex align-items-center flex-row"
          >
            <h4>Firma digital</h4>
            <input type="file" accept="application/pdf"
            class="col-4 card card-body border card-plain border-radius-lg d-flex align-items-center flex-row">
      
          </div>
        </div>
      </div>
    </div>
    <div class="col-10 text-end mb-3">
          <argon-button class="bg-success text-white" variant="gradient" @click="crearCuentaAhorros">
           <!--<i class="fas fa-plus me-1"></i>--> 
            Registrar
          </argon-button>
        </div>
       <!-- <div class="col-3 text-end">
          <argon-button class="bg-warning text-white" variant="gradient">
            Actualizar monto
          </argon-button>
        </div>-->
       <!--<div class="col-3 text-end">
          <argon-button class="bg-warning text-white" variant="gradient">
            Cancelar
          </argon-button>
        </div>--> 
    <h4 v-if="mensaje">{{ mensaje }}</h4>
  </div>
</template>

<script>
import ArgonButton from "@/components/ArgonButton.vue";  
import Conexion from "@/classes/Conexion.js";
import Usuario from '@/classes/Usuario.js';


export default {
  name: "saving-card",
  components: {
    ArgonButton,
  },
  data() {
    return {
      tipoConsignacion : "",
      monto : null,
      descripcion : "",
      fecha : new Date( Date.now() ).toLocaleDateString(),
      firmaDigital : 'firma',
      mensaje : null,
      usuario : new Usuario()
    };
  },
  methods : {
    async crearCuentaAhorros() {
      console.log(this.usuario.getToken, this.usuario.getDocumento)
      await Conexion.crearCuentaDeAhorros(
        this.usuario.getToken, this.usuario.getDocumento, this.fecha, this.descripcion, this.monto, this.firmaDigital, this.tipoConsignacion)
          .then( resp => {
            this.mensaje = 'Registro realizado con éxito'
            console.log( resp )
          })
          .catch( err => {
            this.mensaje = 'sucedió un error'
            console.log( err )
          }) 

    }
  }
};
</script>
