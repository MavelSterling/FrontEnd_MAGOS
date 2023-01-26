<template>
  <div class="card h-100">
    <div class="p-3 card-body">
      <h6>{{ title }}</h6>
      <div class="pt-3 chart">
        <canvas id="chart-cons-week" class="chart-canvas" height="170"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
export default {
  name: "consumption-day-chart",

  props: {
    title: {
      type: String,
      default: 'Consumption per day'
    },
    label: Array,
    data: Array,
    label_dataset: String
  },

  mounted() {
    // Chart Consumption by day
    var ctx = document.getElementById("chart-cons-week").getContext("2d");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: this.$props.label,
        datasets: [
          {
            label: this.$props.label_dataset,
            tension: 0.4,
            borderWidth: 0,
            borderRadius: 4,
            borderSkipped: false,
            backgroundColor: "#3A416F",
            data: this.$props.data,
            maxBarThickness: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        interaction: {
          intersect: false,
          mode: "index",
        },
        scales: {
          y: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
            },
            ticks: {
              display: false,
            },
          },
          x: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
            },
            ticks: {
              beginAtZero: true,
              font: {
                size: 12,
                family: "Open Sans",
                style: "normal",
              },
              color: "#9ca2b7",
            },
          },
          // eslint-disable-next-line no-dupe-keys
          y: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: true,
              drawTicks: false,
              borderDash: [5, 5],
            },
            ticks: {
              display: true,
              padding: 10,
              color: "#9ca2b7",
            },
          },
          // eslint-disable-next-line no-dupe-keys
          x: {
            grid: {
              drawBorder: false,
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
              borderDash: [5, 5],
            },
            ticks: {
              display: true,
              padding: 10,
              color: "#9ca2b7",
            },
          },
        },
      },
    });
  },
};
</script>
