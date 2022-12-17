<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-9">
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
         <div class="col-md-13 mb-3">
            <Payment_card/>
          </div>
        </div>
      </div>
      <!--<div class="col-lg-4">
        <invoice-card class="mt-4" />
      </div>-->
    </div>
    <div class="row">
      <div class="col-md-9">
      <Payment_Info_Card />
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
import Payment_card from "./components/Payment_Card.vue";
//import InvoiceCard from "./components/InvoiceCard.vue";
import Payment_Info_Card from "./components/Payment_Info_Card.vue";
//import TransactionCard from "./components/TransactionCard.vue";

export default {
  name: "Payment",
  components: {
    /*MasterCard,*/
   /* DefaultInfoCard,*/
   Payment_card,
   /* InvoiceCard,*/
    Payment_Info_Card,
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
    };
  },
};
</script>
