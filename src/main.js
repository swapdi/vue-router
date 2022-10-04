import { createApp } from "vue";
import { createPinia } from "pinia";
import { createVuetify } from "vuetify";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
/* import "vuetify/styles"; */

const app = createApp(App);
const vuetify = createVuetify();

app.use(createPinia());
app.use(router);
app.use(vuetify);

app.mount("#app");
