<template>
  <div class="py-4 container-fluid">
    <div class="mt-4 row">
      <div v-if="topAhorros.items.length > 0" class="col-12">
        <table-reports v-bind:_columnas="topAhorros.columnas" v-bind:_filas="topAhorros.items" />
      </div>
    </div>
    <div class="mt-4 row">
      <div class="col-12" v-if="topPrestamos.label.length > 0">
        <GradientLineChart v-bind:title="topPrestamos.title" v-bind:label="topPrestamos.label"
          v-bind:data="topPrestamos.data" v-bind:label_dataset="topPrestamos.label_dataset" />
      </div>
    </div>
    <div class="mt-4 row">
      <div class="col-12" v-if="mesPrestamos.label.length > 0">
        <ConsumptionDayChart v-bind:title="mesPrestamos.title" v-bind:label="mesPrestamos.label"
          v-bind:data="mesPrestamos.data" v-bind:label_dataset="mesPrestamos.label_dataset" />
      </div>
    </div>
  </div>
</template>

<script>
import TableReports from "../examples/Charts/TableReports.vue";
import GradientLineChart from "../examples/Charts/GradientLineChart.vue";
import ConsumptionDayChart from "../examples/Charts/ConsumptionDayChart.vue"
import Reporte from "../classes/Reportes"


export default {
  name: "tables",
  components: {
    GradientLineChart,
    ConsumptionDayChart,
    TableReports
  },
  data() {
    return {
      mesPrestamos: {
        title: 'TOP 10 meses con más prestamos',
        label: [],
        data: [],
        label_dataset: 'Pesos'
      },
      topPrestamos: {
        title: 'Top Asociados con más prestamos',
        label: [],
        data: [],
        label_dataset: 'Prestamos'
      },
      topAhorros: {
        columnas: ['Cédula', 'Monto'],
        items: []
      },
      stats: {
        titleColor: "opacity-7 text-white",
        descColor: "text-white",
        trip: {
          title: "Today's Trip",
          desc: "145 KM",
          classIcon: "text-dark ni ni-money-coins",
        },
        health: {
          title: "Battery Health",
          desc: "99 %",
          classIcon: "text-dark ni ni-controller ",
        },
        speed: {
          title: "Average Speed",
          desc: "56 Km/h",
          classIcon: "text-dark ni ni-delivery-fast",
        },
        volume: {
          title: "Music Volume",
          desc: "15/100",
          classIcon: "text-dark ni ni-note-03",
        },
      },
    };
  },
  async mounted() {
    await Reporte.reporte_mesPrestamos()
    await Reporte.reporte_topPrestamos()
    await Reporte.reporte_topAhorros()
    this.mesPrestamos.label = Object.keys(Reporte.mesPrestamos)
    this.mesPrestamos.data = Object.values(Reporte.mesPrestamos)
    this.topPrestamos.label = Object.keys(Reporte.topPrestamos)
    this.topPrestamos.data = Object.values(Reporte.topPrestamos)
    this.topAhorros.items = Reporte.topAhorros
    console.log(this.topAhorros.items);
  },
};
</script>
