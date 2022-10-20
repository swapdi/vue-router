import { createApp } from "vue";
import { createPinia } from "pinia";
import vuetify from "./plugins/vuetify";
import VueDraggable from "vuedraggable";
import { createI18n } from "vue-i18n";

/* import Deutsch from "./assets/german.json";
import Englisch from "./assets/english.json";
 */
import languages from "./assets/languages.js";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
/* import "vuetify/styles"; */

const Deutsch = languages.german;
const Englisch = languages.english;

const pinia = createPinia();
/* const i18n = createI18n({
  locale: "Deutsch",
  messages: {
    Deutsch,
    Englisch,
  },
}); */
const i18n = createI18n({
  locale: "Deutsch",
  messages: {
    Deutsch,
    Englisch,
  },
});

createApp(App)
  .use(router)
  .use(pinia)
  .use(vuetify)
  .use(VueDraggable)
  .use(i18n)
  .mount("#app");
