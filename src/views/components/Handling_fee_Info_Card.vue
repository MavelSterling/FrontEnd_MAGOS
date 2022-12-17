<template>
  <div class="card">
    <div class="card-header pb-0 px-3">
      <h6 class="mb-0">Información de la Cuota de Manejo</h6>
    </div>
    <div class="card-body pt-4 p-3">
      <ul class="list-group">
        <li class="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
          <div class="d-flex flex-column">
           <!-- <h6 class="mb-3 text-sm">Oliver Liam</h6>-->
            <span class="mb-2 text-xs">
              ID Cuenta de Manejo:
              <span class="text-dark font-weight-bold ms-sm-2">01</span>
            </span>
            <span class="mb-2 text-xs">
              ID Asociado:
              <span class="text-dark font-weight-bold ms-sm-2">01</span>
            </span>
            <span class="mb-2 text-xs">
              Fecha de inicio:
              <span class="text-dark ms-sm-2 font-weight-bold">01/12/2022</span>
            </span>
            <span class="mb-2 text-xs">
              Fecha de fin:
              <span class="text-dark ms-sm-2 font-weight-bold">01/12/2022</span>
            </span>
            <span class="mb-2 text-xs">
              Tasa de interés:
              <span class="text-dark ms-sm-2 font-weight-bold">1000000</span>
            </span>
          </div>
          <div class="ms-auto text-end">
           <!--<a class="btn btn-link text-danger text-gradient px-3 mb-0" href="javascript:;">
              <i class="far fa-trash-alt me-2" aria-hidden="true"></i>Desactivar
            </a>--> 
            <a class="btn btn-link text-dark px-3 mb-0" href="javascript:;">
              <i class="fas fa-pencil-alt text-dark me-2" aria-hidden="true"></i>Consultar
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Handling_fee_Info_Card",
};
</script>
