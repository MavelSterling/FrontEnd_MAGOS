<template>
  <div class="py-4 container-fluid">
    <div class=" row">
      <div class="col-12">
        <authors-table />
      </div>
    </div>
    <div class="mt-4 row">
      <div class="col-12">
        <projects-table />
      </div>
    </div>
    <div class="mt-4 row">
      <div class="col-12" v-if="topPrestamos.label">
        <GradientLineChart v-bind:title="topPrestamos.title" v-bind:label="topPrestamos.label"
          v-bind:data="topPrestamos.data" />
      </div>
    </div>
    <div class="mt-4 row">
      <div class="col-12">
        <ConsumptionDayChart />
      </div>
    </div>
    <div class="mt-4 row">
      <div class="col-12">
        <ConsumptionRoomChart />
      </div>
    </div>
    <div class="mt-4 row">
      <div class="col-12">
        <ActiveUsersChart />
      </div>
    </div>
  </div>
</template>

<script>
import AuthorsTable from "./components/AuthorsTable.vue";
import ProjectsTable from "./components/ProjectsTable.vue";
import GradientLineChart from "../examples/Charts/GradientLineChart.vue";
import ConsumptionDayChart from "../examples/Charts/ConsumptionDayChart.vue"
import ConsumptionRoomChart from "../examples/Charts/ConsumptionRoomChart.vue"
import ActiveUsersChart from "../examples/Charts/ActiveUsersChart.vue"
import Reporte from "../classes/Reportes"
import { onMounted } from "vue";


export default {
  name: "tables",
  components: {
    AuthorsTable,
    ProjectsTable,
    GradientLineChart,
    ConsumptionDayChart,
    ConsumptionRoomChart,
    ActiveUsersChart
  },
  data() {
    return {
      topPrestamos: {
        title: 'TOP 10 meses con más prestamos',
        label: [],
        data: []
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
  async created() {
    await Reporte.reporte_mesPrestamos()
    await Reporte.reporte_topPrestamos()
    await Reporte.reporte_topAhorros()
    this.topPrestamos.label = Object.keys(Reporte.topPrestamos)
    this.topPrestamos.data = Object.values(Reporte.topPrestamos)
    /* await Reporte.reporte_fechaReunion(
      {
        fechaInicio: {
          year: 2023,
          month: 1,
          day: 1
        },
        fechaFin: {
          year: 2023,
          month: 1,
          day: 31
        }
      }
    ) */
  },
  async onMounted() {
    await Reporte.reporte_topPrestamos()
    this.topPrestamos.label = Object.keys(Reporte.topPrestamos)
    this.topPrestamos.data = Object.values(Reporte.topPrestamos)
    console.log(this.topPrestamos.label);
    console.log(this.topPrestamos.data);
  }
};
</script>
