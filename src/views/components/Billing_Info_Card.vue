import Conexion from '@/classes/Conexion.js';
<template>
  <div class="card">
    <div class="card-header pb-0 px-3">
      <h6 class="mb-0">Información de la cuenta</h6>
    </div>
    <div class="card-body pt-4 p-3">
      <ul class="list-group">
        <li class="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
          <div class="d-flex flex-column">
           <!-- <h6 class="mb-3 text-sm">Oliver Liam</h6>-->
            <span class="mb-2 text-xs">
              ID cuenta de ahorro:
              <span class="text-dark font-weight-bold ms-sm-2">01</span>
            </span>
            <span class="mb-2 text-xs">
              ID Asociado:
              <span class="text-dark font-weight-bold ms-sm-2">01</span>
            </span>
            <span class="mb-2 text-xs">
              Fecha del préstamo:
              <span class="text-dark ms-sm-2 font-weight-bold">01/12/2022</span>
            </span>
            <span class="text-xs">
              Descripción del ahorro:
              <span class="text-dark ms-sm-2 font-weight-bold">FRB1235476</span>
            </span>
            <span class="mb-2 text-xs">
              Valor del ahorro:
              <span class="text-dark ms-sm-2 font-weight-bold">1000000</span>
            </span>
            <span class="mb-2 text-xs">
              Tipo de consignación:
              <span class="text-dark ms-sm-2 font-weight-bold">Activo</span>
            </span>
            <span class="mb-2 text-xs">
              Firma:
              <span class="text-dark ms-sm-2 font-weight-bold">Nombre</span>
            </span>
          </div>
          <div class="ms-auto text-end">
            <a class="btn btn-link text-danger text-gradient px-3 mb-0" href="javascript:;">
              <i class="far fa-trash-alt me-2" aria-hidden="true"></i>Desactivar
            </a>
            <a class="btn btn-link text-dark px-3 mb-0" href="javascript:;">
              <i class="fas fa-pencil-alt text-dark me-2" aria-hidden="true"></i>Editar
            </a>
          </div>
        </li>
        <li class="list-group-item border-0 d-flex p-4 mb-2 mt-3 bg-gray-100 border-radius-lg">
          <div class="d-flex flex-column">
            <span class="mb-2 text-xs">
              ID cuenta de ahorro:
              <span class="text-dark font-weight-bold ms-sm-2">01</span>
            </span>
            <span class="mb-2 text-xs">
              ID Asociado:
              <span class="text-dark font-weight-bold ms-sm-2">01</span>
            </span>
            <span class="mb-2 text-xs">
              Fecha del préstamo:
              <span class="text-dark ms-sm-2 font-weight-bold">01/12/2022</span>
            </span>
            <span class="text-xs">
              Descripción del ahorro:
              <span class="text-dark ms-sm-2 font-weight-bold">FRB1235476</span>
            </span>
            <span class="mb-2 text-xs">
              Valor del ahorro:
              <span class="text-dark ms-sm-2 font-weight-bold">1000000</span>
            </span>
            <span class="mb-2 text-xs">
              Tipo de consignación:
              <span class="text-dark ms-sm-2 font-weight-bold">Activo</span>
            </span>
            <span class="mb-2 text-xs">
              Firma:
              <span class="text-dark ms-sm-2 font-weight-bold">Nombre</span>
            </span>
          </div>
          <div class="ms-auto text-end">
            <a class="btn btn-link text-danger text-gradient px-3 mb-0" href="javascript:;">
              <i class="far fa-trash-alt me-2" aria-hidden="true"></i>Desactivar
            </a>
            <a class="btn btn-link text-dark px-3 mb-0" href="javascript:;">
              <i class="fas fa-pencil-alt text-dark me-2" aria-hidden="true"></i>Editar
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Conexion from '@/classes/Conexion';
import Usuario from '@/classes/Usuario.js'; 
export default {
  name: "Billing_InfoCard",
  data(){
    return {
      cuentas : [],
      usuario : new Usuario()
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
