import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Tables from "../views/Tables.vue";
import Billing from "../views/Billing.vue";
//import VirtualReality from "../views/VirtualReality.vue";
import RTL from "../views/Rtl.vue";
import Profile from "../views/Profile.vue";
import Signup from "../views/Signup.vue";
import SignupCliente from "../views/SignupCliente.vue";
import Signin from "../views/Signin.vue";
import Meeting from "../views/Meeting.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/signin",
  },
  {
    path: "/dashboard-default",
    name: "Página de inicio",
    component: Dashboard,
  },
  {
    path: "/tables",
    name: "Reportes",
    component: Tables,
  },
  {
    path: "/billing",
    name: "Cuenta de Ahorros",
    component: Billing,
  },
  /*{
    path: "/virtual-reality",
    name: "Virtual Reality",
    component: VirtualReality,
  },*/
  {
    path: "/rtl-page",
    name: "RTL",
    component: RTL,
  },
  {
    path: "/profile",
    name: "Perfil de usuario",
    component: Profile,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/signup-cliente",
    name: "Signup cliente",
    component: SignupCliente,
  },
  {
    path: "/meeting",
    name: "Reuniones",
    component: Meeting,
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
