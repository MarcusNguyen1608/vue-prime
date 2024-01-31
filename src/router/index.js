import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../pages/Dashboard.vue";
import Login from '../pages/Login.vue';

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      layout: 'Dashboard'
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      layout: 'Default'
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
