import Conexion from '@/classes/Conexion.js';
<template>
  <div class="card">
    <div class="card-header pb-0 px-3">
      <h6 class="mb-0">Información de la cuenta</h6>
    </div>
    <div class="card-body pt-4 p-3">
       
    <template v-if="cuentas"> 
      <ul class="list-group"
      v-for="cuenta in cuentas" :key="cuenta.idAhorro"
      >
        <Billing_Info_Card_Cuenta :cuenta="cuenta"/>
      </ul>
    </template> 

      <template v-else>
        <span class="mb-2 text-xs">
            Aún no ha creado ninguna cuenta de ahorros a su nombre.
        </span>
      </template> 
      
      
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Conexion from '@/classes/Conexion';
import Usuario from '@/classes/Usuario.js'; 
import Billing_Info_Card_Cuenta from "./helpers/Billing_Info_Card_Cuenta.vue";
export default {
  name: "Billing_InfoCard",
  components:{
    Billing_Info_Card_Cuenta
  },
  data(){
    return {
      cuentas : 

      [{
        DocAsociado :  "123456789",
        descripcion :  "This field is Description - Prueba",
        fecha :  "2008-12-01",
        firmaDigital :  "Mario Carvajal",
        idAhorro : 4,
        monto : 1243523545,
        tipoConsignacion: 'fisico' 
      },
      {
        DocAsociado :  "123456789",
        descripcion :  "This field is Description - Prueba",
        fecha :  "2008-12-01",
        firmaDigital :  "Mario Carvajal",
        idAhorro : 4,
        monto : 1243523545,
        tipoConsignacion: 'fisico' 
      }

      ]
      // null
      ,
      usuario : new Usuario(),
      actualizador : false,
      descripcionActualizada: ''
    }
  },
  methods: {
    async traerCuentas(){
      await Conexion.leerCuentaDeAhorros( this.usuario.getToken, "/"+this.usuario.getDocumento )
        .then( resp => {
          console.log( resp )
          this.cuentas = resp.data
        })
        .catch( err => console.log( "Error_leer_cuenta_de_ahorros", err ))
    },
    eliminar(){
      console.log('hola')
    }
  },
  created(){
    this.traerCuentas()
  }
};
</script>


