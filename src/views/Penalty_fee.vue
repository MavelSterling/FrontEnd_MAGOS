<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="row mt-4">
          <div class="col-xl-6 mb-xl-0 mb-4">
            <master-card />
          </div>
          <div class="col-xl-6">
            <div class="row">
              <!--<div class="col-md-6">
                <default-info-card
                  :classIcon="salary.classIcon"
                  :title="salary.title"
                  :desc="salary.desc"
                  :price="salary.price"
                />
              </div>-->
              <!--<div class="col-md-6">
                <default-info-card
                  :classIcon="paypal.classIcon"
                  :title="paypal.title"
                  :desc="paypal.desc"
                  :price="paypal.price"
                />
              </div>-->
            </div>
          </div>
         <div class="col-md-13 mb-3" v-if="usuario.getRol === 'admin'">
            <Penalty_fee_Card/>
          </div>
        </div>
      </div>
      <!--<div class="col-lg-4">
        <invoice-card class="mt-4" />
      </div>-->
    </div>
    <div class="row">
      <div class="col-md-12">
      <Penalty_fee_Info_Card />
      </div>
      <!--<div class="col-md-5">
        <transaction-card />
      </div>-->
    </div>
  </div>
</template>

<script>
//import MasterCard from "@/examples/Cards/MasterCard.vue";
//import DefaultInfoCard from "@/examples/Cards/DefaultInfoCard.vue";
import Penalty_fee_Card from "./components/Penalty_fee_Card.vue";
//import InvoiceCard from "./components/InvoiceCard.vue";
import Penalty_fee_Info_Card from "./components/Penalty_fee_Info_Card.vue";
//import TransactionCard from "./components/TransactionCard.vue";
import Usuario from '@/classes/Usuario.js';

export default {
  name: "Penalty_fee",
  components: {
    /*MasterCard,*/
   /* DefaultInfoCard,*/
   Penalty_fee_Card,
   /* InvoiceCard,*/
   Penalty_fee_Info_Card,
    /*TransactionCard,*/
  },
  data() {
    return {
      /*salary: {
        classIcon: "text-white fas fa-landmark",
        title: "Ahorro:",
        desc: "Monto del ahorrado:",
        price: "+$2000",
      },
      paypal: {
        classIcon: "text-white fab fa-paypal",
        title: "Abonos",
        desc: "Monto recibido:",
        price: "$455.00",
      },*/
      usuario: new Usuario()
    };
  },
};
</script>
