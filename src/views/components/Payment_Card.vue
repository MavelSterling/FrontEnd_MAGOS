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
                <option value="ahorros" selected="true">Ahorros</option>
                <option value="prestamos">Préstamos</option>
                <option value="sanciones">Sanciones</option>
              </select> 
            </form>

            <form action="#" class="col-md-6 mb-md-0 mb-4 card card-body border card-plain border-radius-lg d-flex align-items-center flex-row">
              <label for="lang">Cuenta de ahorros con la que pagará</label>
              <select name="tipoConsignacion" id="lang" class="col-md-6 mb-md-0 mb-4 card card-body border card-plain border-radius-lg d-flex align-items-center flex-row" v-model="cuenta">
                <!-- AÑADIR FUNCIONALIDAD BACKEND-->
                <option value="123" >1412412</option>
                <option value="123" >1412412</option>
                <option value="123" >1412412</option>
              </select> 
            </form>

            <input class="col-md-6 mb-md-0 mb-4 card card-body border card-plain border-radius-lg d-flex align-items-center flex-row" type="number" placeholder="Monto a abonar" v-model="monto">

            <input class="col-md-6 mb-md-0 mb-4 card card-body border card-plain border-radius-lg d-flex align-items-center flex-row" type="date" placeholder="Monto" v-model="fecha">

            <input class="col-md-6 mb-md-0 mb-4 card card-body border card-plain border-radius-lg d-flex align-items-center flex-row" type="text" placeholder="Descripción" v-model="descripcion">
 

    </div>
    <div class="col-10 text-end mb-3">
          <argon-button class="bg-gradient-info text-white">
           <!--<i class="fas fa-plus me-1"></i>--> 
            Ingresar abono
          </argon-button>
        </div> 
  </div>
  </div> 
</template>

<script>
import ArgonButton from "@/components/ArgonButton.vue";
import img1 from "@/assets/img/logos/mastercard.png";
import img2 from "@/assets/img/logos/dinero.png";

export default {
  name: "Payment_card",
  components: {
    ArgonButton,
  },
  data() {
    return {
      img1,
      img2,
    };
  },
};
</script>
