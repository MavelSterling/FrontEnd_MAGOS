<template>
  <div class="card mt-5"> 
    <div class="card-header pb-0 p-4">
      <div class="row">
        <div class="col-3 d-flex align-items-center">
          <h6 class="mb-0">Nuevo abono</h6>
        </div>
      </div>
    </div>

    <div class="card-body p-5 ">
      <div class="row">

            <form action="#" class="col-md-6 mb-md-0 mb-4 card card-body border card-plain border-radius-lg d-flex align-items-center flex-row">
              <label for="lang">Tipo de cuenta a abonar</label>
              <select name="tipoConsignacion" id="lang" class="col-md-6 mb-md-0 mb-4 card card-body border card-plain border-radius-lg d-flex align-items-center flex-row" v-model="destino"> 
                <option value="prestamos" selected>Préstamos</option>
                <option value="sanciones" v-if=" usuario.getRol !== 'cliente'">Sanciones</option>
              </select> 
            </form>

            <input class="col-md-6 mb-md-0 mb-4 card card-body border card-plain border-radius-lg d-flex align-items-center flex-row" type="number" placeholder="# de cuenta a Abonar" v-model="numeroCuentaADepositar">

            <form action="#" class="col-md-6 mb-md-0 mb-4 card card-body border card-plain border-radius-lg d-flex align-items-center flex-row">
              <label for="lang">Cuenta de ahorros con la que pagará</label>
              <select name="tipoConsignacion" id="lang" class="col-md-6 mb-md-0 mb-4 card card-body border card-plain border-radius-lg d-flex align-items-center flex-row" v-model="cuenta">
                <!-- AÑADIR FUNCIONALIDAD BACKEND-->
                <option v-for="cuenta in cuentasDeAhorro" :key="cuenta.idAhorro" :value="cuenta.idAhorro">{{ cuenta.idAhorro }}</option> 
              </select> 
            </form>

            <input class="col-md-6 mb-md-0 mb-4 card card-body border card-plain border-radius-lg d-flex align-items-center flex-row" type="number" placeholder="Monto a abonar" v-model="monto">

            <input class="col-md-6 mb-md-0 mb-4 card card-body border card-plain border-radius-lg d-flex align-items-center flex-row" type="date"  v-model="fecha">

            <input class="col-md-6 mb-md-0 mb-4 card card-body border card-plain border-radius-lg d-flex align-items-center flex-row" type="text" placeholder="Descripción" v-model="descripcion">
 

    </div>
    <div class="col-10 text-end mb-3">
          <argon-button class="bg-gradient-info text-white" @click="registrarAbono">
           <!--<i class="fas fa-plus me-1"></i>--> 
            Ingresar abono
          </argon-button>
        </div> 
  </div>
  </div> 
  <h3 v-if="mensaje">{{ mensaje }}</h3>
</template>

<script>
import ArgonButton from "@/components/ArgonButton.vue"; 
import Usuario from '@/classes/Usuario.js';
import Conexion from '@/classes/Conexion';

export default {
  name: "Payment_card",
  components: {
    ArgonButton,
  },
  data() {
    return { 
      numeroCuentaADepositar: null,
      destino: null,
      cuenta: null,
      monto: null,
      fecha: null,
      descripcion : '',
      mensaje: null,
      usuario : new Usuario(),
      cuentasDeAhorro: null
    };
  },
  created(){
    Conexion.leerCuentaDeAhorros( this.usuario.getToken, this.usuario.getDocumento )
    .then( resp => {
      // console.log('ctas ahorros', resp.data)
      this.cuentasDeAhorro = resp.data 
      } )
  },
  methods:{
    registrarAbono(){
      const data = {
        abona: this.usuario.getDocumento,
        monto: this.monto,
        cuentaAhorro: null,
        descripcion: this.descripcion,
        // idPrestamo: this.numeroCuentaADepositar,
      }

      if(this.destino === "prestamos"){
        data["cuentaPrestamo"] = this.numeroCuentaADepositar
        data["cuentaSancion"] = null
      }else if(this.destino === "sanciones"){
        data["cuentaSancion"] = this.numeroCuentaADepositar
        data["cuentaPrestamo"] = null
      }else if( this.destino === "ahorros" ){
        // CUANDO YA SE HAYA IMPLEMENTADO EN EL BACKEND
        console.log("implementar después")
      }else{
        throw "error definición de tipo de cuenta a abonar"
      }

      console.log('MIRA la data ->', data)

      Conexion.crearAbono( this.usuario.getToken, data)
        .then( resp => {
          console.log(resp)
          this.mensaje = 'Abono realizado con éxito'
        })
        .catch( err => {
          console.log(err)
          this.mensaje= 'Sucedió un problema, intenta nuevamente'
        })
        .finally( () => setTimeout(() => {
          this.mensaje = null
        }, 5000))
    }
  }
};
</script>
