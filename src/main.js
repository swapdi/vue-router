import { createApp } from "vue";
import { createPinia } from "pinia";
import vuetify from "./plugins/vuetify";
import VueDraggable from "vuedraggable";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "vuetify/styles";

const pinia = createPinia();

createApp(App)
  .use(router)
  .use(pinia)
  .use(vuetify)
  .use(VueDraggable)
  .mount("#app");
