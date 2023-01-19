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
      <div class="col-12">
        <GradientLineChart/>
      </div>
    </div>
    <div class="mt-4 row">
      <div class="col-12">
        <ConsumptionDayChart/>
      </div>
    </div>
    <div class="mt-4 row">
      <div class="col-12">
        <ConsumptionRoomChart/>
      </div>
    </div>
    <div class="mt-4 row">
      <div class="col-12">
        <ActiveUsersChart/>
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
import Conexion from "../classes/Conexion";


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
      topahorros: Array,
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
  methods:{
    async reporte_topAhorros(){
      this.topahorros = await Conexion.reporte_top_ahorros()
      console.log(this.topahorros);
      let cedula = this.topahorros.filter((item)=>{ return typeof item.DocAsociado_id === 'string' })
      console.log(cedula);
    }
  },
  mounted(){
    this.reporte_topAhorros()
  }
};
</script>
