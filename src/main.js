import { createApp } from "vue";
import PrimeVue from "primevue/config";

import App from "./App.vue";

import "primevue/resources/themes/aura-light-green/theme.css";
import router from "./router";
import Lara from './presets/lara'
import './assets/base.css';
import 'primeicons/primeicons.css'

const app = createApp(App);
app.use(PrimeVue, {
  unstyled: true,
  pt: Lara,
});
app.use(router);
app.mount("#app");
