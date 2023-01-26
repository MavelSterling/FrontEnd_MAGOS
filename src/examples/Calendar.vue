<template>
  <div class="card widget-calendar h-100">
    <!-- Card header -->
    <div class="p-3 pb-0 card-header">
      <h6 class="mb-0">{{ "Agenda del mes"}}</h6>
      <div class="d-flex">
        <div class="mb-0 text-sm p font-weight-bold widget-calendar-day">Enero</div>
        <span>,&nbsp;</span>
        <div class="mb-1 text-sm p font-weight-bold widget-calendar-year">2023</div>
      </div>
    </div>
    <!-- Card body -->
    <div class="p-3 card-body">
      <div data-toggle="widget-calendar" id="widget-calendar"></div>
    </div>
  </div>
</template>

<script>
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
export default {
  name: "Calendar",
  props: {
    title: {
      type: String,
      default: "Calendar",
    },
  },
  mounted() {
    var calendar = new Calendar(document.getElementById("widget-calendar"), {
      contentHeight: "auto",
      plugins: [dayGridPlugin],
      initialView: "dayGridMonth",
      headerToolbar: false,
      selectable: true,
      editable: true,
      initialDate: "2023-01-01",
      events: [
        {
          title: "Reunión cancelada",
          start: "2022-12-18",
          end: "2022-12-18",
          className: "bg-gradient-danger",
        },

        {
          title: "Reunión",
          start: "2022-12-21",
          end: "2022-12-22",
          className: "bg-gradient-info",
        },
        {
          title: "Reunión finalizada",
          start: "2022-12-01",
          end: "2022-12-01",
          className: "bg-gradient-success",
        },
      ],
      views: {
        month: {
          titleFormat: {
            month: "long",
            year: "numeric",
          },
        },
        agendaWeek: {
          titleFormat: {
            month: "long",
            year: "numeric",
            day: "numeric",
          },
        },
        agendaDay: {
          titleFormat: {
            month: "short",
            year: "numeric",
            day: "numeric",
          },
        },
      },
    });

    calendar.render();
  },
};
</script>
