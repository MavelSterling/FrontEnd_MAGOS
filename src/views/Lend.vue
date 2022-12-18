<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="row mt-4">
          <!--<div class="col-xl-6 mb-xl-0 mb-4">
            <master-card />
          </div>-->
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
            <Lend_Card/>
          </div>
        </div>
      </div>
      <!--<div class="col-lg-4">
        <invoice-card class="mt-4" />
      </div>-->
    </div>
    <div class="row">
      <div class="col-md-12">
        <Lend_InfoCard />
      </div>
     <!-- <div class="col-md-7">
        <billing-card />
      </div>
      <div class="col-md-5">
        <transaction-card />
      </div>-->
    </div>
  </div>
</template>

<script>
//import MasterCard from "@/examples/Cards/MasterCard.vue";
//import DefaultInfoCard from "@/examples/Cards/DefaultInfoCard.vue";
import Lend_Card from "./components/Lend_Card.vue";
import Lend_InfoCard from "./components/Lend_Info_Card.vue";
//import InvoiceCard from "./components/InvoiceCard.vue";
//import BillingCard from "./components/BillingCard.vue";
//import TransactionCard from "./components/TransactionCard.vue";

export default {
  name: "Lend",
  components: {
    /* MasterCard,*/
   /* DefaultInfoCard,*/
   /* SavingCard,*/
    Lend_Card,
    Lend_InfoCard,
   /* InvoiceCard,*/
    /*BillingCard,*/
   /* TransactionCard,*/
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
