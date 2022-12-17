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
              <div class="col-md-6">
                <default-info-card
                  :classIcon="salary.classIcon"
                  :title="salary.title"
                  :desc="salary.desc"
                  :price="salary.price"
                />
              </div>
              <div class="col-md-6">
                <default-info-card
                  :classIcon="paypal.classIcon"
                  :title="paypal.title"
                  :desc="paypal.desc"
                  :price="paypal.price"
                />
              </div>
            </div>
          </div>
         <div class="col-md-12 mb-3">
            <saving-card/>
          </div>
        </div>
      </div>
     <!-- <div class="col-lg-4">
        <invoice-card class="mt-4" />
      </div>-->
    </div>
    <div class="row">
      <div class="col-md-12 mb-3">
        <Billing_InfoCard/>
      </div>
    </div>
    <div class="row">
     <!-- <div class="col-md-7">
        <billing-card />
      </div>-->
      <div class="col-md-5 mb-3">
        <transaction-card />
      </div>
      <div class="col-md-7 mb-3">
        <Handling_fee_Info_Card/>
      </div>
    </div>
  </div>
</template>

<script>
import MasterCard from "@/examples/Cards/MasterCard.vue";
import DefaultInfoCard from "@/examples/Cards/DefaultInfoCard.vue";
import SavingCard from "./components/SavingCard.vue";
//import InvoiceCard from "./components/InvoiceCard.vue";
//import BillingCard from "./components/BillingCard.vue";
import TransactionCard from "./components/TransactionCard.vue";
import Billing_InfoCard from "./components/Billing_Info_Card.vue";
import Handling_fee_Info_Card from "./components/Handling_fee_Info_Card.vue";

export default {
  name: "Billing",
  components: {
    MasterCard,
    DefaultInfoCard,
    SavingCard,
    /*InvoiceCard,*/
    /*BillingCard,*/
    TransactionCard,
    Billing_InfoCard,
    Handling_fee_Info_Card,
  },
  data() {
    return {
      salary: {
        classIcon: "text-white fas fa-landmark",
        title: "Ahorro:",
        desc: "Monto del ahorrado:",
        price: "+$2000",
      },
      paypal: {
        classIcon: "text-white fab fa-paypal",
        title: "Cuota de manejo",
        desc: "Valor:",
        price: "$455.00",
      },
    };
  },
};
</script>
