<template>
  <div class="container top-0 position-sticky z-index-sticky">
    <div class="row">
      <div class="col-12">
        <navbar isBtn="bg-gradient-light" />
      </div>
    </div>
  </div>
  <main class="main-content mt-0">
    <div
      class="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg"
      style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signup-cover.jpg'); background-position: top;"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5 text-center mx-auto">
            <h1 class="text-white mb-2 mt-5">Bienvenid@!</h1>
            <p
              class="text-lead text-white"
            >Para registrarte como asociado por favor completa el siguiente formulario</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
        <div class="col-xl-4 col-lg-5 col-md-7 mx-auto">
          <div class="card z-index-0">
            <div class="card-header text-center pt-4">
              <h5>Registro</h5>
            </div>
            <div class="card-body">
              <form role="form">
                <argon-input type="text" placeholder="Nombre(s)" aria-label="Nombre" />
                <argon-input type="text" placeholder="Apellidos" aria-label="Apellido" />
                <argon-input type="date" placeholder="Fecha de nacimiento" aria-label="Fecha_nacimiento" />
                <argon-input type="tel" placeholder="Teléfono" aria-label="Telefono" /> 
                <argon-input type="text" placeholder="Ocupación" aria-label="Ocupacion" />
                <argon-input type="text" placeholder="Ciudad" aria-label="Ciudad" />
                <argon-input type="email" placeholder="Correo electrónico" aria-label="Correo" />
                <argon-input type="password" placeholder="Contraseña" aria-label="Contraseña" />
                <argon-checkbox checked>
                  <label class="form-check-label" for="flexCheckDefault">
                    Acepto
                   <!-- <a   
                    href="#" class="text-dark font-weight-bolder">
                            <span class="btn-inner--icon"></span>
                            <span class="btn-inner--text">términos y condiciones</span>
                            
                  </a>-->
                  <button id="show-modal" @click="showModal = true"> términos y condiciones</button>
                    <!-- use the modal component, pass in the prop -->
                    <modal :show="showModal" @close="showModal = false">
                      <template #header>
                        <h3>Términos y condiciones</h3>
                      </template>
                    </modal> 
                  </label>
                </argon-checkbox>
                <div class="text-center">
                  <argon-button fullWidth color="dark" variant="gradient" class="my-4 mb-2">Registrarse</argon-button>
                </div>
                <p class="text-sm mt-3 mb-0">
                  ¿Tienes cuenta?
                  <a
                    href="/signin"
                    class="text-dark font-weight-bolder"
                  >Iniciar sesión</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <app-footer />
</template>

<script>
import Navbar from "@/examples/PageLayout/Navbar.vue";
import AppFooter from "@/examples/PageLayout/Footer.vue";
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonCheckbox from "@/components/ArgonCheckbox.vue";
import ArgonButton from "@/components/ArgonButton.vue";
import Modal from "@/components/Modal.vue";

const body = document.getElementsByTagName("body")[0];

export default {
  name: "signup",
  components: {
    Navbar,
    AppFooter,
    ArgonInput,
    ArgonCheckbox,
    ArgonButton,
    Modal,
  },
  created() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    body.classList.add("bg-gray-100");
  },
  data() {
    return {
      showModal: false
    }
  }
};
</script>
