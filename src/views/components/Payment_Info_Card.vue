<template>
  <div class="card">
    <div class="card-header pb-0 px-3">
      <h6 class="mb-0">Información de abonos que has consignado</h6>
    </div>
    <div class="card-body pt-4 p-3">
      <ul class="list-group" v-for="abono in abonos" :key="abono.idAbono">
        <Payment_Info_Card_Component :abono="abono" :abonoAMiCuenta="false"  />
      </ul>
    </div>
  </div>

  <div class="card">
    <div class="card-header pb-0 px-3">
      <h6 class="mb-0">Información de abonos que te han consignado</h6>
    </div>
    <div class="card-body pt-4 p-3">
      <ul class="list-group" v-for="abono in abonosQueTeConsignaron" :key="abono.idAbono">
        <Payment_Info_Card_Component :abono="abono" :abonoAMiCuenta="true"  />
      </ul>
    </div>
  </div>
</template>

<script>
import Payment_Info_Card_Component from './helpers/Payment_Info_Card_Component.vue';
import Usuario from '@/classes/Usuario.js';
import Conexion from '@/classes/Conexion'; 
export default {
  name: "Payment_Info_Card",
  components:{
    Payment_Info_Card_Component
  },
  data(){
    return {
      usuario : new Usuario(),
      abonosQueTeConsignaron : null,
      abonos : 
      // null
      // mocks hasta que el BACKEND haya terminado la api
      [ 
    {
        "idAbono": 666,
        "monto": 6666666,
        "fecha": "2025-01-06",
        "descripcion": "prueba",
        "idPrestamo": "blablabla",
        "abona": "555121",
        "cuentaAhorro": 31312,
        "idSancion": 3124
    }
]
    } 
  },
  methods:{
    traerAbonos(){
      Conexion.leerAbonos( this.usuario.getToken)
        .then( resp => {
          this.abonos = resp.data
        })
        .catch( err => console.log('Sucedió un eror', err))
    },
    // RECORDAR HACER MÉTODO PARA OBTENER AQUELLOS ABONOS QUE SE LE HAN CONSIGNADO AL USUARIO
    traerAbonosQueTeConsignaron(){
      Conexion.leerAbonos( this.usuario.getToken)
        .then( resp => {
          this.abonosQueTeConsignaron = resp.data
        })
        .catch( err => console.log('Sucedió un eror', err))
    }
  },
  created(){
    this.traerAbonos()
    this.traerAbonosQueTeConsignaron()
  }
};
</script>
