<template> 
  <main class="main-content mt-0">
    <div
      class="page-header align-items-start min-vh-50 pt-10 pb-11 m-3 border-radius-lg"
      style="background-image: url('https://img.freepik.com/vector-gratis/ups-error-404-ilustracion-concepto-robot-roto_114360-5529.jpg?w=2000'); background-position: top;"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5 text-center mx-auto">
            <h1 class="text-white mb-2 mt-5">ERROR 404</h1>
            <p
              class="text-lead text-white"
            >Página no encontrada, por favor ingrese el link correctamente</p>
            <br>
            <p
              class="text-lead text-white"
            >Haz click <a class="font-weight-bold font-italic text-success" @click="irAPaginaPrincipal">aquí</a>  para ir a la página principal.</p>
          </div>
        </div>
      </div>
    </div>


  </main>
  <app-footer />
</template>

<script>
/* eslint-disable */  
 

export default {
  name: "signup",
  components: { 
  },
  created() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false; 
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true; 
  },
  data() { 
  },
  methods : {
    irAPaginaPrincipal( evento ){
      evento.preventDefault()
      this.$router.push({name: 'Signin'})
    } 
  }  
}
</script>

<style scoped>
 a{
  cursor: pointer;
 }
</style>
