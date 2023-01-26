import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Tables from "../views/Tables.vue";
import Billing from "../views/Billing.vue";
//import VirtualReality from "../views/VirtualReality.vue"; 
import Profile from "../views/Profile.vue";
import Signup from "../views/Signup.vue";
import SignupCliente from "../views/SignupCliente.vue";
import Signin from "../views/Signin.vue";
import Meeting from "../views/Meeting.vue";
import Payment from "../views/Payment.vue";
import Lend from "../views/Lend.vue";
import Penalty_fee from "../views/Penalty_fee.vue";
import ErrorComponent from "../views/ErrorComponent"
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
  {
    path: "/payment",
    name: "Abonos",
    component: Payment,
  },
  {
    path: "/lend",
    name: "Préstamo",
    component: Lend,
  },
  {
    path: "/penalty_fee",
    name: "Sanciones",
    component: Penalty_fee,
  },
  {
    path: "/:pathMatch(.*)*",
    component: ErrorComponent
  }
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
