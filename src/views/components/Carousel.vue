<template>
  <div class="card card-carousel overflow-hidden h-100 p-0">
    <div id="carouselExampleCaptions" class="carousel slide h-100" data-bs-ride="carousel">
      <div class="carousel-inner border-radius-lg h-100">
        <div
          class="carousel-item h-100 active"
          :style="{backgroundImage: 'url(' + require('@/assets/img/carousel-1.jpg') + ')',
      backgroundSize: 'cover'}"
        >
          <div class="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
            <div class="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
             <i class="ni ni-credit-card text-dark opacity-10"></i>
            </div>
            <h5 class="text-white mb-1">Cuenta de Ahorros</h5>
            <p>Mantener tu dinero protegido y separado de los gastos es tu mejor inversión.</p>
          </div>
        </div>
        <div
          class="carousel-item h-100"
          :style="{backgroundImage: 'url(' + require('@/assets/img/carousel-2.jpg') + ')',
      backgroundSize: 'cover'}"
        >
          <div class="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
            <div class="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
              <i class="ni ni-money-coins text-dark opacity-10"></i>
            </div>
            <h5 class="text-white mb-1">Préstamos</h5>
            <p>Para nuestros asociados y clientes con la tasa de interés más baja del mercado. </p>
          </div>
        </div>
        <div
          class="carousel-item h-100"
          :style="{backgroundImage: 'url(' + require('@/assets/img/carousel-3.jpg') + ')',
      backgroundSize: 'cover'}"
        >
          <div class="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
            <div class="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
             <i class="ni ni-chart-bar-32 text-dark opacity-10"></i>
            </div>
            <h5 class="text-white mb-2">Reportes</h5>
            <p>Ten información constante del manejo de tu dinero.</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev w-5 me-3"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next w-5 me-3"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "carousel",
};
</script>
